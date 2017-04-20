function myFun () {
    alert(this.id);
}
function myFun2 () {
    var count = document.getElementById("inp").value.length;
    this.previousElementSibling.innerHTML = count;
}

function myFun3 () {
    var output = this.nextElementSibling;
    output.innerHTML = this.value.length;
}
window.onload = function() {
//    var buttons = document.getElementsByTagName("button");
//    for (var i =0; i <buttons.length; i++) {
//        buttons[i].addEventListener("click", myFun);
//    }
    
//    document.getElementById("mybut").addEventListener("click", myFun2);
    
    document.getElementById("inp").addEventListener("input", myFun3);
    
//    document.getElementById("inp").addEventListener("keydown", myFun3);
//    document.getElementById("inp").addEventListener("keypress", myFun3);
//    document.getElementById("inp").addEventListener("change", myFun3);
    
}