import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { HfInference } from '@huggingface/inference';

// Estado de la aplicación
let currentPage = 'landing';
let loggedInUser = null;
let users = [];

// Contenedor principal
const app = document.querySelector('#app')

// Función para renderizar la pagina actual
function render() {
  if (currentPage === 'landing' && !loggedInUser) {
    renderLandingPage();
  } else if (currentPage === 'login') {
    renderLoginPage();
  } else if (currentPage === 'register') {
    renderRegisterPage();
  } else if (currentPage === 'dashboard' && loggedInUser) {
    renderDashboard();
  } else if (currentPage === 'pricing' && loggedInUser) {
    renderPricingPage();
  } else if (currentPage === 'teams' && loggedInUser) {
    renderTeamsPage();
  } else if (currentPage === 'calendar' && loggedInUser) {
    renderCalendarPage();
  } else if (currentPage === 'settings' && loggedInUser) {
    renderSettingsPage();
  }
}

// Función para analizar dificultad de tareas con IA (MEJORADA)
async function analyzeTasks(tasks) {
  if (!tasks || tasks.length === 0) {
    console.log('No hay tareas para analizar');
    return tasks;
  }

  // Detectar si estamos en desarrollo local
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isDevelopment) {
    // Modo desarrollo: usar HuggingFace directamente desde el frontend
    try {
      const HF_TOKEN = import.meta.env.VITE_HF_TOKEN || 'tu_token_aqui';
      const client = new HfInference(HF_TOKEN);

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
      return sortedTasks;
    } catch (error) {
      console.error('Error en desarrollo:', error);
      throw new Error('Error al analizar tareas en modo desarrollo');
    }
  } else {
    // Modo producción: usar la API serverless de Vercel
    try {
      const response = await fetch('/api/analyze-tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks }),
      });

      if (!response.ok) {
        throw new Error('Error en el análisis de IA');
      }

      const data = await response.json();
      return data.sortedTasks;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
// LANDING PAGE
function renderLandingPage() {
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-dark" style="background-color: #2d3748;">
      <div class="container-fluid px-4">
        <span class="navbar-brand mb-0 h1 fs-2 fw-bold">ZeroChaos</span>
        <div class="d-flex gap-2">
          <button class="btn btn-primary px-4" id="btnLogin">
            Login
          </button>
          <button class="btn btn-light px-4" id="btnRegister">
            Register
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="d-flex align-items-center justify-content-center" 
         style="min-height: calc(100vh - 72px); background-color: #e2e8f0;">
      <div class="text-center px-4">
        <h1 class="display-3 fw-bold mb-3" style="color: #1a202c;">
          Organiza tus proyectos con
        </h1>
        <h2 class="display-3 fw-bold mb-4" style="color: #0d6efd;">
          ZeroChaos
        </h2>
        <p class="fs-4 mb-5" style="color: #4a5568; max-width: 700px; margin: 0 auto;">
          Un plataforma moderna de gestion de proyectos para mejorar tu productividad
        </p>
        <button class="btn btn-primary btn-lg px-5 py-3" id="btnEmpezar">
          Empezar
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('btnLogin').addEventListener('click', () => {
    currentPage = 'login';
    render();
  });

  document.getElementById('btnRegister').addEventListener('click', () => {
    currentPage = 'register';
    render();
  });

  document.getElementById('btnEmpezar').addEventListener('click', () => {
    currentPage = 'login';
    render();
  });
}

// LOGIN PAGE
function renderLoginPage() {
  app.innerHTML = `
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4" 
         style="background: linear-gradient(135deg, #0d6efd 0%, #4c1d95 100%);">
      <div style="width: 100%; max-width: 450px;">
        <div class="text-center mb-4">
          <h1 class="display-4 fw-bold text-white mb-2">ZeroChaos</h1>
          <p class="text-white-50">Gestor de Proyectos Inteligente</p>
        </div>

        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="h3 fw-bold mb-4">Iniciar Sesión</h2>

            <div id="loginError" class="alert alert-danger d-none"></div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control form-control-lg" 
                     id="loginEmail" placeholder="correo@ejemplo.com">
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="loginPassword" placeholder="••••••">
            </div>

            <button class="btn btn-primary btn-lg w-100 mb-3" id="btnLoginSubmit">
              Iniciar Sesión
            </button>

            <p class="text-center mb-0">
              ¿No tienes cuenta? 
              <a href="#" class="text-primary fw-semibold text-decoration-none" id="linkRegister">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>

        <div class="alert alert-info mt-3">
          <p class="fw-semibold mb-2">Para probar, registra un usuario primero:</p>
          <p class="mb-0">Luego inicia sesión con tus credenciales</p>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('btnLoginSubmit').addEventListener('click', handleLogin);
  document.getElementById('loginPassword').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleLogin();
  });
  document.getElementById('linkRegister').addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'register';
    render();
  });
}
// REGISTER PAGE
function renderRegisterPage() {
  app.innerHTML = `
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4" 
         style="background: linear-gradient(135deg, #0d6efd 0%, #4c1d95 100%);">
      <div style="width: 100%; max-width: 450px;">
        <div class="text-center mb-4">
          <h1 class="display-4 fw-bold text-white mb-2">ZeroChaos</h1>
          <p class="text-white-50">Gestiona tus proyectos sin caos</p>
        </div>

        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="h3 fw-bold mb-4">Crear Cuenta</h2>

            <div id="registerError" class="alert alert-danger d-none"></div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Nombre Completo</label>
              <input type="text" class="form-control form-control-lg" 
                     id="registerName" placeholder="Tu nombre">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control form-control-lg" 
                     id="registerEmail" placeholder="correo@ejemplo.com">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="registerPassword" placeholder="••••••">
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Confirmar Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="registerConfirmPassword" placeholder="••••••">
            </div>

            <button class="btn btn-success btn-lg w-100 mb-3" id="btnRegisterSubmit">
              Registrarse
            </button>

            <p class="text-center mb-0">
              ¿Ya tienes cuenta? 
              <a href="#" class="text-primary fw-semibold text-decoration-none" id="linkLogin">
                Inicia sesión aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('btnRegisterSubmit').addEventListener('click', handleRegister);
  document.getElementById('linkLogin').addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'login';
    render();
  });
}

