import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

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
  } else if (currentPage === 'dashboard' && loggedInUser){
    renderDashboard();
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
    <div class="d-flex" style="min-height: 100vh;">
<!-- Sidebar -->
<div id="sidebar" class="bg-dark text-white d-flex flex-column" style="width: 280px; min-height: 100vh; transition: all 0.3s;">
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
  <div class="mt-auto p-4">
    <div class="bg-secondary rounded p-3">
      <p class="mb-1 small fw-semibold">Plan Básico</p>
      <a href="#" class="text-white small text-decoration-none">Ver planes →</a>
    </div>
  </div>
</div>

      <!-- Toggle Sidebar Button -->
      <button id="toggleSidebar" class="btn btn-dark position-fixed" 
              style="left: 280px; top: 20px; z-index: 1000; transition: left 0.3s;">
        <i class="bi bi-chevron-left"></i>
      </button>

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #e2e8f0;">
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
        <div class="container-fluid p-4" id="mainContent">
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
          <div class="row g-3" id="recentProjects">
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
        <!-- Add Task -->
        <div class="mb-4">
          <div class="input-group">
            <input type="text" class="form-control" id="newTaskName" placeholder="Add new task...">
            <button class="btn btn-success" id="btnAddTask">
              <i class="bi bi-plus-lg"></i> Add Task
            </button>
          </div>
        </div>

        <!-- Tasks List -->
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

  // Event Listeners
  setupDashboardListeners();
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
// Setup Dashboard Listeners
function setupDashboardListeners() {
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

  // Logout from profile button
  const profileBtn = document.getElementById('btnProfile');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      if (confirm('¿Cerrar sesión?')) {
        handleLogout();
      }
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

// Render Tasks List
// Render Tasks List
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
            style="flex: 1;">${task.name}</span>
      <button class="btn btn-sm btn-outline-danger task-delete" data-task-id="${task.id}">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join('');

  // Task checkboxes
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const taskId = parseInt(e.target.dataset.taskId);
      const project = loggedInUser.projects.find(p => p.id === currentProjectId);
      const task = project.tasks.find(t => t.id === taskId);
      task.completed = e.target.checked;
      
      renderTasksList(project.tasks);
      saveToLocalStorage();
      
      // Actualizar el progreso en el dashboard sin cerrar modal
      const projectsGrid = document.getElementById('projectsGrid');
      if (projectsGrid) {
        projectsGrid.innerHTML = renderProjectCards();
        // Re-agregar event listeners a las tarjetas
        document.querySelectorAll('.project-card').forEach(card => {
          card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            openProjectDetail(projectId);
          });
        });
      }
    });
  });

  // Delete task buttons
  document.querySelectorAll('.task-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const taskId = parseInt(e.currentTarget.dataset.taskId);
      const project = loggedInUser.projects.find(p => p.id === currentProjectId);
      project.tasks = project.tasks.filter(t => t.id !== taskId);
      
      renderTasksList(project.tasks);
      saveToLocalStorage();
      
      // Actualizar el progreso en el dashboard sin cerrar modal
      const projectsGrid = document.getElementById('projectsGrid');
      if (projectsGrid) {
        projectsGrid.innerHTML = renderProjectCards();
        // Re-agregar event listeners a las tarjetas
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
    projects: []
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