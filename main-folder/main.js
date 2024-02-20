const arrow = document.querySelector('.arrow'); // arrow variable used for the animation that makes arrow have a 'hitting' effect on the wheel
const sidebarImage = document.getElementById('sidebar-i')
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

let theWheel = new Winwheel({
    'numSegments' : 4,
    'segments'    :
    [
        {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
        {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
        {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
        {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
    ]
});