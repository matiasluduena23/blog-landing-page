// expanded link options 
const linkItems = document.querySelectorAll('.nav-item-left')
const arrLink = Array.from(linkItems)

arrLink.forEach(item => item.addEventListener('click', () =>{
    const isExpanded = JSON.parse(item.getAttribute('aria-expanded')!);
    item.setAttribute('aria-expanded', new Boolean(!isExpanded).toString())
    
}))

// expanded mobile hmburger menu
const hambuger = document.querySelector('.hamburger');
hambuger?.addEventListener('click', ()=> {
    const isExpanded = JSON.parse(hambuger.getAttribute('aria-expanded')!);
    hambuger.setAttribute('aria-expanded', new Boolean(!isExpanded).toString())
})

// close menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        hambuger?.setAttribute('aria-expanded' ,'false')
    }
});

const nav = document.querySelector('.nav');
const header = document.querySelector('.main-header');

const intersectionNavObserver = new IntersectionObserver((entries, intersectionNavObserver)=> {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav?.classList.add('nav-scrolled')
        }else {
            nav?.classList.remove('nav-scrolled')
        }
    })
}, {rootMargin: "-300px 0px 0px 0px"})

intersectionNavObserver.observe(header!)