// DASHBOARD PAGE
function renderDashboard() {
  app.innerHTML = `
    <div style="display: flex; min-height: 100vh;">
      <!-- Sidebar -->
      <div id="sidebar" class="bg-dark text-white" style="width: 280px; min-height: 100vh; display: flex; flex-direction: column; position: fixed; left: 0; top: 0; transition: all 0.3s;">
        <div class="p-4">
          <h1 class="h3 fw-bold mb-5">ZeroChaos</h1>
          
          <nav class="nav flex-column gap-2">
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded active" 
               style="background-color: rgba(255,255,255,0.1);" id="navDashboard">
              <i class="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navProjects">
              <i class="bi bi-folder-fill"></i>
              <span>Projects</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navTeams">
              <i class="bi bi-people-fill"></i>
              <span>Teams</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navCalendar">
              <i class="bi bi-calendar-fill"></i>
              <span>Calendar</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navSettings">
              <i class="bi bi-gear-fill"></i>
              <span>Settings</span>
            </a>
          </nav>
        </div>

        <!-- Plan en el footer del sidebar -->
        <div style="margin-top: auto;" class="p-4">
          <div class="bg-secondary rounded p-3">
            <p class="mb-1 small fw-semibold">Plan Básico</p>
            <a href="#" class="text-white small text-decoration-none" id="linkPlans">Ver planes →</a>
          </div>
        </div>
      </div>

      <!-- Toggle Sidebar Button -->
      <button id="toggleSidebar" class="btn btn-dark position-fixed" 
              style="left: 280px; top: 20px; z-index: 1000; transition: left 0.3s;">
        <i class="bi bi-chevron-left"></i>
      </button>

      <!-- Main Content -->
      <div style="margin-left: 280px; flex: 1; background-color: #e2e8f0; min-height: 100vh;">
        <!-- Top Bar -->
        <div class="bg-white border-bottom p-3">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input type="text" class="form-control border-start-0" placeholder="Search">
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button class="btn btn-light rounded-circle me-2">
                  <i class="bi bi-inbox-fill"></i>
                </button>
                <button class="btn btn-light rounded-circle me-2">
                  <i class="bi bi-clock-fill"></i>
                </button>
                <button class="btn btn-light rounded-circle" id="btnProfile">
                  <i class="bi bi-person-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="h3 fw-bold">Dashboard</h2>
          </div>

          <!-- Projects Section -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="h5 fw-bold">Projects</h3>
            <button class="btn btn-primary" id="btnNewProject">
              <i class="bi bi-plus-lg me-2"></i>New Project
            </button>
          </div>

          <!-- Projects Grid -->
          <div class="row g-3 mb-5" id="projectsGrid">
            ${renderProjectCards()}
          </div>

          <!-- Recent Projects -->
          <h3 class="h5 fw-bold mb-3">Recent Projects</h3>
          <div class="row g-3">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">To Do</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: New Project -->
    <div class="modal fade" id="newProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Project Name</label>
              <input type="text" class="form-control" id="newProjectName" placeholder="Enter project name">
            </div>
            <div class="mb-3">
              <label class="form-label">Due Date (optional)</label>
              <input type="text" class="form-control" id="newProjectDue" placeholder="e.g., in 5 days, 2 weeks">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" id="btnCreateProject">Create Project</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Project Details -->
    <div class="modal fade" id="projectDetailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectDetailTitle">Project Name</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-4">
              <div class="input-group">
                <input type="text" class="form-control" id="newTaskName" placeholder="Add new task...">
                <button class="btn btn-success" id="btnAddTask">
                  <i class="bi bi-plus-lg"></i> Add Task
                </button>
              </div>
            </div>

            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h6 class="mb-0">Tasks</h6>
              <button class="btn btn-sm btn-primary" id="btnAISort">
                🤖 Ordenar con IA
              </button>
            </div>

            <div id="tasksList"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" id="btnDeleteProject">Delete Project</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  setupDashboardListeners();
}
// PRICING PAGE
function renderPricingPage() {
  const currentPlan = loggedInUser?.plan || 'basico';
  
  app.innerHTML = `
    <div class="d-flex" style="min-height: 100vh;">
      ${renderSidebar('pricing')}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f7fafc;">
        ${renderTopBar()}

        <!-- Pricing Content -->
        <div class="container py-5">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold mb-3">Escoge el plan que creas necesitar</h1>
            
            <!-- Toggle Mensual/Anual -->
            <div class="d-flex justify-content-center align-items-center gap-3 mb-5">
              <span class="fw-semibold" id="monthlyLabel" style="color: #000;">Mensual</span>
              <div class="form-check form-switch" style="font-size: 1.5rem;">
                <input class="form-check-input" type="checkbox" id="billingToggle" style="cursor: pointer;">
              </div>
              <span class="fw-semibold text-muted" id="annualLabel">Anual</span>
            </div>
          </div>

          <!-- Plans Grid -->
          <div class="row g-4 justify-content-center">
            <!-- Plan Básico -->
            <div class="col-md-4">
              <div class="card h-100 shadow-sm" style="border-radius: 12px;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Básico</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="basicPrice">0</span>
                    <span class="text-muted" id="basicPeriod"></span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Hasta 3 proyectos activos</li>
                    <li class="mb-3">• Hasta 3 miembros por equipo</li>
                    <li class="mb-3">• IA Básica: para ordenar tareas por dificultades</li>
                    <li class="mb-3">• Chat básico</li>
                    <li class="mb-3">• Almacenamiento limitado 2Gb</li>
                  </ul>

                  <button class="btn btn-dark w-100 py-2" id="btnBasicPlan" 
                          ${currentPlan === 'basico' ? 'disabled' : ''}>
                    ${currentPlan === 'basico' ? 'Plan Actual' : 'Empezar'}
                  </button>
                </div>
              </div>
            </div>

            <!-- Plan Premium -->
            <div class="col-md-4">
              <div class="card h-100 shadow-lg" style="border-radius: 12px; background-color: #2d3748; color: white;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Premium</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="premiumPrice">9.99</span>
                    <span class="text-white-50" id="premiumPeriod">/ mes</span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Incluye todo lo anterior+</li>
                    <li class="mb-3">• Hasta 10 proyectos activos</li>
                    <li class="mb-3">• Hasta 10 miembros por equipo</li>
                    <li class="mb-3">• Dashboard analítico básico</li>
                    <li class="mb-3">• Almacenamiento limitado 15Gb</li>
                  </ul>

                  <button class="btn btn-light w-100 py-2" id="btnPremiumPlan"
                          ${currentPlan === 'premium' ? 'disabled' : ''}>
                    ${currentPlan === 'premium' ? 'Plan Actual' : 'Comprar ahora'}
                  </button>
                </div>
              </div>
            </div>

            <!-- Plan Professional -->
            <div class="col-md-4">
              <div class="card h-100 shadow-sm" style="border-radius: 12px;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Professional</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="professionalPrice">19.99</span>
                    <span class="text-muted" id="professionalPeriod">/ mes</span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Incluye todo lo anterior +</li>
                    <li class="mb-3">• Hasta 30 miembros</li>
                    <li class="mb-3">• Dashboard analítico completo</li>
                    <li class="mb-3">• Subequipos / departamentos</li>
                    <li class="mb-3">• Almacenamiento ilimitado</li>
                  </ul>

                  <button class="btn btn-dark w-100 py-2" id="btnProfessionalPlan"
                          ${currentPlan === 'professional' ? 'disabled' : ''}>
                    ${currentPlan === 'professional' ? 'Plan Actual' : 'Comprar ahora'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Pago -->
    <div class="modal fade" id="paymentModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Procesar Pago</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-info">
              <strong>Modo Demo:</strong> Este es un pago simulado. No se procesará ningún cargo real.
            </div>

            <h6 class="mb-3">Plan seleccionado: <strong id="selectedPlanName"></strong></h6>
            <h4 class="mb-4">Total: <strong id="selectedPlanPrice"></strong></h4>

            <div class="mb-3">
              <label class="form-label">Número de tarjeta</label>
              <input type="text" class="form-control" placeholder="1234 5678 9012 3456" maxlength="19">
            </div>

            <div class="row">
              <div class="col-6">
                <label class="form-label">Fecha de expiración</label>
                <input type="text" class="form-control" placeholder="MM/AA" maxlength="5">
              </div>
              <div class="col-6">
                <label class="form-label">CVV</label>
                <input type="text" class="form-control" placeholder="123" maxlength="3">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnConfirmPayment">Confirmar Pago</button>
          </div>
        </div>
      </div>
    </div>
  `;

  setupPricingListeners();
}
function setupPricingNavigation() {
  document.getElementById('navDashboard')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'dashboard';
    render();
  });

  document.getElementById('linkPlans')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'pricing';
    render();
  });

  document.getElementById('btnProfile')?.addEventListener('click', () => {
    if (confirm('¿Cerrar sesión?')) {
      handleLogout();
    }
  });
}

// TEAMS PAGE
function renderTeamsPage() {
  // Inicializar equipos si no existen
  if (!loggedInUser.teams) {
    loggedInUser.teams = [];
  }

  app.innerHTML = `
    <div style="display: flex; min-height: 100vh;">
      ${renderSidebar('teams')}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        <!-- Top Bar -->
        <div class="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h2 class="h4 mb-0 fw-bold">Teams</h2>
          <div class="d-flex gap-3 align-items-center">
            <span class="text-muted">${loggedInUser.name}</span>
            <button class="btn btn-sm btn-outline-danger" id="btnLogout">Logout</button>
          </div>
        </div>

        <!-- Teams Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 class="h5 fw-bold mb-1">Gestión de Equipos</h3>
              <p class="text-muted mb-0">Administra tus equipos y miembros</p>
            </div>
            <button class="btn btn-primary" id="btnAddTeam">
              <i class="bi bi-plus-circle me-2"></i>Nuevo Equipo
            </button>
          </div>

          <!-- Teams Grid -->
          <div class="row g-4" id="teamsGrid">
            ${renderTeamsGrid()}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Equipo -->
    <div class="modal fade" id="modalNewTeam" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Equipo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Equipo</label>
              <input type="text" class="form-control" id="inputTeamName" placeholder="Ej: Desarrollo Frontend">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="inputTeamDesc" rows="3" placeholder="Descripción del equipo..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveTeam">Crear Equipo</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Agregar Miembro -->
    <div class="modal fade" id="modalAddMember" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar Miembro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Miembro</label>
              <input type="text" class="form-control" id="inputMemberName" placeholder="Nombre completo">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" id="inputMemberEmail" placeholder="email@ejemplo.com">
            </div>
            <div class="mb-3">
              <label class="form-label">Rol</label>
              <select class="form-select" id="inputMemberRole">
                <option value="member">Miembro</option>
                <option value="leader">Líder</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveMember">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  setupTeamsListeners();
}

function renderTeamsGrid() {
  if (!loggedInUser.teams || loggedInUser.teams.length === 0) {
    return `
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-people" style="font-size: 4rem; color: #dee2e6;"></i>
          <p class="text-muted mt-3">No tienes equipos creados</p>
          <p class="text-muted">Crea tu primer equipo para comenzar</p>
        </div>
      </div>
    `;
  }

  return loggedInUser.teams.map(team => `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <h5 class="card-title mb-0">${team.name}</h5>
            <div class="dropdown">
              <button class="btn btn-sm btn-link text-muted" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" onclick="editTeam('${team.id}')">Editar</a></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="deleteTeam('${team.id}')">Eliminar</a></li>
              </ul>
            </div>
          </div>
          <p class="text-muted small mb-3">${team.description || 'Sin descripción'}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-people-fill text-primary"></i>
              <span class="small">${team.members?.length || 0} miembros</span>
            </div>
            <button class="btn btn-sm btn-outline-primary" onclick="addMemberToTeam('${team.id}')">
              <i class="bi bi-plus"></i> Agregar
            </button>
          </div>
          ${team.members && team.members.length > 0 ? `
            <div class="mt-3">
              <div class="d-flex flex-wrap gap-2">
                ${team.members.slice(0, 3).map(member => `
                  <span class="badge bg-light text-dark">${member.name}</span>
                `).join('')}
                ${team.members.length > 3 ? `<span class="badge bg-secondary">+${team.members.length - 3}</span>` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function setupTeamsListeners() {
  setupPricingNavigation();
  
  document.getElementById('btnLogout')?.addEventListener('click', handleLogout);
  
  document.getElementById('btnAddTeam')?.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('modalNewTeam'));
    modal.show();
  });

  document.getElementById('btnSaveTeam')?.addEventListener('click', () => {
    const name = document.getElementById('inputTeamName').value.trim();
    const description = document.getElementById('inputTeamDesc').value.trim();

    if (!name) {
      alert('Por favor ingresa un nombre para el equipo');
      return;
    }

    const newTeam = {
      id: Date.now().toString(),
      name,
      description,
      members: [],
      createdAt: new Date().toISOString()
    };

    if (!loggedInUser.teams) {
      loggedInUser.teams = [];
    }

    loggedInUser.teams.push(newTeam);
    saveToLocalStorage();

    bootstrap.Modal.getInstance(document.getElementById('modalNewTeam')).hide();
    render();
  });

  // Navegación del sidebar
  document.getElementById('navDashboard')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'dashboard';
    render();
  });

  document.getElementById('navTeams')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'teams';
    render();
  });

  document.getElementById('navCalendar')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'calendar';
    render();
  });

  document.getElementById('navSettings')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'settings';
    render();
  });
}

