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
            const h3Tag = document.createElement("h3")
            const spanTag = document.createElement('span')

            const repoTitle = document.createTextNode(repo.repo)
            const repoDesc = document.createTextNode(repo.description)

            h3Tag.appendChild(repoTitle)
            spanTag.appendChild(repoDesc)

            repoDiv.appendChild(h3Tag)
            repoDiv.appendChild(spanTag)
        })

        console.log('Data returned..', HTTP.response)
    }


})(window)