//Problem: user interaction doesn't provide desired results
//Solution: Add interactivity so user can manage daily task.

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompletedTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");


//Add a new task
var addTask = function() {
  console.log("Add task...")
  //create a task item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
}

//Edit and existing Task
var editTask = function () {
  console.log("edit task...")
  //When the Edit button is pressed
  //if the class of the parent is .editMode
    //switch from .editMode
    //label text become the input's value
  //else
    //switch to .editMode
    //input value becomes the label's text

    //Toggle .editMode on the parent
}

//Delete a task
var deleteTask = function () {
console.log("Delete task...")
}
  //when the delete button is pressed
    //remove the parent list item from the ul


//Mark a task as completed-tasks
var taskCompleted = function () {
  console.log("completed task...")
  //when the checkbox is checked
    //append the list item to the #completed-tasks
}

//Mark a task as incomplete-tasks
var taskIncomplete = function () {
  console.log("incomplete task...")
  //when the checkbox is unchecked
    //append the list item to the #incompleted-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("binding event firing");
  //select it's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to chceckbox
    checkBox.onchange = checkBoxEventHandler;
}

//set the click handler to the addTask function
addButton.onclick = addTask;



//cycle over incompleteTaskHolder ul list items
for (var i = 0; i < incompletedTasksHolder.children.length; i ++) {
  //bind events to list items children (taskCompleted)
  bindTaskEvents(incompletedTasksHolder.children[1]), taskCompleted;
}



//cycle over completeTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i ++) {
  //bind events to list items children (taskCompleted)
  bindTaskEvents(completedTasksHolder.children[1]), taskIncomplete;
}

      //bind events to list items children (taskIncompleted