// Funciones globales para Teams
window.addMemberToTeam = function(teamId) {
  window.currentTeamId = teamId;
  const modal = new bootstrap.Modal(document.getElementById('modalAddMember'));
  modal.show();

  document.getElementById('btnSaveMember').onclick = () => {
    const name = document.getElementById('inputMemberName').value.trim();
    const email = document.getElementById('inputMemberEmail').value.trim();
    const role = document.getElementById('inputMemberRole').value;

    if (!name || !email) {
      alert('Por favor completa todos los campos');
      return;
    }

    const team = loggedInUser.teams.find(t => t.id === teamId);
    if (team) {
      if (!team.members) team.members = [];
      team.members.push({ id: Date.now().toString(), name, email, role });
      saveToLocalStorage();
      bootstrap.Modal.getInstance(document.getElementById('modalAddMember')).hide();
      render();
    }
  };
};

window.deleteTeam = function(teamId) {
  if (confirm('¿Estás seguro de eliminar este equipo?')) {
    loggedInUser.teams = loggedInUser.teams.filter(t => t.id !== teamId);
    saveToLocalStorage();
    render();
  }
};

// CALENDAR PAGE
function renderCalendarPage() {
  // Inicializar eventos si no existen
  if (!loggedInUser.events) {
    loggedInUser.events = [];
  }

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  app.innerHTML = `
    <div style="display: flex; min-height: 100vh;">
      ${renderSidebar('calendar')}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        <!-- Top Bar -->
        <div class="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h2 class="h4 mb-0 fw-bold">Calendar</h2>
          <div class="d-flex gap-3 align-items-center">
            <span class="text-muted">${loggedInUser.name}</span>
            <button class="btn btn-sm btn-outline-danger" id="btnLogout">Logout</button>
          </div>
        </div>

        <!-- Calendar Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <!-- Calendar View -->
            <div class="col-lg-8">
              <div class="card shadow-sm">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">${getMonthName(currentMonth)} ${currentYear}</h5>
                  <button class="btn btn-primary btn-sm" id="btnAddEvent">
                    <i class="bi bi-plus-circle me-1"></i>Nuevo Evento
                  </button>
                </div>
                <div class="card-body">
                  ${renderCalendar(currentMonth, currentYear)}
                </div>
              </div>
            </div>

            <!-- Upcoming Events -->
            <div class="col-lg-4">
              <div class="card shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Próximos Eventos</h5>
                </div>
                <div class="card-body">
                  ${renderUpcomingEvents()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Evento -->
    <div class="modal fade" id="modalNewEvent" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Evento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Título del Evento</label>
              <input type="text" class="form-control" id="inputEventTitle" placeholder="Reunión de equipo">
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha</label>
              <input type="date" class="form-control" id="inputEventDate">
            </div>
            <div class="mb-3">
              <label class="form-label">Hora</label>
              <input type="time" class="form-control" id="inputEventTime">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="inputEventDesc" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Tipo</label>
              <select class="form-select" id="inputEventType">
                <option value="meeting">Reunión</option>
                <option value="deadline">Fecha límite</option>
                <option value="reminder">Recordatorio</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveEvent">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  setupCalendarListeners();
}

function getMonthName(month) {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return months[month];
}

function renderCalendar(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let html = `
    <div class="calendar-grid">
      <div class="row text-center fw-bold mb-2">
        <div class="col">Dom</div>
        <div class="col">Lun</div>
        <div class="col">Mar</div>
        <div class="col">Mié</div>
        <div class="col">Jue</div>
        <div class="col">Vie</div>
        <div class="col">Sáb</div>
      </div>
  `;

  let dayCounter = 1;
  for (let week = 0; week < 6; week++) {
    html += '<div class="row mb-2">';
    for (let day = 0; day < 7; day++) {
      if ((week === 0 && day < firstDay) || dayCounter > daysInMonth) {
        html += '<div class="col p-2"></div>';
      } else {
        const isToday = dayCounter === today && month === currentMonth && year === currentYear;
        const hasEvent = loggedInUser.events?.some(e => {
          const eventDate = new Date(e.date);
          return eventDate.getDate() === dayCounter && 
                 eventDate.getMonth() === month && 
                 eventDate.getFullYear() === year;
        });
        
        html += `
          <div class="col p-2">
            <div class="calendar-day ${isToday ? 'bg-primary text-white' : ''} ${hasEvent ? 'border border-warning' : ''} 
                        rounded p-2 text-center" style="min-height: 50px; cursor: pointer;">
              ${dayCounter}
              ${hasEvent ? '<div class="mt-1"><i class="bi bi-circle-fill text-warning" style="font-size: 6px;"></i></div>' : ''}
            </div>
          </div>
        `;
        dayCounter++;
      }
    }
    html += '</div>';
    if (dayCounter > daysInMonth) break;
  }

  html += '</div>';
  return html;
}

function renderUpcomingEvents() {
  if (!loggedInUser.events || loggedInUser.events.length === 0) {
    return '<p class="text-muted text-center">No hay eventos próximos</p>';
  }

  const now = new Date();
  const upcoming = loggedInUser.events
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  if (upcoming.length === 0) {
    return '<p class="text-muted text-center">No hay eventos próximos</p>';
  }

  return upcoming.map(event => {
    const eventDate = new Date(event.date);
    const typeIcons = {
      meeting: 'bi-camera-video',
      deadline: 'bi-alarm',
      reminder: 'bi-bell',
      other: 'bi-calendar-event'
    };
    
    return `
      <div class="mb-3 pb-3 border-bottom">
        <div class="d-flex align-items-start gap-2">
          <i class="bi ${typeIcons[event.type] || 'bi-calendar-event'} text-primary mt-1"></i>
          <div class="flex-grow-1">
            <h6 class="mb-1">${event.title}</h6>
            <p class="text-muted small mb-1">
              ${eventDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              ${event.time ? `- ${event.time}` : ''}
            </p>
            ${event.description ? `<p class="small text-muted mb-0">${event.description}</p>` : ''}
          </div>
          <button class="btn btn-sm btn-link text-danger" onclick="deleteEvent('${event.id}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function setupCalendarListeners() {
  setupPricingNavigation();
  
  document.getElementById('btnLogout')?.addEventListener('click', handleLogout);
  
  document.getElementById('btnAddEvent')?.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('modalNewEvent'));
    modal.show();
  });

  document.getElementById('btnSaveEvent')?.addEventListener('click', () => {
    const title = document.getElementById('inputEventTitle').value.trim();
    const date = document.getElementById('inputEventDate').value;
    const time = document.getElementById('inputEventTime').value;
    const description = document.getElementById('inputEventDesc').value.trim();
    const type = document.getElementById('inputEventType').value;

    if (!title || !date) {
      alert('Por favor completa el título y la fecha');
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      time,
      description,
      type,
      createdAt: new Date().toISOString()
    };

    if (!loggedInUser.events) {
      loggedInUser.events = [];
    }

    loggedInUser.events.push(newEvent);
    saveToLocalStorage();

    bootstrap.Modal.getInstance(document.getElementById('modalNewEvent')).hide();
    render();
  });

  // Navegación del sidebar
  document.getElementById('navDashboard')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'dashboard';
    render();
  });

  document.getElementById('navTeams')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'teams';
    render();
  });

  document.getElementById('navCalendar')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'calendar';
    render();
  });

  document.getElementById('navSettings')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'settings';
    render();
  });
}

