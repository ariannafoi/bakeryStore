let nav = document.querySelector('#nav');
const links = document.querySelectorAll('.a-link');
const check = document.querySelector('#check');

window.onscroll = ()=> {
  if(window.scrollY > 0){
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

check.addEventListener('click', ()=>{
  if(check.checked){
    nav.style.backgroundColor = 'white';
    nav.style.transition = 'all .5s';
  }else{
    nav.style.backgroundColor = 'transparent'; 
  }
})