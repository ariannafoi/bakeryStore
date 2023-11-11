const nav = document.querySelector('#nav');
const links = document.querySelectorAll('.a-link');
const logo = document.querySelector('#logo')

window.onscroll = ()=> {
  if(window.scrollY > 0 && window.innerWidth > 858){
    nav.classList.add('scrolled');

    links.forEach((link)=>{
      link.classList.add('link-color');
    });

    logo.src = './media/logoScrolled.png';

  }else{
    nav.classList.remove('scrolled');

    links.forEach((link)=>{
      link.classList.remove('link-color');
    });

    logo.src = './media/logo.png';
  }
}
