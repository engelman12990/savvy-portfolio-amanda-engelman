import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import nameChecker from './src/Greeter';


// Create a STATE object

var root = document.querySelector('#root');
var State = {
    'Home': {
        'title': 'Welcome to Amanda\'s Savvy Coders Website'
    },
    'Blog': {
        'title': 'Read My Junk'
    },
    'Contact': {
        'title': 'Contact Me'
    },
    'Projects': {
        'title': 'Check My Project'
    }
};


function render(state){
    var links;

    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation>ul>li>a');

    links[0].addEventListener('click', (event) => {
        event.preventDefault();
        
        render(State[event.target.textContent]);
    });

    links[1].addEventListener('click', (event) => {
        event.preventDefault();
        
        render(State[event.target.textContent]);
    });

    links[2].addEventListener('click', (event) => {
        event.preventDefault();
        
        render(State[event.target.textContent]);
    });
    links[3].addEventListener('click', (event) => {
        event.preventDefault();
        
        render(State[event.target.textContent]);
    });
}

render(State.Home);


// nameChecker();

    
