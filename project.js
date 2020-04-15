// HINT: When you need userinput, use the function called "prompt"

// Example:
//  let answer = prompt("What is your name?");
//  The line above will ask the user "What is your name?" and whatever the user replies, will be saved in the variable "answer".

// The "defaultTaskArr" is the array you will be using to display default tasks. At least five tasks must be entered
const defaultTaskArr = [];

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

// Finetuning:
// Some values might not be meaningful to add as a task, consider only adding the prompted value to the task array if it is a meaningful one
// Examples:
//      - 'prompt' dialogue boxes that get canceled returns an 'undefined' value
//      - 'prompt' dialogue boxes returns 'null' if you press 'ok' without writing anything in the field
//      - if the prompt only has non-visible characters (spaces, linebreaks and such) that isn't a meaningful task either
//        TIP: the following expression '!(/\S/.test(stringVariableName))' will return 'true' if variable 'stringVariableName' is a string with only whitespace.

// Adds all buttons from buttons array to yout todolist - has to be last and can't be deleted
addButtonsToTodoList(buttons);
