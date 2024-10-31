const button = document.getElementById("scrollToTopBtn");
const buttonStyle = button.style;
let buttonX = 0,
    buttonY = 0;

function buttonTrans() {
    buttonStyle.transform = `translate(${buttonX}rem, ${buttonY}rem)`;
}

// Show button when page is scrolled down
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonX = -5
        buttonTrans()
    } else {
        buttonX = 0
        buttonTrans()
    }
};

// Up when mouse is on button
function btnUp(x) {
    buttonY = -0.2
    buttonTrans()
}
// Down when mouse isn't on button
function btnDown(x) {
    buttonY = 0
    buttonTrans()
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}