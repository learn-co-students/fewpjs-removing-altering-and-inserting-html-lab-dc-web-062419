import { isMainThread } from "worker_threads";

// Write your code her

// document.querySelector('main#main').remove();
// document.querySelector("main#main").remove();

// const newHeader = document.createElement("h1");
// newHeader.innerHTML = `${your-name} is the champion`;
// newHeader.id = "victory";
// newHeader.className = "victory";

const testVar = "hi"

/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
