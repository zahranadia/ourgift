
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {

    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

const Tentang = document.getElementById('Tentang');
Tentang.addEventListener('click', function() {
  alert('a flowers shop made by Zavi & Zara');
});
