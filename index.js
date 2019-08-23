let main = document.getElementById("main")
main.remove()


// 1) has a 'newHeader' variable that points to node 'h1#victory'
//   2) has a 'newHeader' variable that points to node 'h1#victory'
//   3) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"