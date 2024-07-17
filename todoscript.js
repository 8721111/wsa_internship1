document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskbutton = document.getElementById("add-task-button");
    // selecting the element
    // eventlistener to add an element
    // function to add that element

    addTaskbutton.addEventListener("click", function() {
        let taskText=taskInput.Value.trim();
        if(taskText=> ""){
             addTask(taskText);
            taskInput.value="";
        }
    })
    function addTask(taskText){
            
    }
});
