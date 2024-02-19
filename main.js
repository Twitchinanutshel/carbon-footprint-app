const resultContainer = document.querySelector('.result-container'); //container for spin
const spinBtn = document.getElementById('spin'); //btn for .onclick
const arrow = document.querySelector('.arrow'); // arrow variable used for the animation that makes arrow have a 'hitting' effect on the wheel
const sidebarImage = document.getElementById('sidebar-i')
let x = 3000
let y = 9999
let results = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
let previousDeg = 0




spinBtn.addEventListener('click', function(){
    spinBtn.disabled = true
    let deg = Math.floor(Math.random() * (x - y)) + y;
    let deg_off = (deg % 360) - 21;
    let widx = Math.floor((deg_off / 45));
    widx = (0 <= widx) ? widx : 7;
    resultContainer.style.transform = `rotate(${deg}deg)`;
    console.log(deg)
    console.log(deg_off)
    console.log(widx)
    spinBtn.style.cursor = 'default'
    setTimeout(() => {
        spinBtn.disabled = false
        spinBtn.style.cursor = 'pointer'
    }, 5000)

})



const sidebarBtn = document.querySelector('.sidebar-toggle') // for toggling the sidebar
const sidebar = document.querySelector('.sidebar') // the sidebar



sidebarBtn.addEventListener('click', function(){
    sidebar.classList.toggle('hidden')
    sidebarImage.classList.toggle('sidebarTran')
})

document.addEventListener('click', function(event) {
    // if the click does not contain the sidebar and the click does not contain the sidebar button and the click is not the spin button click, execute code
    // the reason why we dont use .contains(sidebar) or .contains(sidebarBtn) is because .contains checks if the element is also a descendant of the parent tag, so it would return false
    if (!event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle') && event.target !== spinBtn) {
        sidebar.classList.add('hidden');
        sidebarImage.classList.remove('sidebarTran')
    }
});