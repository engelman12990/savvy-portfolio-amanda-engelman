import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');


function render(state){
    if(!state.links.includes('Blog')){
        state.posts = [];

        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                state.posts = response.data;
 
                root.innerHTML = `
                ${Navigation(state)}
                ${Header(state.title)}
                ${Content(state.posts)}
                ${Footer(state)}
                `;
            });
    }

    
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state.posts)}
    ${Footer(state)}
    `;
    
    router.updatePageLinks();
}

function navHandler(params){
    var destination = startCase(params.page);

    render(State[destination]); // WE must use BRACKET NOTATION to access something in an Object dynamically.
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));//

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => console.log(response.data));