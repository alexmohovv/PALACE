function showFolders() {
    var x = document.getElementById("folders");
    if (x.className.indexOf("w3-show") == -1)
        x.className += " w3-show";
    else
        x.className = x.className.replace(" w3-show", "");
    }

function showFiles() {
    var x = document.getElementById("files");
    if (x.className.indexOf("w3-show") == -1)
        x.className += " w3-show";
    else
        x.className = x.className.replace(" w3-show", "");
    }