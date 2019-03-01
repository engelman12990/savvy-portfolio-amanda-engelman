import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';

var State = {
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ] ,
        'title': 'Welcome to my Blog'
    },
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ] ,
        'title': 'Welcome to my Portfolio'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ] ,
        'title': 'Contact Me'
    },
    'Projects': {
        'links': [ 'Home', 'Blog', 'Contact' ] ,
        'title': 'Check out my Projects'
    }
};

var root = document.querySelector('#root');
var render;

function navHandler(event){
    event.preventDefault();

    render(State[event.target.textContent]); // WE must use BRACKET NOTATION to access something in an Object dynamically.
}


// This grabs our state and passes into to render each page
render = function Render(state){
    var links;
    var i = 0;

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state.title)}
        ${Content(state)}
        ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');

    // Run a while loop for as long as the LENGTH of links is.
    while(i < links.length){
        // Change the index
        links[i].addEventListener('click', navHandler);

        i++;
    }
};

render(State.Home);