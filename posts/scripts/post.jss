const postHTML = document.querySelector('.post');
postHTML.innerHTML = "";

/**
 * 
 * @returns all posts stored in /data/posts.json in json format.
 */
async function loadData() {
  try {
    const response = await fetch("../data/posts.json");
    if (!response.ok) {
      throw new Error(`ERROR ${response.status}`);
    }
    const data = await response.json();
    console.log('JSON DATA: ', data);
    return data;
  } catch (error) {
    console.error('Error loading JSON file: ', error);
  }
}

function renderPostHeading(post) {
  postHTML.innerHTML += `
    <h2 class="post__title">${post.title}</h2>
    <div class="post__date-author">
      <span class="post__date">${post.date} by</span> <span class="post__author">${post.author}</span>
    </div>
  `  
}

function renderPostContent(post) {
  post.content.forEach(element => {
    switch (element.type){
      case "h3":
        postHTML.innerHTML += `
          <h3 class="post__section-heading">${element.text}</h3>
        `;
        break;
      case "p":
        postHTML.innerHTML += `
          <p class="post__paragraph">${element.text}</p>
        `;
        break;
    }
  });
}

loadData().then(data => {
  console.log(data.posts);
  data.posts.forEach(post => {
    renderPostHeading(post);
    renderPostContent(post)
  });
});