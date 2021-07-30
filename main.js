const mobileMenu = document.querySelector('.menu-bar');

function closeMenu() {
  mobileMenu.style.left = '-110%';
}

document.querySelector('.hamburger').addEventListener('click', closeMenu);

function OpenMenu() {
  mobileMenu.style.left = '0';
}

document.querySelector('.hambuger').addEventListener('click', OpenMenu);

document.querySelectorAll('.mobile-list').forEach((list) => {
  list.addEventListener('click', () => {
    mobileMenu.style.left = '-110%';
  });
});

/* Form Validation */
const form = document.querySelector('.form');
const names = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !=== email.value) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Only lowercase letters allowed';
  }
});
