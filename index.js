const button = document.getElementById('generate');

button.addEventListener('click', (e) => {
    console.log('CLICKED');
    e.preventDefault();
});

var div = document.createElement('div');
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "DIV";

document.getElementById('main').append.child(div);
