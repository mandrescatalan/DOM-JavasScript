
//Btn check
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

// Immediately invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    const elemento = event.target.nextSibling;
    elemento.classList.toggle('line');
};

export default checkComplete;