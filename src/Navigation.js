import { lowerCase } from 'lodash';

function buildLinks(linkArr){
    var linkList = linkArr.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `<li>
        <a data-navigo href="./${destination}">
          ${link}
        </a>
      </li>
      `;
    }).join(' ');
  
    console.log(linkList);

    return linkList;
}

export default function Navigation(state){
    return `<div id="navigation">
      <ul class="container">
        ${buildLinks(state.links)}
      </ul>
    </div>`;
}
