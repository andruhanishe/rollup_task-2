'use strict';

// import './index.css'
// import JS_IMAGE from './assets/JS.png'

const h1 = document.createElement('h1');
h1.classList.add('header');
h1.textContent = 'I love JavaScript';

const JSimage = document.createElement('img');
JSimage.classList.add('js-image');
JSimage.src = JS_IMAGE;

document.body.append(h1, JSimage);
