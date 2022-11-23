import myName from './myName';
import './style.css';
import Icon from './camping.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.textContent = myName('Cody');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component())