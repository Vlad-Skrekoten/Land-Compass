const goTopBtn = document.querySelector("#back_to_top");

goTopBtn.addEventListener("click", goTop);

window.addEventListener("scroll", trackScroll);

function trackScroll() {
    const start = window.scrollY;
    const coords = document.documentElement.clientHeight;
    if (start > coords) {
        goTopBtn.classList.add("go-top--show")
    } else {
        goTopBtn.classList.remove("go-top--show")
    }
}

function goTop() {
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}