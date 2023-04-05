// import file
const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.navbar')
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btn = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');




// ketika hamburger menu diklik maka tampilkan sidebar menu
hamburger.addEventListener('click', () => {
    navBar.classList.toggle('activeNav')
});

// ketika tombol button diklik jalankan code ini ya
btn.addEventListener('click', () => {
    wrapper.classList.add('pop-up');
});

// ketika tombol icon close nya di klik jalakan code yang ini
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('pop-up');
});

// slide form login
loginLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// slide form login
registerLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});




