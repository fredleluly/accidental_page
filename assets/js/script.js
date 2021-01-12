function toggleMenu() {
    const menuToggle = document.querySelector('.navbar')    
    const loss = document.querySelector('.logos')    
    menuToggle.classList.toggle('show')
    loss.classList.toggle('logoss')
}

const linkcolor = document.querySelectorAll('.nav-link')
function activelink(){
    linkcolor.forEach(Link => {Link.classList.remove('active')})
    this.classList.add('active')
}
linkcolor.forEach(Link => Link.addEventListener('click',activelink))

const tl = gsap.timeline({ default: { duration: 3 } });


tl.fromTo('.banner .textBx h2', { opacity: 0 , y: -100}, { opacity: 1, y:0 });

tl.fromTo('.banner .textBx h2 span', { opacity: 0, }, { opacity: 1, stagger: .5, delay: 1 });

tl.fromTo('.banner .textBx h3', {y:900}, {y:0});

tl.fromTo('.btn', { opacity: 0, backgroundColor: '#49df83', color: '#fff' }, { opacity: 1, backgroundColor: '#171717', color: '#b6b6b6', delay: 2 });

tl.from('.about .heading h2', { x: -300 });

tl.from('.about .content', { y: -300, width: 0, opacity: 1 });

tl.to('.services .content .servicesBx', { opacity: 1, stagger: 1 }, '-=5');

tl.to('.nav-item', {opacity: 1, stagger: 1})
