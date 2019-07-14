document.querySelector("main").remove()

let newHeader = document.createElement('h1');
let newHeaderWithAttribute = newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'Kevin is the champion'