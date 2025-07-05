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