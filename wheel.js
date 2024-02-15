const resultContainer = document.querySelector('.result-container');
const btn = document.getElementById('spin');
var number = Math.ceil(Math.random() * 5000);

btn.onclick = function() {
    resultContainer.style.transform = 'rotate(' + number + 'deg)';
    number += Math.ceil(Math.random() * 5000)
}