// Scroll to up button

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const scrollToTopBtnStyle = scrollToTopBtn.style;
let scrollToTopBtnX = 0,
  scrollToTopBtnY = 0;

function scrollToTopBtnTrans() {
  scrollToTopBtnStyle.transform = `translate(${scrollToTopBtnX}rem, ${scrollToTopBtnY}rem)`;
}

// Show button when page is scrolled down
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtnX = -5;
    scrollToTopBtnTrans();
  } else {
    scrollToTopBtnX = 0;
    scrollToTopBtnTrans();
  }
};

// Up when mouse is on button
function btnUp(x) {
  scrollToTopBtnY = -0.2;
  scrollToTopBtnTrans();
}

// Down when mouse isn't on button
function btnDown(x) {
  scrollToTopBtnY = 0;
  scrollToTopBtnTrans();
}

//Nav Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Sign up for a course
const teachers = {
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

//Fix hover style for mobiles

a = document.querySelectorAll('a');

const ua = navigator.userAgent;
if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  a.forEach((i) => i.style.setProperty('--aHoverColor', '#efefef'));
  a.forEach((i) => i.style.setProperty('--aHoverActiveColor', '#e66465'));
  scrollToTopBtnStyle.setProperty('--scrollToTopBtnHoverStyle', 'linear-gradient(135deg, #00cc6d, #00b8cc)');
  scrollToTopBtnStyle.setProperty('--scrollToTopBtnHoverActiveStyle', 'linear-gradient(135deg, #009952, #008a99)');
}
if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  a.forEach((i) => i.style.setProperty('--aHoverColor', '#efefef'));
  a.forEach((i) => i.style.setProperty('--aHoverActiveColor', '#e66465'));
  scrollToTopBtnStyle.setProperty('--scrollToTopBtnHoverStyle', 'linear-gradient(135deg, #00cc6d, #00b8cc)');
  scrollToTopBtnStyle.setProperty('--scrollToTopBtnHoverActiveStyle', 'linear-gradient(135deg, #009952, #008a99)');
} else {
  a.forEach((i) => i.style.setProperty('--aHoverColor', '#e66465'));
  a.forEach((i) => i.style.setProperty('--aHoverActiveColor', '#e66465'));
  scrollToTopBtnStyle.setProperty('--scrollToTopBtnHoverStyle', 'linear-gradient(135deg, #009952, #008a99)');
  scrollToTopBtnStyle.setProperty('--scrollToTopBtnHoverActiveStyle', 'linear-gradient(135deg, #009952, #008a99)');
}
