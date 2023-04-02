// <li>
//     <figure><img src="http://placehold.it/700x475" alt=""/>
//         <figcaption>
//             <div className="figcaption-details">
//                 <a href="">
//                 <img src="images/icon-plus.png" height="82" width="82" alt=""/>
//                 </a>
//                 <h3>The Flavour Restaurant</h3>
//                 <span>Website Design & Development</span></div>
//         </figcaption>
//     </figure>
// </li>

( async (window) => {
  'use strict';
    const HTTP = new XMLHttpRequest();
    HTTP.open('GET','https://gh-pinned-repos.egoist.dev/?username=thestrugglingblack')
    HTTP.send()

    HTTP.onload = function (){
        if(HTTP.status !== 200){
            console.log('Error occurred to retrieve github data')
        }

        const response = JSON.parse(HTTP.responseText);
        response.map( repo => {
            const repoDiv = document.getElementById('github-repos')

            const liTag = document.createElement('li')
            const figureTag = document.createElement('figure')
            const imageTag = document.createElement('img')
            const figCaptionTag = document.createElement('figcaption')
            const divTag = document.createElement('div')
            const h3Tag = document.createElement("h3")
            const spanTag = document.createElement('span')
            const anchorTag = document.createElement('a')


            imageTag.src = repo.image;
            divTag.className = 'figcaption-details';

            anchorTag.href = repo.link;
            anchorTag.target = '_blank';

            const iconImgTag = document.createElement('img');
            iconImgTag.src = 'images/icon-plus.png';
            iconImgTag.height = '82';
            iconImgTag.width = '82';
            iconImgTag.alt = '';

            anchorTag.appendChild(iconImgTag);
            divTag.appendChild(anchorTag);
            h3Tag.textContent = repo.repo;
            spanTag.textContent = repo.description;
            divTag.appendChild(h3Tag);
            divTag.appendChild(spanTag);

            figCaptionTag.appendChild(divTag);
            figureTag.appendChild(imageTag);
            figureTag.appendChild(figCaptionTag);
            liTag.appendChild(figureTag);
            repoDiv.appendChild(liTag);
        })
        console.log('Data returned..', HTTP.response)
    }
})(window)