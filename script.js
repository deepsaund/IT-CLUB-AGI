// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

// GSAP Animations with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out"
});

gsap.utils.toArray('.activity-card, .teaching-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out"
    });
});
