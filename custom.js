function getText(divId, filePath) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            document.getElementById(divId).innerText = req.responseText;
        }
    }
    req.open("GET", filePath, true);
    req.send(null);
}