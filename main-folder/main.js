const spinBtn = document.getElementById('spinBtn')
const resetBtn = document.getElementById('resetBtn')
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


let segments = [
    { fillStyle: '#c3ff92', text: 'Segment 1' },
    { fillStyle: '#98deab', text: 'Segment 2' },
    { fillStyle: '#36c06b', text: 'Segment 3' },
    { fillStyle: '#68c362', text: 'Segment 4' },
    { fillStyle: '#c3ff92', text: 'Segment 1' },
    { fillStyle: '#98deab', text: 'Segment 2' },
    { fillStyle: '#36c06b', text: 'Segment 3' },
    { fillStyle: '#68c362', text: 'Segment 4' }
];

let theWheel = new Winwheel({
    'numSegments' : 8,
    'pointerAngle': 90, 
    'segments'    : segments,
    'outerRadius' : 245,
    'animation' :                   
        {
            'type'     : 'spinToStop',  
            'duration' : 5,             
            'spins'    : 8,
            'callbackFinished' : winAnimation,
        }
    
});

function winAnimation()
{
    let winningSegmentNumber = theWheel.getIndicatedSegmentNumber();
    theWheel.segments[winningSegmentNumber].fillStyle = 'yellow';
    theWheel.draw();
}



function spinWheel(){
    theWheel.startAnimation();
    spinBtn.disabled = true;
    spinBtn.style.cursor = 'default';
    
}

function resetWheel(){
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    for (let i = 1; i <= theWheel.numSegments; i++) {
        theWheel.segments[i].fillStyle = segments[i - 1].fillStyle;
    }
    checkIfClicked = true;
    spinBtn.disabled = false;
    spinBtn.style.cursor = 'pointer';
    theWheel.draw();

};



