// import { isMainThread } from "worker_threads";


const testVar = "hi"

/* Enter the code to remove the node element here */
let main=document.querySelector("main#main")
main.remove()
// suerremover()

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
