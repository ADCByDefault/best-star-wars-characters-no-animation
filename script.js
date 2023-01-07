const body = document.querySelector(".wrapper");

const mainNav = document.querySelector(".main-nav");

window.addEventListener("load", () => {
    setFilter();
});

body.addEventListener("scroll", () => {
    setFilter();
});

function setFilter() {
    if (body.scrollTop != 20) {
        mainNav.style.setProperty(
            "--filteranimation",
            "increase-filter"
        );
    } else {
        mainNav.style.setProperty(
            "--filteranimation",
            "decrease-filter"
        );
    }
}

const sectionObserverOptions = {
    root: body,
    threshold: 0.7,
};

const sectionObserver = new IntersectionObserver(
    (sections) => {
        sections.forEach((section) => {
            section.target.classList.toggle(
                "anim-in",
                section.isIntersecting
            );
            section.target.classList.toggle(
                "anim-out",
                !section.isIntersecting
            );
        });
    },
    sectionObserverOptions
);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    sectionObserver.observe(section);
});
