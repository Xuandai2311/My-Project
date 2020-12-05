


// scroll header
window.addEventListener("scroll", function() {
  var header = document.querySelector('header .row');
  header.classList.toggle('sticky', window.scrollY > 0);
})

// back top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

  if (window.pageYOffset > 1000) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});



