'use-strict';

import { spacingArgs,  blurArgs, colorArgs } from './data.mjs';

window.onload = () =>{
    initPage();
}

const initPage = () => {
    const header = document.querySelector('h1');
    const controls = document.querySelector('.controls');
    const span = document.createElement('span');

    span.classList.add('h1');
    span.innerText = 'JS';

    header.innerText = 'Manipulate CSS Variables with ';
    header.appendChild(span);

    const spacing = createControl(...spacingArgs);

    const blur = createControl(...blurArgs);

    const color = createControl(...colorArgs);

    controls.append(spacing, blur, color);

    function createControl(name, type, value, min, max, dataSizing){
        const wrapper = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.setAttribute('for', arguments[0].name);
        label.innerText = `${arguments[0].name.toUpperCase()}: `

        const inputAttr = [...arguments];
        inputAttr.forEach(attr =>{
            const key = Object.keys(attr)[0];
            const value = attr[key];
            input.setAttribute(key, value);
        })
        wrapper.append(label, input);
        return wrapper;
    }
}