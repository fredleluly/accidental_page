function toggleMenu() {
    const menuToggle = document.querySelector('.navbar')    
    const loss = document.querySelector('.logos')    
    menuToggle.classList.toggle('show')
    loss.classList.toggle('logoss')
}

const linkcolor = document.querySelectorAll('.nav-link')
function activelink(){
    linkcolor.forEach(Link => {Link.classList.remove('active')})
    // console.log(this.classList.contains('active'))
    this.classList.add('active')
}
linkcolor.forEach(Link => Link.addEventListener('click',activelink))