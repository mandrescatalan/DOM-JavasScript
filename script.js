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
    const input = document.querySelector("[data-from-input]")
    console.log(input.value);
}

btn.addEventListener("click",createTask);