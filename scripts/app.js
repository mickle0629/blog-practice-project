/**
 * Script that dynamically loads posts stored below.
 */

const post1 = {
  title: "Post Title 1",
  date: "June 13th, 2024",
  brief: "This is a brief excerpt of post 1", 
}

const post2 = {
  title: "Post Title 2",
  date: "June 25th, 2024",
  brief: "This is a brief excerpt of post 2", 
}

const post3 = {
  title: "Post Title 3",
  date: "July 11th, 2024",
  brief: "This is a brief excerpt of post 3", 
}

const post4 = {
  title: "Post Title 4",
  date: "June 21st, 2024",
  brief: "This is a brief excerpt of post 4", 
}

const allPosts = [post1, post2, post3, post4]

/**
 * @description Adds a card to the cards section
 * @param {*} post The post to be added
 */
function addNewPostToDom(post) {
  const cardsSection = document.querySelector('.blog-cards');
  // console.log(cardsSection);

  //creating a new card to insert
  const newCardHtml = `
    <div class="card">
      <h2 class="card__title">${post.title}</h2>
      <h3 class="card__date">${post.date}</h3>
      <p class="card__description">${post.brief}</p>
    </div>
  `
  cardsSection.innerHTML += newCardHtml;
}

allPosts.forEach(addNewPostToDom);

