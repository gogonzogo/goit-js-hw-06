const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// QUERYSELECTOR TO PULL GALLERY FROM HTML
const gallery = document.querySelector('.gallery');

// LOOP THROUGH IMAGES TO CREATE TEMPLATE STRINGS FOR MARKUP
const markup = images.map((image) => 
`<li><img class="image" src=${image.url} alt="${image.alt}" width="100" height="100"></li>`);
console.log(markup);

// INSERTADJACENTHTML MARKUP INSIDE GALLERY LIST
gallery.insertAdjacentHTML("afterbegin", markup);


const image = document.querySelectorAll('.image');
console.log(image)

// GALLERY STYLES

gallery.style.cssText = "padding: 0; border: 2px solid #000000; display: flex; flex-wrap: wrap; max-width: 320px; margin: 0 auto; list-style: none;"
image.style.cssText = "display: block;"


// Write a script to create a gallery of images from an 
// array of data. There is a list, ul.gallery, in HTML.

// Use an array of objects images to create <img> 
// elements nested in <li>. Use template strings and 
// the insertAdjacentHTML() method to create markup.

// All gallery items must be added to DOM in one insert operation.
// Add at least some gallery design with flexboxes or grids
//  using CSS classes.