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
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Only lowercase letters allowed';
  }
});

const formData = {
  inputName: null,
  inputEmail: null,
  inputMessage: null,
};

// This function needs second parameter to be one of the following :
// 'n' for name 'e' for email 'm' for message
function populateFormData(value, itemName) {
  if (itemName === 'n') {
    formData.inputName = value;
  } else if (itemName === 'e') {
    formData.inputEmail = value;
  } else if (itemName === 'm') {
    formData.inputMessage = value;
  } else {
    throw new Error('Invalid attribute name for given value');
  }
}

names.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'n');
});
email.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'e');
});
message.addEventListener('change', (event) => {
  populateFormData(event.target.value, 'm');
});

function retreiveAndPreSet() {
  const receivedObject = localStorage.getItem('contactFormData');
  const parsedObject = JSON.parse(receivedObject);
  names.value = parsedObject.inputName;
  email.value = parsedObject.inputEmail;
  message.value = parsedObject.inputMessage;
}

// Checks in formData exist on the local storage
// If not, formData is added to the local storage

function storeFormData() {
  const formDataToString = JSON.stringify(formData);

  if (localStorage.getItem('contactFormData') !== formDataToString) {
    localStorage.setItem('contactFormData', formDataToString);
  }
}

// Function to check if email input is lowercase
// Alert if email input needs to be changed
cForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    submitBtn.parentNode.insertBefore(alertMsg, submitBtn);
    alertMsg.classList.add('active');
    email.style.borderColor = '#aa161d';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '2px';
    e.preventDefault();
  } else {
    alertMsg.classList.remove('active');
    storeFormData();
  }
});

retreiveAndPreSet();