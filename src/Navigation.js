function linkBuilder(links){
    var i = 0;
    var linksHTML = '';

    while(i < links.length){
        linksHTML += `
     <li>
        <a href='./${links[i]}'>${links[i]}</a>
     </li>
  `;
        i++;
    }
    
    return linksHTML;
}

export default function Navigation(state){
    return `  
    <div id="navigation">
      <ul class="container">
        ${linkBuilder(state.links)}
      </ul>
    </div>
  `;
}