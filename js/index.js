window.onload = () => {
    setTimeout(() => {
        gsap.to('.preloader', 2, {background: 'white', ease:'power4.inOut'})
        gsap.to('svg', 2, {color: 'black', ease:'power4.inOut'})
        gsap.to('#preloader-img', 2, {opacity: 1, ease:'power4.inOut'})
        gsap.to('#float', 0, {delay: 2, display: 'block'})
        gsap.to('#float', .5, {delay: 2, opacity: 1, ease:'power4.inOut'})
    }, 1000)
}

document.getElementById('float').addEventListener('click', () => {
    gsap.to('.fade-out', .3, { opacity: 0})
    gsap.to('.preloader', .9, {delay: .5, scaleY: 0, ease:'power4.inOut'})
})

document.getElementById('float').addEventListener('mouseover', () => {
    gsap.to('#float', .3, { boxShadow: 'inset 300px 0 0 0 #BD1E2D', color: 'white', border: 'none'})
})

document.getElementById('float').addEventListener('mouseout', () => {
    gsap.to('#float', .3, { boxShadow: 'inset 300px 0 0 0 white', color: 'black', border: '2px solid black'})
    gsap.to('#float', 0, { delay: .3, boxShadow: 'inset 0 0 0 0 white'})
})






