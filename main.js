const resultContainer = document.querySelector('.result-container'); //container for spin
const spinBtn = document.getElementById('spin'); //btn for .onclick
let number = Math.ceil(Math.random() * 5000); //number variable for random spin speed
const arrow = document.querySelector('.arrow'); // arrow variable used for the animation that makes arrow have a 'hitting' effect on the wheel


spinBtn.onclick = function() {
    resultContainer.style.transform = 'rotate(' + number + 'deg)';
    number += Math.ceil(Math.random() * 5000);
};


const sidebarBtn = document.querySelector('.sidebar-toggle') // for toggling the sidebar
const sidebar = document.querySelector('.sidebar') // the sidebar

sidebarBtn.addEventListener('click', function(){
    sidebar.classList.toggle('hidden')
})