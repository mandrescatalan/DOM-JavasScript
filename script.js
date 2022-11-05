const btn = document.querySelector("[data-form-btn]");

//VERSION 01
// btn.addEventListener("click",function (evento){
//     evento.preventDefault();
//     const input = document.querySelector("[data-from-input]")
//     console.log(input.value);
// })
//-----------------------------------------------
//VERSION 02
//Arrow function o funciones de flechas o anonimas
// btn.addEventListener("click",(evento)=>{
//     evento.preventDefault();
//     const input = document.querySelector("[data-from-input]")
//     console.log(input.value);
// })
//---------------------------------------------
//VERSION 03
//Funcion anonimas
const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-from-input]");
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`

    task.innerHTML = content;
    list.appendChild(task);
}

btn.addEventListener("click",createTask);