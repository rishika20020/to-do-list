// Get necessary elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("tasks");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add the task to the list
    taskList.appendChild(taskItem);

    // Clear the input
    taskInput.value = "";
  }
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Add event listener to the input field for "Enter" key press
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
