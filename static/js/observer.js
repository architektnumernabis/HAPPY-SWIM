const aboutUs = document.querySelectorAll('.about-us-element');
const options = {
    threshold: 0.5
};

const aboutUsObserver = new IntersectionObserver(function (entries, aboutUsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('flip-left');
            aboutUsObserver.unobserve(entry.target);
        }
    })
}, options);

aboutUs.forEach(element => {
    aboutUsObserver.observe(element);
});
