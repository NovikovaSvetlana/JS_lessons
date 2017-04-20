function removeButton() {
    if(this.classList.contains("prev")) {
        this.parentNode.parentNode.removeChild(this.parentNode.parentNode.nextElementSibling);
    }
    this.parentNode.parentNode.removeChild(this.previousElementSibling);
};



window.onload = function() {
   var buttons = document.getElementsByTagName("button");
    for (var i = 0; i <buttons.length; i++) {
        buttons[i].addEventListener("click", removeButton);
    }
}