var typed = new Typed(".text", {
    strings: ["Frontend Developer...", "Web Developer...", "Graphic Designer..."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true,
  });

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks)
  {
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents)
  {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzL23k5WjXaJe3Hfe1iOP7jEy_7j-v67i-6deLjosl6zQjfFlJfZ5uthH4pEXrbfm3_/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent Successfully &#10004;'
        setTimeout(function(){
          msg.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.querySelector('.menus');

    function toggleMenuVisibility() {
      if (window.innerWidth < 992) {
        navbarCollapse.style.display = 'none';
      } else {
        navbarCollapse.style.display = 'flex'; // Adjust if you use another display property
      }
    }

    // Initially set menu visibility based on screen size
    toggleMenuVisibility();

    // Listen for window resize events
    window.addEventListener('resize', function() {
      toggleMenuVisibility();
    });

    // Handle the toggler click event to show/hide the menu in mobile view
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
      if (window.innerWidth < 992) {
        if (navbarCollapse.style.display === 'none') {
          navbarCollapse.style.display = 'flex';
        } else {
          navbarCollapse.style.display = 'none';
        }
      }
    });
  });
