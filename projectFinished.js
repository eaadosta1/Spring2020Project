// HINT: When you need userinput, use the function called "prompt"

// Example:
//  let answer = prompt("What is your name?");
//  The line above will ask the user "What is your name?" and whatever the user replies, will be saved in the variable "answer".

// The "defaultTaskArr" is the array you will be using to display default tasks. At least five tasks must be entered
const defaultTaskArr = ["Do laundry", "Relax", "Sleep", "Buy Milk", "Go for a walk", "Call mom", "Read a book"];

// The "taskArr" is the array you will be manipulating in this mini-project
let taskArr = ["Do the dishes :/"];

// all buttons that will show up on your todo list
let buttons = [];

/*
  User should be able to:
  1. Add to top of the todo list
  2. Add to the end of the todo list
  3. Remove the first item from todo list
  4. Remove the last item from todo list
  5. Remove all items from todo list
  6. Reverse items from todo list
  7. Set a default todo list
  8. Replace every single task in the list with some other task
  9. If there is a specific task in a list, add another task (fx if there is a task - Make Cookies, add task - Buy milk), if there isn't then add that specific task(Make Cookies)
  10. Remove tasks that are longer than five characters

  Buttons should be represented as objects and have following properties:
  name - must be a string. Default value - My button
  color - must be a string. Options - green, red, blue, orange, purple. Default value - blue
  size - must be a string. Options - small, medium, large. Default value - small
  disabled - must be a boolean. Default value - true
  action - must be a function. Provide either whole function or a name of already defined function
*/

let buttonAddToTop = {
  name: "Add to top",
  color: "purple",
  size: "small",
  disabled: false,
  action: function () {
    const taskDescription = prompt("Please describe the task:");
    taskArr.splice(0,0,taskDescription);
  }
}

buttons.push(buttonAddToTop);

let buttonAddToBottom = {
  name: "Add to bottom",
  color: "green",
  size: "medium",
  disabled: false,
  action: function () {
    const taskDescription = prompt("Please describe the task:");
    taskArr.push(taskDescription);
  }
}

buttons.push(buttonAddToBottom);

let buttonRemoveFirst = {
  name: "Remove first",
  color: "red",
  size: "large",
  disabled: false,
  action: function () {
    taskArr.shift();
  }
}

buttons.push(buttonRemoveFirst);

let buttonRemoveLast = {
  name: "Remove last",
  color: "purple",
  size: "large",
  disabled: false,
  action: function () {
    taskArr.pop();
  }
}

buttons.push(buttonRemoveLast);

let buttonClearList = {
  name: "Clear list",
  color: "red",
  size: "medium",
  disabled: false,
  action: function () {
    taskArr = [];
  }
}

buttons.push(buttonClearList);

let buttonReverseList = {
  name: "Reverse list",
  color: "green",
  size: "large",
  disabled: false,
  action: function () {
    taskArr.reverse();
  }
}

buttons.push(buttonReverseList);

let buttonDefaultList = {
  name: "Set default list",
  color: "blue",
  size: "medium",
  disabled: false,
  action: function () {
    taskArr = defaultTaskArr;
  }
}

buttons.push(buttonDefaultList);

let buttonReplaceAllTasks = {
  name: "Milk mania!",
  color: "green",
  size: "small",
  disabled: false,
  action: function () {
    for (let i = 0; i < taskArr.length; i++ ) {
        taskArr[i] = "Buy milk";
    }
  }
}

buttons.push(buttonReplaceAllTasks);

let buttonReplaceIfTaskExists = {
  name: "Cookies and cream!",
  color: "red",
  size: "small",
  disabled: false,
  action: function () {
    let listHasCookies = false;

    for (let i = 0; i < taskArr.length; i++) {
        if (taskArr[i] == "Buy cookies") {
            listHasCookies = true;
        }
    }

    if (listHasCookies) {
        taskArr.push("Buy cream");
    } else {
        taskArr.push("Buy cookies");
    }
  }
}

buttons.push(buttonReplaceIfTaskExists);

let buttonRemoveLongTasks = {
  name: "Remove long tasks!",
  color: "green",
  size: "large",
  disabled: false,
  action: function () {
    for (let i = taskArr.length - 1; i >= 0; i-- ) {
        if (taskArr[i].length > 5) {
            taskArr.splice(i,1);
        }
    }
  }
}

buttons.push(buttonRemoveLongTasks);

// Finetuning:
// Some values might not be meaningful to add as a task, consider only adding the prompted value to the task array if it is a meaningful one
// Examples:
//      - 'prompt' dialogue boxes that get canceled returns an 'undefined' value
//      - 'prompt' dialogue boxes returns 'null' if you press 'ok' without writing anything in the field
//      - if the prompt only has non-visible characters (spaces, linebreaks and such) that isn't a meaningful task either
//        TIP: the following expression '!(/\S/.test(stringVariableName))' will return 'true' if variable 'stringVariableName' is a string with only whitespace.
