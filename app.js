// Scroll to up button

const buttonStyle = document.getElementById('scrollToTopBtn').style;
let buttonX = 0,
  buttonY = 0;

function buttonTrans() {
  buttonStyle.transform = `translate(${buttonX}rem, ${buttonY}rem)`;
}

// Show button when page is scrolled down

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    buttonX = -5;
    buttonTrans();
  } else {
    buttonX = 0;
    buttonTrans();
  }
};

// Up when mouse is on button

function btnUp(x) {
  buttonY = -0.2;
  buttonTrans();
}

// Down when mouse isn't on button

function btnDown(x) {
  buttonY = 0;
  buttonTrans();
}

//Nav Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Sign up for a course

var teachers = {
  backendovSignUp: 'web-dev',
  kovalevaSignUp: 'python',
  stepanovSignUp: 'java',
  semenovSignUp: 'data-science',
  morozovaSignUp: 'ai',
  romanovSignUp: 'mobile-dev',
};

for (teacher in teachers) {
  const SignUp = document.getElementById(teacher);
  const Form = document.getElementById(teachers[teacher]);
  SignUp.addEventListener('click', () => {
    Form.setAttribute('selected', '1');
    feedback.scrollIntoView();
  });
}
