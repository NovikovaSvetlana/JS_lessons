function showBigImage() {
    var img = this.firstElementChild;
    var collection = document.getElementsByClassName("pic-wrap");
    for (var i = 0; i< collection.length; i++) {
        collection[i].classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("middle-pic").src = img.src;
}

window.onload = function(){
    var collection = document.getElementsByClassName("pic-wrap");
    for (var i = 0; i< collection.length; i++) {
        collection[i].addEventListener("click", showBigImage);
    }
}