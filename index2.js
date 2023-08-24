const parentList = document.querySelector('ul');
const submitBtn = document.getElementById('submit');
const form = document.querySelector('form');
const clearBtn = document.getElementById('clear');
let tasks = [];

const addListItem = (event) => {
    event.preventDefault();
    const inputElement = document.querySelector('input');
    const inputValue = inputElement.value.toUpperCase();

    if (inputValue !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = inputValue;
        parentList.appendChild(newItem);

        const completeBtn = document.createElement('button');
        completeBtn.className = 'completed'
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener('click', () => {
            newItem.style.textDecoration = 'line-through';

            const taskText = newItem.textContent.trim(); // Get the text content of the new item
            const index = tasks.indexOf(taskText);
            if (index === -1) {
                tasks.push(taskText);
                completeBtn.textContent = "Completed";
            }
        });

        newItem.appendChild(completeBtn);
        inputElement.value = "";
}}

// const div = document.querySelector('div');
// const seeStoredTasks = document.createElement('ul');
// div.appendChild(seeStoredTasks);

// for(i = 0; i < tasks.length; i++){
//     let taskChild = document.createElement('li');
//     taskChild.innerText = tasks[i]
//     seeStoredTasks.appendChild(taskChild);
// }


submitBtn.addEventListener("click", addListItem);
