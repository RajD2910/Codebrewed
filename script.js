let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
     searchForm.classList.remove('active');
     cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
     navbar.classList.remove('active');
     cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
gsap.to("header",{
    backgroundColor: "rgb(69, 31, 4)",
    duration:0.7,
    height: "9rem",

    scrollTrigger: {
        trigger:"header",
        scroller: "body",
        start: "top -10%",
        end : "top -11%",
        scrub: .5
    }
})

document.getElementById("profile-btn").addEventListener("click", function() {
  openPopup("login-popup");
});


function openPopup(id) {
      document.getElementById(id).classList.add("active");
    }
    function closePopup(id) {
      document.getElementById(id).classList.remove("active");
    }
    function toggleForm(formId) {
      document.getElementById("login-form").classList.remove("active");
      document.getElementById("register-form").classList.remove("active");
      document.getElementById(formId).classList.add("active");
    }