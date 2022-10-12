import myName from './myName';
import './style.css';
import Icon from './camping.png';

function component() {
    const element = document.createElement('div');

    element.textContent = myName('Cody');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component())