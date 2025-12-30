(async (window) => {
  'use strict';

  const CACHE_KEY = 'github-repos-cache';
  const CACHE_DURATION = 3600000; // 1 hour in milliseconds

  const fetchRepos = () => {
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();
      HTTP.open('GET', 'https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=thestrugglingblack');
      HTTP.send();

      HTTP.onload = function() {
        if (HTTP.status !== 200) {
          reject('Error occurred to retrieve github data');
          return;
        }
        resolve(JSON.parse(HTTP.responseText));
      };

      HTTP.onerror = () => reject('Network error');
    });
  };

  const getCachedData = () => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    if (now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  };

  const setCachedData = (data) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  };

  try {
    let repos = getCachedData();

    if (!repos) {
      repos = await fetchRepos();
      setCachedData(repos);
      console.log('Data fetched from server');
    } else {
      console.log('Data loaded from cache');
    }

    repos.map(repo => {
      const repoDiv = document.getElementById('github-repos');
      const liTag = document.createElement('li');
      const figureTag = document.createElement('figure');
      const imageTag = document.createElement('img');
      const figCaptionTag = document.createElement('figcaption');
      const divTag = document.createElement('div');
      const h3Tag = document.createElement("h3");
      const spanTag = document.createElement('span');
      const anchorTag = document.createElement('a');

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
    });
  } catch (error) {
    console.error('Error:', error);
  }
})(window);
