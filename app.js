// Show button when page is scrolled down
window.onscroll = function() {
    const button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

















const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
    toggleButton.textContent = '☀️';
} else {
    body.classList.add('light');
    body.classList.remove('dark');
    toggleButton.textContent = '🌙';
}


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    if (body.classList.contains('dark')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

