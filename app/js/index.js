function showFileMenu(){
    var x = document.getElementById("menuFiles");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        console.log("ura")
    } else {
        x.className = x.className.replace(" w3-show", "");
        console.log("damn")
    }
}