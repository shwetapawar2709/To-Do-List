
dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
]);


function addTask() {
  var inputTask = document.getElementById("taskText").value;
  if (inputTask.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.className = "task";
    newTask.innerHTML = "<p>" + inputTask + "</p>";

    document.getElementById("to-do").appendChild(newTask);
    document.getElementById("taskText").value = "";
  }
}


document.getElementById("add").addEventListener("click", addTask);


document.getElementById("taskText").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});


document.getElementById("trash").addEventListener('click', function(event) {
  if (event.target.tagName === 'P') {
    var task = event.target.parentNode;
    task.parentNode.removeChild(task);
  }
});


function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
}


document.querySelector(".delete-button").addEventListener("click", emptyTrash);
