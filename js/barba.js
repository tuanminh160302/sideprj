function pageTransition() {

    if (windowWidth >= 1200) {
        var tl = gsap.timeline();
        tl.to('.transition', { duration: .9, scaleX: 1, ease: 'power4.inOut' })
        tl.to('.transition', { delay: .9, duration: 0, transformOrigin: 'left' })
        tl.to('.transition', { delay: .1, duration: .9, scaleX: 0, ease: 'power4.inOut' })
        tl.to('.transition', { delay: .1, duration: 0, transformOrigin: 'right' })
    } else if (windowWidth <= 600) {
        var tl = gsap.timeline();
        tl.to('.transition', { duration: 0, scaleX: 1})
        gsap.to('.nav-bar-elt-m', .3, {opacity: 0})
        tl.to('.menu-container', { delay: .2, duration: .9, scaleX: 0, ease: 'power4.inOut' })
        tl.to('.transition', { delay: .1, duration: .9, scaleX: 0, ease: 'power4.inOut' })
        tl.to('.transition', { delay: .1, duration: 0, transformOrigin: 'right' })
        setTimeout(() => {
            document.querySelector('#menu').classList.remove('open')
            menuTrigger = 0
        }, 100)
    }
}

// contentAnimation used to animate things inside barba container in which the contents appear in both pages
function contentAnimation() {
    if (windowWidth >= 1200) {
        var sceneParallax = document.querySelector('.preview');
        var parallaxInstance = new Parallax(sceneParallax, {
            relativeInput: true
            
        });
        redBg = 0
    }

}

function delay(n) {
    n = n || 1500;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n)
    })
}

barba.init({
    sync: true,
    views: [{
        namespace: 'index',
        beforeEnter({ next }) {
        //Before entering index, load contentAnimation in data-barba:"container"
        contentAnimation();
        },
        // load your script
        // namespace: 'contact',
        // beforeEnter({ next }) {

        // // load your script
        // let script = document.createElement('script');
        // script.src = 'js/contact-bb.js';
        // next.container.appendChild(script);
        // console.log(script.src)
        // }
    }],

    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(900);
            done();
        },

        async enter(data) { 
            // contentAnimation();
        },

        async once(data) {
            // contentAnimation();
        }

    }]
})

var redBg = 0 
document.getElementById('logo').addEventListener('click', () => {
    redBg = 1 - redBg
    if (redBg === 1) {
        gsap.to('.vertical-bar', .9, { scaleX: 1, ease: 'power4.inOut'})
    } else if (redBg === 0) {
        gsap.to('.vertical-bar', .9, { scaleX: .08, ease: 'power4.inOut'})
    }
})

$(document).on('click','a[href]', function(e){
	if(e.currentTarget.href === window.location.href)
	{
		return false
	}
});