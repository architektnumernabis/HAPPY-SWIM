const aboutUs = document.querySelectorAll('.about-us-element');
const icons = document.querySelectorAll('.whyus__column');
const optionsAboutUs = {
    threshold: 0.5
};
const optionsIcons = {
    threshold: 0.9
}

const aboutUsObserver = new IntersectionObserver(function (entries, aboutUsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('flip-left');
            aboutUsObserver.unobserve(entry.target);
        }
    })
}, optionsAboutUs);

aboutUs.forEach(element => {
    aboutUsObserver.observe(element);
});

const iconsObserver = new IntersectionObserver(function (entries, iconsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('flip-left');
            aboutUsObserver.unobserve(entry.target);
        }
    })
}, optionsIcons);

icons.forEach(element => {
    iconsObserver.observe(element);
});
