function showBox() {
    var src = this.firstElementChild.getAttribute("src");
    var fb_img_element = document.getElementById("fb-pic");
    var fb_wrap_element = document.getElementById("fb");
    
    fb_img_element.setAttribute("src", src);
    fb_wrap_element.classList.add("active");
    fb_wrap_element.style.opacity = 1;
}

function closeBox() {
    var fb_img_element = document.getElementById("fb-pic");
    var fb_wrap_element = document.getElementById("fb");
    
    fb_img_element.src = "";
     fb_wrap_element.style.opacity = 0;
    fb_wrap_element.classList.remove("active");
}

window.onload = function() {
    var collection = document.getElementsByClassName("pic");
    for (var i = 0; i < collection.length; i++) {
     collection[i].addEventListener("click", showBox);
    }
    document.getElementById("fb-btn").addEventListener("click", closeBox);
}