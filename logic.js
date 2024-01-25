const button = document.getElementById("confirm");
const taskInput = document.getElementById("task");
const tasks = document.getElementById("tasks");

button.addEventListener("click", addTask);
taskInput.addEventListener("keypress", addTaskKeyboard)

function addTaskKeyboard(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

function addTask() {
    if (taskInput.value == "") return;

    const newTask = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.style.display = "inline";
    span.appendChild(document.createTextNode(taskInput.value + " "))

    deleteButton.textContent = "X"
    deleteButton.class = "delete-class";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", deleteTask)
    function deleteTask() {
        this.parentElement.remove();
    }

    newTask.appendChild(span);
    newTask.appendChild(deleteButton);
    tasks.appendChild(newTask);

    taskInput.value = ""
};

