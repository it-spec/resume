var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
    sidemenu.style.boxShadow = "-0.01em 0em 5em black";
}

function closemenu(){
    sidemenu.style.right = "-50%";
    sidemenu.style.boxShadow = "none";
}
