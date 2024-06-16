// const title = document.querySelector('.header__blog-title');
// function handleClick() {
//   alert('Hello World');
// }
// console.log(title);
// title.addEventListener("click", handleClick);

// const cards = document.querySelectorAll('.card');
// console.log('cards', cards)
// function handleMouseOver() {
//   cards[0].style.borderColor = '#C22033';
// }
// cards[0].addEventListener('mouseover', handleMouseOver);


/**
 * Practice code for the footer top border red
 */
const footer = document.querySelector('.footer'); //selects the footer element
console.log(footer);

//callback function for enabling the red border
function footerBorderRed() {
  if (footer.classList.contains('footer--border-red')) {
    footer.classList.remove('footer--border-red');
  } else {
    footer.classList.add('footer--border-red');
  }
}

//event listener
footer.addEventListener('click', footerBorderRed);

/**
 * Demonstrates event propagation
 */
document.querySelector('.card').addEventListener(
  'click',
  function(e) {
    console.log('CARD');
    console.log(e)
  },
  true //use event capturing
);

document.querySelector('.card__image').addEventListener(
  'click',
  function(e) {
    console.log('CARD IMAGE');
    console.log(e);
  },
  true//use event capturing
);