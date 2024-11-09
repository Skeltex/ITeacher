const ua = navigator.userAgent;
if (
  /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) ||
  /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
) {
  ifMobile = true;
} else {
  ifMobile = false;
}

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
if (!ifMobile) {
  // Up when mouse is on button
  scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtnY = -0.2;
    scrollToTopBtnTrans();
  });

  // Down when mouse isn't on button
  scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtnY = 0;
    scrollToTopBtnTrans();
  });
}

// Nav Toggle

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-links li');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu after the link clicked
navLink.forEach((e) =>
  e.addEventListener('click', () => {
    window.setTimeout(() => {
      navLinks.classList.remove('active');
    }, 250);
  }),
);

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

function HoverActive(selector, StyleVar, Hstyle, HAstyle) {
  const elements = document.querySelectorAll(selector);
  if (ifMobile) {
    elements.forEach((e) => {
      e.style.setProperty('--' + StyleVar + 'HoverStyle', Hstyle);
      e.style.setProperty('--' + StyleVar + 'HoverActiveStyle', HAstyle);
    });
  } else {
    elements.forEach((e) => {
      e.style.setProperty('--' + StyleVar + 'HoverStyle', HAstyle);
      e.style.setProperty('--' + StyleVar + 'HoverActiveStyle', HAstyle);
    });
  }
}

// Scroll to top button
HoverActive(
  '#scrollToTopBtn',
  'scrollToTopBtn',
  'linear-gradient(135deg, #00cc6d, #00b8cc)',
  'linear-gradient(135deg, #009952, #008a99)',
);

// Links
HoverActive('a', 'a', '#efefef', '#e66465');

// Black Links
HoverActive('.image-text .button a', 'blackA', '#1f1f1f', '#e66465');
HoverActive('.contacts p a', 'blackA', '#1f1f1f', '#e66465');

// Feedback form button
HoverActive('.feedback-form button', 'feedbackBtn', '#006aff', '#004ab3');

// Footer Links
HoverActive('footer a', 'footerA', '#efefef', '#007bff');
