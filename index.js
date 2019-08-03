// no longer has DOM node 'main#main'
document.querySelector('main#main').remove();

// has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "<h1>Leslie is the champion</h1>";
