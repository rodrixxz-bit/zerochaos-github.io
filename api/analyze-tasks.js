// api/analyze-tasks.js
import { InferenceClient } from '@huggingface/inference';

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { tasks } = req.body; // Recibe las tareas del frontend

    if (!tasks || tasks.length === 0) {
      return res.status(400).json({ error: 'No tasks provided' });
    }

    // Configura tu token de Hugging Face (usa variables de entorno)
    const HF_TOKEN = process.env.HF_TOKEN; // Configúralo en Vercel
    const client = new InferenceClient(HF_TOKEN);

    // El mismo prompt y lógica que tienes en main.js
    const taskNames = tasks.map((task, index) => `${index + 1}. ${task.name}`).join('\n');
    
    const prompt = `Eres un experto en gestión de proyectos. Analiza estas tareas y clasifícalas por dificultad según estos criterios:

**CRITERIOS DE DIFICULTAD:**

🟢 FÁCIL (1): 
- Tareas simples y rápidas (menos de 30 minutos)
- No requieren conocimientos técnicos avanzados
- Ejemplos: enviar email, actualizar documento, hacer llamada, revisar texto

🟡 MEDIA (2):
- Tareas que requieren 1-3 horas
- Conocimientos técnicos básicos o intermedios
- Ejemplos: crear presentación, configurar herramienta, investigar tema, escribir artículo

🔴 DIFÍCIL (3):
- Tareas complejas (más de 3 horas)
- Requieren conocimientos técnicos avanzados
- Múltiples pasos o dependencias
- Ejemplos: desarrollar API, diseñar arquitectura, implementar base de datos, crear sistema completo

**TAREAS A ANALIZAR:**
${taskNames}

**INSTRUCCIONES:**
- Analiza cada tarea considerando: complejidad técnica, tiempo estimado, conocimientos requeridos
- Responde SOLO con números (1, 2 o 3) separados por comas
- Un número por cada tarea en el mismo orden
- NO agregues explicaciones, SOLO números

Ejemplo de respuesta correcta: 1,3,2,1,3`;

    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "meta-llama/Llama-3.2-3B-Instruct",
      messages: [
        {
          role: "system",
          content: "Eres un experto en gestión de proyectos que clasifica tareas por dificultad de forma precisa y consistente."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 100,
      temperature: 0.2
    });

    const response = chatCompletion.choices[0].message.content;
    const numbers = response.match(/[1-3]/g) || [];

    // Asigna dificultad a las tareas
    tasks.forEach((task, i) => {
      task.difficulty = parseInt(numbers[i]) || 2;
      const diffLabels = { 
        1: '🟢 Fácil', 
        2: '🟡 Media', 
        3: '🔴 Difícil' 
      };
      task.difficultyLabel = diffLabels[task.difficulty];
    });

    // Ordena por dificultad
    const sortedTasks = tasks.sort((a, b) => (a.difficulty || 0) - (b.difficulty || 0));

    res.status(200).json({ sortedTasks });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to analyze tasks' });
  }
}
