var removeMain = document.getElementById('main');
removeMain.remove();


var newHeader = document.createElement('h1')
newHeader.id = "victory"
var champion = document.createTextNode(`YOUR-NAME is the champion`)
newHeader.appendChild(champion)
document.body.appendChild(newHeader)
