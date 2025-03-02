function updateDateTime(){
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');

    const newDate = new Date();
    const day = newDate.toLocaleDateString("en-US", { weekday: "long" });
    const dateFormat = newDate.toLocaleDateString("en-US", {
        month: "long", 
        day: "2-digit",
        year: "numeric"
    });

    dayElement.textContent = day;
    dateElement.textContent = dateFormat;
}

updateDateTime();

let taskAssigned = document.getElementById('task-Assigned');
let taskCompleted = document.getElementById('task-completed');

let assigned = parseInt(taskAssigned.innerText);
let completed = parseInt(taskCompleted.innerText);

function taskAdjustor(){
    assigned--;
    completed++;
    taskAssigned.innerText = `${assigned}`;
    taskCompleted.innerText = `${completed}`;

}

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let button5 = document.getElementById('btn5');
let button6 = document.getElementById('btn6');

let task1 = document.getElementById('task-1');
let task2 = document.getElementById('task-2');
let task3 = document.getElementById('task-3');
let task4 = document.getElementById('task-4');
let task5 = document.getElementById('task-5');
let task6 = document.getElementById('task-6');
