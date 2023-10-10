// Write your code here!
const elementRemove= document.getElementById('main','#main');
elementRemove.remove();


const newHeader= document.createElement('h1');
newHeader.setAttribute('id','victory');


newHeader.textContent = "Patrick is the champion";
body.append(newHeader);