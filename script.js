const createNewTaskElement = function( taskDescription ) {
    const element = document.createElement("div");
    element.setAttribute("class", "todoTask");
    element.textContent = taskDescription;
    return element;
}

const removeAllChildrenFromTaskPanel = function( taskPanel ) {
    while( taskPanel.children().length > 0 ) {
        taskPanel.children()[0].remove();
    }
}

const addAllTasks = function( tasks, taskPanel ) {
    for (let i = 0; i < tasks.length; i++) {
        let taskElement = createNewTaskElement(tasks[i]);
        taskElement.innerText = "#" + (i+1) + "   " + taskElement.innerText;
        taskPanel.append(taskElement);
    }
}

const updateTasks = function() {
    const taskPanel = $("#todoTaskPanel");
    removeAllChildrenFromTaskPanel(taskPanel);
    addAllTasks(taskArr, taskPanel);
}

const runFunctionAndUpdateTasks = function ( inputFunction ) {
    return () => {
        inputFunction();
        updateTasks();
    }
}

const addButtonsToTodoList = function ( buttons ) {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const buttonElement = $("<button>");

    buttonElement.html(button.name || "My button");

    buttonElement.addClass(button.size || "small");
    buttonElement.addClass(button.color || "blue");

    if (button.action) {
      buttonElement.click(runFunctionAndUpdateTasks(button.action));
    }

    if (button.disabled || button.disabled === undefined) {
      buttonElement.attr("disabled", "disabled");
    }

    $("#customToDoButtons").append(buttonElement);
  }
}

$("document").ready(function() {
    updateTasks();
    addButtonsToTodoList(buttons);
    $("#randomTask").click(runFunctionAndUpdateTasks(addRandomTask));
});

const randomTasks = ["Do laundry", "Relax", "Sleep", "Buy Milk", "Go for a walk", "Call mom", "Read a book", "Empty dryer", "Go to bed early", "Nap", "Practice coding", "Pick up mail", "Practice violin", "Practice harmonica", "Go for a jog", "Prepare food for tomorrow"];
let addRandomTask = function () {
    const randomIndex = Math.floor(Math.random()*randomTasks.length);
    taskArr.push(randomTasks[randomIndex]);
}
