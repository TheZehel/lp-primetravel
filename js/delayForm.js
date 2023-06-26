let timeToWait = 2000;
let button = document.getElementById('submitbtnt');

button.onclick = function(e) {
    setTimeout(() => {
        e.preventDefault();
    }, timeToWait);
}