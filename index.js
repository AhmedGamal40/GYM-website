const burger = document.querySelector('.burger')
const navbarItems = document.querySelector('.navbar')
const nav = document.querySelector('.items')

burger.addEventListener('click' , ()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})


// scrool top
let ptnScroll = document.getElementById('scroll');

window.onscroll = function () {
  // Check if scrolled past threshold
  if (window.scrollY >= 600) {
    ptnScroll.style.display = "block";; // Use classList for better performance
  } else {
    ptnScroll.style.display = "none";
  }
};

ptnScroll.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default click behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Use scrollTo with smooth behavior for animation
  });
});
