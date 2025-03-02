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

function taskAdjustor(btn,task,time,msg){
    assigned--;
    completed++;
    taskAssigned.innerText = `${assigned}`;
    taskCompleted.innerText = `${completed}`;
    console.log(assigned);
    
    msg.style.display = 'block';
    msg.innerText = msg.innerText + ` ` + task.innerText+ ' at ' + time ;
    
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    btn.style.opacity = "0.6";
}


const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');

const task1 = document.getElementById('task-1');
const task2 = document.getElementById('task-2');
const task3 = document.getElementById('task-3');
const task4 = document.getElementById('task-4');
const task5 = document.getElementById('task-5');
const task6 = document.getElementById('task-6');

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const timeString = `${hours}:${minutes}:${seconds}`;

const msg1 = document.getElementById('message1');
const msg2 = document.getElementById('message2');
const msg3 = document.getElementById('message3');
const msg4 = document.getElementById('message4');
const msg5 = document.getElementById('message5');
const msg6 = document.getElementById('message6');

button1.addEventListener('click', () => taskAdjustor(button1, task1, timeString, msg1 ));
button2.addEventListener('click', () => taskAdjustor(button2, task2, timeString, msg2 ));
button3.addEventListener('click', () => taskAdjustor(button3, task3, timeString, msg3 ));
button4.addEventListener('click', () => taskAdjustor(button4, task4, timeString, msg4 ));
button5.addEventListener('click', () => taskAdjustor(button5, task5, timeString, msg5 ));
button6.addEventListener('click', () => taskAdjustor(button6, task6, timeString, msg6 ));

function clear(){
    msg1.style.display = 'none';
    msg2.style.display = 'none';
    msg3.style.display = 'none';
    msg4.style.display = 'none';
    msg5.style.display = 'none';
    msg6.style.display = 'none';
}

const clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click',() => clear());





