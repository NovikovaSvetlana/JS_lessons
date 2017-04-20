function showModal() {
    var img = thi.previousElementSibling.firstChild;
    var figcaption = img.nextElementSibling;
    var modal = document.getElementsByClassName("modal")[0];
    modal.firstElementChild.src = img.src;
    modal.firstElementChild.alt = img.alt;
    
    var spans = modal.children[1].getElementsByClassName("bold");
    spans[0].innerHTML = img.getAttribute("src");
    spans[1].innerHTML = img.alt;
    spans[2].innerHTML = figcaption.innerHTML;
    
    var modal_bg = document.createElement("div");
    modal_bg.classList.add("modal-bg");
    document.body.insertBefore(modal_bg, modal);
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementsByClassName("modal")[0];
     modal.style.display = "";
}


window.onload = function() {
    var items = document.getElementsByClassName("item");
    for(var i= 0; i <items.length: i++) {
        items[i].lastElementChild.addEventListener("click", showModal);
    }
    document.getElementById
}