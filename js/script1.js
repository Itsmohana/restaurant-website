// Animate on Scroll
const rows = document.querySelectorAll('.image-text-row');

const onScroll = () => {
    rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            row.classList.add('animate');
        }
    });
};

// Trigger the animation when the page is scrolled
window.addEventListener('scroll', onScroll);
