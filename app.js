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

// Nav Toggle

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

// Fix hover style for mobiles

function HoverActive(element, StyleVar, Hstyle, HAstyle) {
  const ua = navigator.userAgent;
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) ||
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
  ) {
    element.setProperty('--' + StyleVar + 'HoverStyle', Hstyle);
    element.setProperty('--' + StyleVar + 'HoverActiveStyle', HAstyle);
  } else {
    element.setProperty('--' + StyleVar + 'HoverStyle', HAstyle);
    element.setProperty('--' + StyleVar + 'HoverActiveStyle', HAstyle);
  }
}

// Scroll to top button
HoverActive(
  scrollToTopBtnStyle,
  'scrollToTopBtn',
  'linear-gradient(135deg, #00cc6d, #00b8cc)',
  'linear-gradient(135deg, #009952, #008a99)',
);

// Liks
const a = document.querySelectorAll('a');
a.forEach((element) => HoverActive(element.style, 'a', '#efefef', '#e66465'));

// Black Links
imageTextButtonStyle = document.querySelector('.image-text .button a').style;
emailStyle = document.querySelector('.contacts p a').style;
HoverActive(imageTextButtonStyle, 'blackA', '#1f1f1f', '#e66465');
HoverActive(emailStyle, 'blackA', '#1f1f1f', '#e66465');

// Feedback form button
feedbackBtnStyle = document.querySelector('.feedback-form button').style;
HoverActive(feedbackBtnStyle, 'feedbackBtn', '#006aff', '#004ab3');

// Footer Links
footerA = document.querySelectorAll('footer a');
footerA.forEach((element) => HoverActive(element.style, 'footerA', '#efefef', '#007bff'));
