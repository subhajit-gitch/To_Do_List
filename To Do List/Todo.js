function addtask() {
    const timeInput = document.getElementById("time-box").value;
    const taskInput = document.getElementById("text-box").value;
    const list = document.getElementById("task");

    if (taskInput && timeInput !== '') {
        let li = document.createElement("li");
        li.textContent = `${timeInput} -->   ${taskInput}`;

        // let editButton = document.createElement("button");   // Edit button
        // editButton.textContent = "Edit";
        // editButton.classList.add("edit-button");
        // editButton.onclick = function () {
        //     editTask(Li);
        // };

        let deleteButton = document.createElement("button");   // Delete button
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            li.remove();
            savedata();
        };

        //li.appendChild(editButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
        savedata();

        document.getElementById("time-box").value = ''; // Clear time input after submit
        document.getElementById("text-box").value = ''; // Clear text input after submit

        li.addEventListener("click", function () {  // Check or uncheck
            this.classList.toggle("checked");
            savedata();
        });
    } else {
        alert("Provide Us Valid Input. EX:- Time and Event!");   // Alert if no task input
    }
}

function savedata() {
    localStorage.setItem("data", task.innerHTML);
}

function displaydata() {
    task.innerHTML = localStorage.getItem("data");
}

displaydata();
