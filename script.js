const lenis = new Lenis({
    autoRaf: true,
});

function themeChange() {
    document.querySelectorAll('.section').forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: 'top 50%',
            end: 'bottom 50%',
            toggleActions: "play none none reverse",
            onEnter: function () {
                document.body.setAttribute('data-theme', e.dataset.color)
            },
            onEnterBack: function () {
                document.body.setAttribute('data-theme', e.dataset.color)
            },
            scrub: 1
        })
    })
}

function fadeUpAnimation() {
    gsap.from('.fade_up_multi_h1 span', {
        y: 100,
        duration: 1,
        stagger: 0.1
    })

    gsap.utils.toArray('.fade_up_multi span, .fade_up_single').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 65%',
                toggleActions: "play none none reverse",
                scrub: 1.5
            },
            y: 100,
            opacity: 0,
            stagger: 0.2
        });
    });

}

function fadeInAnimation() {
    // gsap.from('.fade_up_multi_h1 span', {
    //     y: 100,
    //     duration: 1,
    //     stagger: 0.1
    // })

    gsap.utils.toArray('.fade_in_single').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 70%',
                end: 'bottom 50%',
                toggleActions: "play none none reverse",
                scrub: 1.5
            },
            opacity: 0,
            stagger: 1,
            duration: 1.5
        });
    });

}

function fadeOutAnimation() {
    // gsap.from('.fade_up_multi_h1 span', {
    //     y: 100,
    //     duration: 1,
    //     stagger: 0.1
    // })

    gsap.utils.toArray('.fade_out_single').forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 20%',
                end: 'bottom 10%',
                toggleActions: "play none none reverse",
                scrub: 1.5
            },
            opacity: 0,
            stagger: 0.2
        });
    });

}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.info-section .card-box',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1.5,
        toggleActions: "play pause pause reverse",
    }
});

tl.to('.card-1', {
    rotate: '-5deg',
}, 'a')

tl.to('.card-1 .progress-1', {
    width: '100%',
    ease: "power4.inOut",
}, 'a')
tl.to('.card-1 .progress-2', {
    width: '100%',
    ease: "back.in(1)",
}, 'a')

tl.to('.card-2', {
    rotate: '5deg',
}, 'b');

tl.to({ value: 0 }, {
    value: 3,
    duration: 1,
    ease: "none",
    onUpdate: function () {
        let progressElement = document.querySelector('.card-2 .progress');
        progressElement.innerText = Math.round(this.targets()[0].value);
    }
}, 'b');

gsap.to('.on-animation' ,{
    scrollTrigger: {
        trigger: ".on-animation-container",
        start: "top -50%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        scrub: 1
    },
    x: "100%",
    duration: 1
})

gsap.to('.on-animation-text' ,{
    scrollTrigger: {
        trigger: ".on-animation-container-2",
        start: "top 50%",
        end: "bottom 0%",
        toggleActions: "play none none reverse",
        scrub: 1
    },
    opacity: 0,
    duration: 1
})







fadeUpAnimation()
fadeInAnimation()
fadeOutAnimation()

themeChange()