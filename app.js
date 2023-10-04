function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function() {
    const header = document.querySelector("header") 
    header.classList.toggle("sticky", window.scrollY > 0);
})