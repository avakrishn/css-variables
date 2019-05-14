'use-strict';

import { spacingArgs,  blurArgs, colorArgs } from './data.mjs';

window.onload = () =>{
    initApp();
}

const initApp = () => {
    const header = document.querySelector('h1');
    const controls = document.querySelector('.controls');
    const span = document.createElement('span');

    span.classList.add('hl');
    span.innerText = 'JS';

    header.innerText = 'Manipulate CSS Variables with ';
    header.appendChild(span);

    const spacing = createControl(...spacingArgs);
 
    const blur = createControl(...blurArgs);

    const color = createControl(...colorArgs);

    controls.append(spacing, blur, color);

    const inputs = document.querySelectorAll('.controls input');

    inputs.forEach(input => {
        input.addEventListener('change', handleUpdate);
    });

    inputs.forEach(input => {
        input.addEventListener('mousemove', handleUpdate);
    });

    function handleUpdate(){
        // this.dataset is an object that contains all the data attributes from that specific element eg. sizing
        const suffix = this.dataset.sizing || '';

        //documentElement references the root node of our document, thereby updating CSS variables
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        const controlValue = this.nextSibling;
        controlValue.innerText = `${this.value + suffix}`;
    }

    function createControl(name, type, value, min, max, dataSizing){
        const wrapper = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const controlValue = document.createElement('div');
        const suffix = (arguments[5]) ? arguments[5]['data-sizing'] : '';

        label.setAttribute('for', arguments[0].name);
        label.innerText = `${arguments[0].name.toUpperCase()}: `

        const inputAttr = [...arguments];
        inputAttr.forEach(attr =>{
            const key = Object.keys(attr)[0];
            const value = attr[key];
            input.setAttribute(key, value);
        });

        controlValue.classList.add('controlValue');
        controlValue.innerText = `${arguments[2].value}${suffix}`;

        wrapper.append(label, input, controlValue);
        return wrapper;
    }
}