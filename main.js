const nav = document.querySelector('#nav');
const links = document.querySelectorAll('.a-link');

window.onscroll = ()=> {
  if(window.scrollY > 0 && window.innerWidth > 858){
    nav.classList.add('scrolled');

    links.forEach((link)=>{
      link.classList.add('link-color');
    });

  }else{
    nav.classList.remove('scrolled');

    links.forEach((link)=>{
      link.classList.remove('link-color');
    });

  }
}
