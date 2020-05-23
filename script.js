var butt = document.getElementById("butt");
var inp = document.getElementById("user_input");
var ul = document.querySelector("ul");
butt.addEventListener("click", function () {
    if (inp.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inp.value));
        ul.appendChild(li);
        inp.value = "";
    }

})
inp.addEventListener("keypress", function () {
//    console.log(event.which);
    if (inp.value.length > 0 && event.keyCode===13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inp.value));
        ul.appendChild(li);
        inp.value = "";
    }

})