window.deleteEvent = function(eventId) {
  if (confirm('¿Eliminar este evento?')) {
    loggedInUser.events = loggedInUser.events.filter(e => e.id !== eventId);
    saveToLocalStorage();
    render();
  }
};

// SETTINGS PAGE
function renderSettingsPage() {
  app.innerHTML = `
    <div style="display: flex; min-height: 100vh;">
      ${renderSidebar('settings')}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        <!-- Top Bar -->
        <div class="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <h2 class="h4 mb-0 fw-bold">Settings</h2>
          <div class="d-flex gap-3 align-items-center">
            <span class="text-muted">${loggedInUser.name}</span>
            <button class="btn btn-sm btn-outline-danger" id="btnLogout">Logout</button>
          </div>
        </div>

        <!-- Settings Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <!-- Profile Settings -->
            <div class="col-lg-8">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-person-circle me-2"></i>Perfil</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputProfileName" value="${loggedInUser.name}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputProfileEmail" value="${loggedInUser.email}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Empresa</label>
                    <input type="text" class="form-control" id="inputProfileCompany" value="${loggedInUser.company || ''}" placeholder="Nombre de tu empresa">
                  </div>
                  <button class="btn btn-primary" id="btnSaveProfile">
                    <i class="bi bi-check-circle me-2"></i>Guardar Cambios
                  </button>
                </div>
              </div>

              <!-- Password Settings -->
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-shield-lock me-2"></i>Seguridad</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Contraseña Actual</label>
                    <input type="password" class="form-control" id="inputCurrentPassword">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Nueva Contraseña</label>
                    <input type="password" class="form-control" id="inputNewPassword">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Confirmar Nueva Contraseña</label>
                    <input type="password" class="form-control" id="inputConfirmPassword">
                  </div>
                  <button class="btn btn-warning" id="btnChangePassword">
                    <i class="bi bi-key me-2"></i>Cambiar Contraseña
                  </button>
                </div>
              </div>

              <!-- Notifications Settings -->
              <div class="card shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-bell me-2"></i>Notificaciones</h5>
                </div>
                <div class="card-body">
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifEmail" ${loggedInUser.notifications?.email !== false ? 'checked' : ''}>
                    <label class="form-check-label" for="notifEmail">
                      Notificaciones por Email
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifTasks" ${loggedInUser.notifications?.tasks !== false ? 'checked' : ''}>
                    <label class="form-check-label" for="notifTasks">
                      Recordatorios de Tareas
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifEvents" ${loggedInUser.notifications?.events !== false ? 'checked' : ''}>
                    <label class="form-check-label" for="notifEvents">
                      Recordatorios de Eventos
                    </label>
                  </div>
                  <button class="btn btn-primary" id="btnSaveNotifications">
                    <i class="bi bi-check-circle me-2"></i>Guardar Preferencias
                  </button>
                </div>
              </div>
            </div>

            <!-- Account Info -->
            <div class="col-lg-4">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Información de Cuenta</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="text-muted small">Plan Actual</label>
                    <p class="fw-bold mb-0 text-capitalize">${loggedInUser.plan || 'Básico'}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Ciclo de Facturación</label>
                    <p class="fw-bold mb-0 text-capitalize">${loggedInUser.billingCycle === 'annual' ? 'Anual' : 'Mensual'}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Proyectos Activos</label>
                    <p class="fw-bold mb-0">${loggedInUser.projects?.length || 0}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Equipos</label>
                    <p class="fw-bold mb-0">${loggedInUser.teams?.length || 0}</p>
                  </div>
                  <button class="btn btn-outline-primary w-100" id="btnUpgradePlan">
                    <i class="bi bi-arrow-up-circle me-2"></i>Mejorar Plan
                  </button>
                </div>
              </div>

              <!-- Danger Zone -->
              <div class="card shadow-sm border-danger">
                <div class="card-header bg-danger text-white">
                  <h5 class="mb-0">Zona de Peligro</h5>
                </div>
                <div class="card-body">
                  <p class="text-muted small">Eliminar tu cuenta es permanente y no se puede deshacer.</p>
                  <button class="btn btn-danger w-100" id="btnDeleteAccount">
                    <i class="bi bi-trash me-2"></i>Eliminar Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupSettingsListeners();
}

function setupSettingsListeners() {
  setupPricingNavigation();
  
  document.getElementById('btnLogout')?.addEventListener('click', handleLogout);

  // Guardar perfil
  document.getElementById('btnSaveProfile')?.addEventListener('click', () => {
    loggedInUser.name = document.getElementById('inputProfileName').value.trim();
    loggedInUser.email = document.getElementById('inputProfileEmail').value.trim();
    loggedInUser.company = document.getElementById('inputProfileCompany').value.trim();
    
    saveToLocalStorage();
    alert('✅ Perfil actualizado correctamente');
  });

  // Cambiar contraseña
  document.getElementById('btnChangePassword')?.addEventListener('click', () => {
    const current = document.getElementById('inputCurrentPassword').value;
    const newPass = document.getElementById('inputNewPassword').value;
    const confirm = document.getElementById('inputConfirmPassword').value;

    if (!current || !newPass || !confirm) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (current !== loggedInUser.password) {
      alert('❌ Contraseña actual incorrecta');
      return;
    }

    if (newPass !== confirm) {
      alert('❌ Las contraseñas no coinciden');
      return;
    }

    if (newPass.length < 6) {
      alert('❌ La contraseña debe tener al menos 6 caracteres');
      return;
    }

    loggedInUser.password = newPass;
    saveToLocalStorage();
    alert('✅ Contraseña cambiada correctamente');
    
    // Limpiar campos
    document.getElementById('inputCurrentPassword').value = '';
    document.getElementById('inputNewPassword').value = '';
    document.getElementById('inputConfirmPassword').value = '';
  });

  // Guardar notificaciones
  document.getElementById('btnSaveNotifications')?.addEventListener('click', () => {
    if (!loggedInUser.notifications) {
      loggedInUser.notifications = {};
    }

    loggedInUser.notifications.email = document.getElementById('notifEmail').checked;
    loggedInUser.notifications.tasks = document.getElementById('notifTasks').checked;
    loggedInUser.notifications.events = document.getElementById('notifEvents').checked;

    saveToLocalStorage();
    alert('✅ Preferencias de notificaciones guardadas');
  });

  // Mejorar plan
  document.getElementById('btnUpgradePlan')?.addEventListener('click', () => {
    currentPage = 'pricing';
    render();
  });

  // Eliminar cuenta
  document.getElementById('btnDeleteAccount')?.addEventListener('click', () => {
    if (confirm('⚠️ ¿Estás seguro? Esta acción no se puede deshacer.')) {
      if (confirm('¿Realmente deseas eliminar tu cuenta y todos tus datos?')) {
        users = users.filter(u => u.email !== loggedInUser.email);
        handleLogout();
        alert('Tu cuenta ha sido eliminada');
      }
    }
  });

  // Navegación del sidebar
  document.getElementById('navDashboard')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'dashboard';
    render();
  });

  document.getElementById('navTeams')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'teams';
    render();
  });

  document.getElementById('navCalendar')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'calendar';
    render();
  });

  document.getElementById('navSettings')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'settings';
    render();
  });
};
// Setup Pricing Listeners
function setupPricingListeners() {
  const billingToggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');

  let isAnnual = false;

  // Precios mensuales base
  const prices = {
    basic: { monthly: 0, annual: 0 },
    premium: { monthly: 9.99, annual: (9.99 * 12 * 0.85).toFixed(2) }, // 15% descuento
    professional: { monthly: 19.99, annual: (19.99 * 12 * 0.85).toFixed(2) }
  };

  // Actualizar precios en la UI
  function updatePrices() {
    const period = isAnnual ? 'annual' : 'monthly';
    const periodText = isAnnual ? '/ año' : '/ mes';

    document.getElementById('basicPrice').textContent = prices.basic[period];
    document.getElementById('basicPeriod').textContent = prices.basic[period] > 0 ? periodText : '';
    
    document.getElementById('premiumPrice').textContent = prices.premium[period];
    document.getElementById('premiumPeriod').textContent = periodText;
    
    document.getElementById('professionalPrice').textContent = prices.professional[period];
    document.getElementById('professionalPeriod').textContent = periodText;

    // Actualizar estilos del toggle
    if (isAnnual) {
      monthlyLabel.style.color = '#9ca3af';
      annualLabel.style.color = '#000';
    } else {
      monthlyLabel.style.color = '#000';
      annualLabel.style.color = '#9ca3af';
    }
  }

  // Toggle mensual/anual
  billingToggle.addEventListener('change', () => {
    isAnnual = billingToggle.checked;
    updatePrices();
  });

  // Inicializar precios
  updatePrices();

  // Botón Plan Básico
  const btnBasic = document.getElementById('btnBasicPlan');
  if (btnBasic && !btnBasic.disabled) {
    btnBasic.addEventListener('click', () => {
      assignPlan('basico', 'Básico', '$0');
    });
  }

  // Botón Plan Premium
  const btnPremium = document.getElementById('btnPremiumPlan');
  if (btnPremium && !btnPremium.disabled) {
    btnPremium.addEventListener('click', () => {
      const price = isAnnual ? `$${prices.premium.annual} / año` : `$${prices.premium.monthly} / mes`;
      openPaymentModal('premium', 'Premium', price, isAnnual);
    });
  }

  // Botón Plan Professional
  const btnProfessional = document.getElementById('btnProfessionalPlan');
  if (btnProfessional && !btnProfessional.disabled) {
    btnProfessional.addEventListener('click', () => {
      const price = isAnnual ? `$${prices.professional.annual} / año` : `$${prices.professional.monthly} / mes`;
      openPaymentModal('professional', 'Professional', price, isAnnual);
    });
  }
  setupPricingNavigation();
}

// Asignar plan básico
function assignPlan(planId, planName, price) {
  loggedInUser.plan = planId;
  loggedInUser.billingCycle = 'monthly';
  saveToLocalStorage();
  
  showToast(`✅ Plan ${planName} activado correctamente`, 'success');
  
  setTimeout(() => {
    currentPage = 'dashboard';
    render();
  }, 1500);
}

// Abrir modal de pago
let selectedPlanForPayment = null;

function openPaymentModal(planId, planName, price, isAnnual) {
  selectedPlanForPayment = { planId, planName, price, isAnnual };
  
  document.getElementById('selectedPlanName').textContent = planName;
  document.getElementById('selectedPlanPrice').textContent = price;
  
  const modal = new bootstrap.Modal(document.getElementById('paymentModal'));
  modal.show();

  // Configurar botón de confirmar pago
  document.getElementById('btnConfirmPayment').onclick = () => {
    processPayment();
  };
}

// Procesar pago (simulado)
function processPayment() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
  modal.hide();

  // Simular delay de procesamiento
  showToast('⏳ Procesando pago...', 'info');

  setTimeout(() => {
    loggedInUser.plan = selectedPlanForPayment.planId;
    loggedInUser.billingCycle = selectedPlanForPayment.isAnnual ? 'annual' : 'monthly';
    saveToLocalStorage();

    showToast(`✅ ¡Pago exitoso! Plan ${selectedPlanForPayment.planName} activado`, 'success');

    setTimeout(() => {
      currentPage = 'dashboard';
      render();
    }, 2000);
  }, 2000);
}

// Sistema de Toast notifications
function showToast(message, type = 'info') {
  // Crear contenedor de toasts si no existe
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
    document.body.appendChild(toastContainer);
  }

  const colors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#3b82f6',
    warning: '#f59e0b'
  };

  const toast = document.createElement('div');
  toast.style.cssText = `
    background-color: ${colors[type] || colors.info};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease-out;
    min-width: 300px;
  `;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  // Auto-remove después de 3 segundos
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Agregar animaciones al CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Función helper para renderizar sidebar (reutilizable)
function renderSidebar(activePage = 'dashboard') {
  const planName = loggedInUser?.plan === 'premium' ? 'Premium' 
                 : loggedInUser?.plan === 'professional' ? 'Professional' 
                 : 'Básico';

  return `
    <div id="sidebar" class="bg-dark text-white d-flex flex-column" style="width: 280px; min-height: 100vh; transition: all 0.3s;">
      <div class="p-4">
        <h1 class="h3 fw-bold mb-5">ZeroChaos</h1>
        
        <nav class="nav flex-column gap-2">
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded ${activePage === 'dashboard' ? 'active' : ''} hover-link" 
             style="${activePage === 'dashboard' ? 'background-color: rgba(255,255,255,0.1);' : ''}" id="navDashboard">
            <i class="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navProjects">
            <i class="bi bi-folder-fill"></i>
            <span>Projects</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navTeams">
            <i class="bi bi-people-fill"></i>
            <span>Teams</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navCalendar">
            <i class="bi bi-calendar-fill"></i>
            <span>Calendar</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navSettings">
            <i class="bi bi-gear-fill"></i>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div class="mt-auto p-4">
        <div class="bg-secondary rounded p-3">
          <p class="mb-1 small fw-semibold">Plan ${planName}</p>
          <a href="#" class="text-white small text-decoration-none" id="linkPlans">Ver planes →</a>
        </div>
      </div>
    </div>

    <button id="toggleSidebar" class="btn btn-dark position-fixed" 
            style="left: 280px; top: 20px; z-index: 1000; transition: left 0.3s;">
      <i class="bi bi-chevron-left"></i>
    </button>
  `;
}

// Función helper para renderizar top bar
function renderTopBar() {
  return `
    <div class="bg-white border-bottom p-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control border-start-0" placeholder="Search">
            </div>
          </div>
          <div class="col-md-6 text-end">
            <button class="btn btn-light rounded-circle me-2">
              <i class="bi bi-inbox-fill"></i>
            </button>
            <button class="btn btn-light rounded-circle me-2">
              <i class="bi bi-clock-fill"></i>
            </button>
            <button class="btn btn-light rounded-circle" id="btnProfile">
              <i class="bi bi-person-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Project Cards
function renderProjectCards() {
  if (!loggedInUser.projects || loggedInUser.projects.length === 0) {
    return `
      <div class="col-12">
        <div class="alert alert-info">
          No projects yet. Click "New Project" to create one!
        </div>
      </div>
    `;
  }

  return loggedInUser.projects.map(project => {
    const progress = calculateProgress(project.tasks);
    const progressColor = progress > 70 ? 'success' : progress > 30 ? 'primary' : 'warning';
    
    return `
      <div class="col-md-4">
        <div class="card h-100 project-card" data-project-id="${project.id}" style="cursor: pointer;">
          <div class="card-body">
            <h5 class="card-title fw-bold mb-3">${project.name}</h5>
            <div class="progress mb-2" style="height: 8px;">
              <div class="progress-bar bg-${progressColor}" style="width: ${progress}%"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">${project.dueDate || 'No due date'}</small>
              <strong>${progress}%</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Calculate Progress
function calculateProgress(tasks) {
  if (!tasks || tasks.length === 0) return 0;
  const completed = tasks.filter(t => t.completed).length;
  return Math.round((completed / tasks.length) * 100);
}


// Setup Dashboard Listeners
function setupDashboardListeners() {
  // Navegación del sidebar
  document.getElementById('navDashboard')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'dashboard';
    render();
  });

  document.getElementById('linkPlans')?.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 'pricing';
    render();
  });

  // Logout from profile button
  const profileBtn = document.getElementById('btnProfile');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      if (confirm('¿Cerrar sesión?')) {
        handleLogout();
      }
    });
  }

  // Toggle Sidebar
  let sidebarVisible = true;
  const toggleBtn = document.getElementById('toggleSidebar');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      
      if (sidebarVisible) {
        sidebar.style.marginLeft = '-280px';
        toggleBtn.style.left = '0';
        toggleBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';
      } else {
        sidebar.style.marginLeft = '0';
        toggleBtn.style.left = '280px';
        toggleBtn.innerHTML = '<i class="bi bi-chevron-left"></i>';
      }
      sidebarVisible = !sidebarVisible;
    });
  }

  // New Project Button
  const newProjectBtn = document.getElementById('btnNewProject');
  if (newProjectBtn) {
    newProjectBtn.addEventListener('click', () => {
      const modalElement = document.getElementById('newProjectModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    });
  }

  // Create Project
  const createProjectBtn = document.getElementById('btnCreateProject');
  if (createProjectBtn) {
    createProjectBtn.addEventListener('click', () => {
      const name = document.getElementById('newProjectName').value;
      const dueDate = document.getElementById('newProjectDue').value;

      if (!name.trim()) {
        alert('Please enter a project name');
        return;
      }

      // Initialize projects array if doesn't exist
      if (!loggedInUser.projects) {
        loggedInUser.projects = [];
      }

      const newProject = {
        id: Date.now(),
        name: name,
        dueDate: dueDate || 'No due date',
        tasks: [],
        createdAt: new Date().toLocaleDateString('es-ES')
      };

      loggedInUser.projects.push(newProject);
      saveToLocalStorage();

      // Close modal and refresh
      const modalElement = document.getElementById('newProjectModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
      
      document.getElementById('newProjectName').value = '';
      document.getElementById('newProjectDue').value = '';
      
      render();
    });
  }

  // Open Project Details
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      openProjectDetail(projectId);
    });
  });
}

let currentProjectId = null;
function openProjectDetail(projectId) {
  // Botón AI Sort
const aiSortBtn = document.getElementById('btnAISort');
if (aiSortBtn) {
  aiSortBtn.onclick = async () => {
    if (!project.tasks || project.tasks.length === 0) {
      alert('No hay tareas para ordenar');
      return;
    }

    // Mostrar loading
    aiSortBtn.disabled = true;
    aiSortBtn.innerHTML = '⏳ Analizando...';

    try {
      // Analizar con IA
      const sortedTasks = await analyzeTasks([...project.tasks]);
      project.tasks = sortedTasks;
      
      // Guardar y renderizar
      saveToLocalStorage();
      renderTasksList(project.tasks);

      // Restaurar botón
      aiSortBtn.disabled = false;
      aiSortBtn.innerHTML = '🤖 Ordenar con IA';
      
      alert('✅ Tareas ordenadas por dificultad');
    } catch (error) {
      console.error('Error:', error);
      aiSortBtn.disabled = false;
      aiSortBtn.innerHTML = '🤖 Ordenar con IA';
      alert('❌ Error: ' + error.message);
    }
  };
}
  currentProjectId = projectId;
  const project = loggedInUser.projects.find(p => p.id === projectId);
  
  if (!project) {
    console.error('Project not found:', projectId);
    return;
  }

  // Actualizar título del modal
  const titleElement = document.getElementById('projectDetailTitle');
  if (titleElement) {
    titleElement.textContent = project.name;
  }
  
  // Renderizar tareas
  if (!project.tasks) {
    project.tasks = [];
  }
  renderTasksList(project.tasks);

  // Mostrar modal
  const modalElement = document.getElementById('projectDetailModal');
  const modal = new bootstrap.Modal(modalElement);
  modal.show();

  // Add Task Button
  const addTaskBtn = document.getElementById('btnAddTask');
  if (addTaskBtn) {
    addTaskBtn.onclick = () => {
      const taskName = document.getElementById('newTaskName').value;
      
      if (!taskName.trim()) {
        alert('Please enter a task name');
        return;
      }

      project.tasks.push({
        id: Date.now(),
        name: taskName,
        completed: false
      });

      document.getElementById('newTaskName').value = '';
      renderTasksList(project.tasks);
      saveToLocalStorage();
      
      // Actualizar el dashboard en background
      const projectsGrid = document.getElementById('projectsGrid');
      if (projectsGrid) {
        projectsGrid.innerHTML = renderProjectCards();
      }
    };
  }

  // Delete Project Button
  const deleteBtn = document.getElementById('btnDeleteProject');
  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (confirm('Are you sure you want to delete this project?')) {
        loggedInUser.projects = loggedInUser.projects.filter(p => p.id !== projectId);
        saveToLocalStorage();
        
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
        
        render();
      }
    };
  }
}

// Render Tasks List (actualizado con badges de dificultad)
function renderTasksList(tasks) {
  const tasksList = document.getElementById('tasksList');
  
  if (!tasks || tasks.length === 0) {
    tasksList.innerHTML = '<p class="text-muted">No tasks yet. Add your first task!</p>';
    return;
  }

  tasksList.innerHTML = tasks.map(task => `
    <div class="d-flex align-items-center gap-3 mb-3 p-3 border rounded">
      <input type="checkbox" class="form-check-input task-checkbox" 
             data-task-id="${task.id}" ${task.completed ? 'checked' : ''}>
      <span class="${task.completed ? 'text-decoration-line-through text-muted' : ''}" 
            style="flex: 1;">
        ${task.name}
        ${task.difficultyLabel ? `<small class="ms-2">${task.difficultyLabel}</small>` : ''}
      </span>
      <button class="btn btn-sm btn-outline-danger task-delete" data-task-id="${task.id}">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join('');

  // Event listeners (igual que antes)
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const taskId = parseInt(e.target.dataset.taskId);
      const project = loggedInUser.projects.find(p => p.id === currentProjectId);
      const task = project.tasks.find(t => t.id === taskId);
      task.completed = e.target.checked;
      
      renderTasksList(project.tasks);
      saveToLocalStorage();
      
      const projectsGrid = document.getElementById('projectsGrid');
      if (projectsGrid) {
        projectsGrid.innerHTML = renderProjectCards();
        document.querySelectorAll('.project-card').forEach(card => {
          card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            openProjectDetail(projectId);
          });
        });
      }
    });
  });

  document.querySelectorAll('.task-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const taskId = parseInt(e.currentTarget.dataset.taskId);
      const project = loggedInUser.projects.find(p => p.id === currentProjectId);
      project.tasks = project.tasks.filter(t => t.id !== taskId);
      
      renderTasksList(project.tasks);
      saveToLocalStorage();
      
      const projectsGrid = document.getElementById('projectsGrid');
      if (projectsGrid) {
        projectsGrid.innerHTML = renderProjectCards();
        document.querySelectorAll('.project-card').forEach(card => {
          card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            openProjectDetail(projectId);
          });
        });
      }
    });
  });
}

