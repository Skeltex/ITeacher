// Navbar toggle
const navbarToggle = document.getElementById('nav-toggle');
const navbarItems = document.querySelectorAll('nav > .items-wrapper');

navbarToggle.addEventListener('click', () => {
  if (navbarToggle.dataset.active === 'true') {
    navbarToggle.dataset.active = 'false';
    navbarItems.forEach((item) => item.classList.add('hidden'));
    navbarToggle.children[0].classList.remove('bi-x-lg');
    navbarToggle.children[0].classList.add('bi-list');
  } else {
    navbarToggle.dataset.active = 'true';
    navbarItems.forEach((item) => item.classList.remove('hidden'));
    navbarToggle.children[0].classList.add('bi-x-lg');
    navbarToggle.children[0].classList.remove('bi-list');
  }
});

const navbarNavlinks = document.querySelectorAll('nav > .items-wrapper > .items.navlinks');
navbarNavlinks.forEach((item) => {
  item.addEventListener('click', () => {
    if (navbarToggle.dataset.active === 'true') {
      navbarToggle.dataset.active = 'false';
      navbarItems.forEach((i) => i.classList.add('hidden'));
      navbarToggle.children[0].classList.remove('bi-x-lg');
      navbarToggle.children[0].classList.add('bi-list');
    }
  });
});

// Form handling
const handleFormSubmit = (event) => {
  event.preventDefault();
  const { elements } = form
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element

      return { name, value }
    })

  console.log(data)
};

const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);