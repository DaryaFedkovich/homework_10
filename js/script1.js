var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

function Enter(){
    if (event.keyCode === 13) {
        var li = document.createElement("li");
        var inputValue = document.getElementById("inputTask").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Элемент списка не может быть пустым!");
        } else {
            document.getElementById("listTask").appendChild(li);
        }
            document.getElementById("inputTask").value = "";
    }

    var button = document.createElement("BUTTON");
    var text = document.createTextNode("x");
    button.className = "btn";
    button.appendChild(text);
    li.appendChild(button);

    var btn = document.getElementsByClassName("btn");
    for (i = 0; i < btn.length; i++) {
        btn[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}