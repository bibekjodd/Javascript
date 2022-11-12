const childDiv = document.getElementById('childDiv');
const parentDiv = document.getElementById('parentDiv');

parentDiv.addEventListener('click', () => {
    alert("Parent Div Event Called");
}, true)  // true=> parenet event will come first default=> false

childDiv.addEventListener('click', () => {
    alert("Child Div Event Called");
    // event.stopPropagation();  // if child is called first event.stopPropagation() stops the parent event 
})