// FUNCIONES DE AUTENTICACIÓN
function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');

  if (!email.trim() || !password) {
    errorDiv.textContent = 'Email y contraseña son requeridos';
    errorDiv.classList.remove('d-none');
    return;
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    errorDiv.textContent = 'Email o contraseña incorrectos';
    errorDiv.classList.remove('d-none');
    return;
  }

  loggedInUser = user;
  saveToLocalStorage();
  currentPage = 'dashboard';
  render();
}

function handleRegister() {

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;
  const errorDiv = document.getElementById('registerError');

  if (!name.trim() || !email.trim() || !password) {
    errorDiv.textContent = 'Todos los campos son obligatorios';
    errorDiv.classList.remove('d-none');
    return;
  }

  if (password !== confirmPassword) {
    errorDiv.textContent = 'Las contraseñas no coinciden';
    errorDiv.classList.remove('d-none');
    return;
  }

  if (password.length < 6) {
    errorDiv.textContent = 'La contraseña debe tener al menos 6 caracteres';
    errorDiv.classList.remove('d-none');
    return;
  }

  if (users.some(u => u.email === email)) {
    errorDiv.textContent = 'El email ya está registrado';
    errorDiv.classList.remove('d-none');
    return;
  }

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    projects: [],
    plan: 'basico',
    billingCycle: 'monthly'
  };

  users.push(newUser);
  saveToLocalStorage();
  currentPage = 'login';
  render();
}

function handleLogout() {
  loggedInUser = null;
  localStorage.removeItem('zerochaos_logged_user');
  currentPage = 'landing';
  render();
}

// SISTEMA DE ALMACENAMIENTO LOCAL
function saveToLocalStorage() {
  localStorage.setItem('zerochaos_users', JSON.stringify(users));
  if (loggedInUser) {
    localStorage.setItem('zerochaos_logged_user', JSON.stringify(loggedInUser));
  }
}

function loadFromLocalStorage() {
  const savedUsers = localStorage.getItem('zerochaos_users');
  const savedLoggedUser = localStorage.getItem('zerochaos_logged_user');
  
  if (savedUsers) {
    users = JSON.parse(savedUsers);
  }
  
  if (savedLoggedUser) {
    loggedInUser = JSON.parse(savedLoggedUser);
    currentPage = 'dashboard';
  }
}

// Cargar datos al inicio (ANTES de render())
loadFromLocalStorage();

// Iniciar la aplicación
render();
