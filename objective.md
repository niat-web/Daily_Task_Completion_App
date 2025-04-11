# Daily_Task_Completion_App

## Objective
This project is a simple, front-end task management application built with HTML, CSS, and JavaScript. It allows users to add tasks with titles, descriptions, priorities, categories and due dates. Tasks are stored locally in the browser's `localStorage`. The application features dark mode and displays tasks in a to-do list format, with the ability to mark tasks as complete, moving them to a completed task list. Notifications provide user feedback for task creation and completion.

## Output
<iframe src="https://niat-web.github.io/Daily_Task_Completion_App/" height="1000" width="300" title="Daily_Task_Completion_App"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Bootstrap (implied by class names), Font Awesome (implied by icon classes), LocalStorage

## Features to Implement
- Add new tasks with a title, description, priority, category, and due date.
- Display tasks in a list format, visually separated from completed tasks.
- Mark tasks as complete, moving them to a separate "completed tasks" list.

## UI Enhancements
- Implement a dark mode toggle for improved user experience.
- Display notifications for successful task creation and completion.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Create Task Form | A form that allows users to input task details (title, description, priority, category, due date). |
| Display Tasks | Render tasks from local storage to the "task list" section of the UI. |
| Complete Task Functionality | Enable users to mark tasks as complete, moving them to a separate "completed tasks" list and updating local storage. |
| Implement Dark Mode | Add a toggle to switch between light and dark themes. |
| Implement Notifications | Show success and error messages upon task addition and completion. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to dynamically create and modify HTML elements (task cards, lists, notifications) based on user interaction and data stored in JavaScript variables and local storage. |
| Event Listeners | Used to handle form submissions, button clicks (complete task, dark mode toggle), triggering functions to update the UI and local storage. |
| Local Storage | Used to persist tasks and completed tasks, as well as the user's preferred dark mode setting, even after the browser is closed and reopened. |
| Arrays and Objects |  Tasks are stored as objects within arrays (`tasks`, `completedTasks`). Array methods like `push`, `splice`, and `findIndex` are used to manage these arrays. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| LocalStorage | `localStorage.setItem(key, value)` | Used to store data (tasks, completedTasks, dark mode preference) as key-value pairs. The values are stored as strings. |
| LocalStorage | `localStorage.getItem(key)` | Used to retrieve data from local storage based on a given key. Returns null if the key does not exist. |