const parentList = document.querySelector('ul');
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
let taskCompleted = false;
let tasks = [];

let newItem;
const addListItem = ( event) =>{
    event.preventDefault();
    const inputElement = document.querySelector('input');
    const inputValue = inputElement.value;

    if(inputValue !== ""){
    newItem = document.createElement('li');
    newItem.textContent = inputValue;
    parentList.appendChild(newItem);
    inputElement.value = "";
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', ()=>{
        alert('Task Completed!');
        newItem.style.textDecoration = 'line-through';

        const index = tasks.indexOf(newItem.textContent)
        if(index === -1){
            tasks.push(newItem.textContent);
            completeBtn.textContent = "Completed"
            // newItem.remove(completeBtn.button);
        }
  
    });
     //var hoisting = 
     newItem.appendChild(completeBtn);
    }
    else if(inputValue == ""){
        return alert("add a task please");
    }
}

// const div = document.querySelector('div');
// const seeStoredTasks = document.createElement('ul');
// div.appendChild(seeStoredTasks);

// for(i = 0; i < tasks.length; i++){
//     let taskChild = document.createElement('li');
//     taskChild.innerText = tasks[i]
//     seeStoredTasks.appendChild(taskChild);
// }



submitBtn.addEventListener("click", addListItem);

