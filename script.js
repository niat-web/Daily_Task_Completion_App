/* script.js */

 // DOM Elements
 const taskForm = document.getElementById('taskForm');
 const taskList = document.getElementById('taskList');
 const completedTaskList = document.getElementById('completedTaskList');
 const tasksCompletedCount = document.getElementById('tasksCompletedCount');
 const darkModeToggle = document.getElementById('darkModeToggle');
 const notification = document.getElementById('notification');

 // Variables
 let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
 let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

 // Initialize
 updateTasksCompletedCount();
 renderTasks();
 renderCompletedTasks();
 setDarkMode(isDarkMode);

 // Functions

 // Function to set dark mode
 function setDarkMode(enabled) {
  if (enabled) {
  document.body.classList.add('dark-mode');
  } else {
  document.body.classList.remove('dark-mode');
  }
  localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
  isDarkMode = enabled;
 }

 // Function to show notification
 function showNotification(message, type = 'success') {
  notification.textContent = message;
  notification.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
  notification.style.display = 'block';

  setTimeout(() => {
  notification.style.display = 'none';
  }, 3000); // Hide after 3 seconds
 }

 // Function to create a task element
 function createTaskElement(task) {
  const col = document.createElement('div');
  col.classList.add('col-md-4');

  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');

  const taskTitle = document.createElement('h5');
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement('p');
  taskDescription.textContent = task.description;

  const taskPriority = document.createElement('p');
  taskPriority.classList.add('priority', task.priority);
  taskPriority.textContent = `Priority: ${task.priority}`;

  const taskDueDate = document.createElement('p');
  taskDueDate.textContent = `Due Date: ${task.dueDate || 'Not specified'}`; // Handling potentially undefined dueDate

  const completeButton = document.createElement('button');
  completeButton.classList.add('btn', 'btn-success', 'btn-sm');
  completeButton.innerHTML = '<i class="fas fa-check"></i> Complete';
  completeButton.addEventListener('click', () => completeTask(task.id));

  taskCard.appendChild(taskTitle);
  taskCard.appendChild(taskDescription);
  taskCard.appendChild(taskPriority);
  taskCard.appendChild(taskDueDate);
  taskCard.appendChild(completeButton);
  col.appendChild(taskCard);

  return col;
 }

 // Function to render tasks
 function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
  const taskElement = createTaskElement(task);
  taskList.appendChild(taskElement);
  });
 }

 // Function to complete a task
 function completeTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex > -1) {
  const completedTask = tasks.splice(taskIndex, 1)[0];
  completedTasks.push(completedTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));

  renderTasks();
  renderCompletedTasks();
  updateTasksCompletedCount();
  showNotification('Task completed successfully!', 'success');
  }
 }

 // Function to render completed tasks
 function renderCompletedTasks() {
  completedTaskList.innerHTML = '';
  completedTasks.forEach(task => {
  const taskElement = document.createElement('p');
  taskElement.textContent = task.title;
  completedTaskList.appendChild(taskElement);
  });
 }

 // Function to update the tasks completed count
 function updateTasksCompletedCount() {
  tasksCompletedCount.textContent = completedTasks.length;
 }

 // Event Listeners

 // Dark Mode Toggle
 darkModeToggle.addEventListener('click', () => {
  setDarkMode(!isDarkMode);
 });

 // Task Form Submission
 taskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const priority = document.getElementById('taskPriority').value;
  const category = document.getElementById('taskCategory').value;
  const dueDate = document.getElementById('taskDueDate').value;

  if (!title) {
  document.getElementById('taskTitle').classList.add('is-invalid');
  return;
  } else {
  document.getElementById('taskTitle').classList.remove('is-invalid');
  }

  const newTask = {
  id: Date.now(), // Generate a unique ID
  title: title,
  description: description,
  priority: priority,
  category: category,
  dueDate: dueDate
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTasks();
  showNotification('Task added successfully!', 'success');

  //Clear form fields
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskPriority').value = 'low';
  document.getElementById('taskCategory').value = 'work';
  document.getElementById('taskDueDate').value = '';
 });