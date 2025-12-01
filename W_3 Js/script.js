const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function updateEmptyMessage() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

// Add task
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  const text = taskInput.value.trim();
  if (text === "") {
    alert("Task cannot be empty!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
    <div class="task-left">
      <input type="checkbox" class="task-checkbox" />
      <span class="task-text">${text}</span>
    </div>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  updateEmptyMessage();
});

// Handle clicks on the task list (delete + complete)
taskList.addEventListener("click", function (event) {
  const target = event.target;

  // Delete button
  if (target.classList.contains("delete-btn")) {
    const li = target.closest("li.task");
    li.remove();
    updateEmptyMessage();
  }

  // Checkbox toggle complete
  if (target.classList.contains("task-checkbox")) {
    const textSpan = target
      .closest("li.task")
      .querySelector(".task-text");
    textSpan.classList.toggle("completed");
  }

  // Click on text also toggles checkbox
  if (target.classList.contains("task-text")) {
    const li = target.closest("li.task");
    const checkbox = li.querySelector(".task-checkbox");
    checkbox.checked = !checkbox.checked;
    target.classList.toggle("completed");
  }
});

updateEmptyMessage();
