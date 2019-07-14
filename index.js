// Select and Remove main element with the class main
document.querySelector('main#main').remove()

// Create a h1 element
const newHeader = document.createElement('h1');

// Add/Change an id to the h1 element
newHeader.id = 'victory'

// Add/Change the h1 innerHTML
newHeader.innerHTML = 'Richard is the champion'