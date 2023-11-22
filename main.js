// const nav = document.querySelector('#nav');
// const links = document.querySelectorAll('.a-link');
// const check = document.querySelector('#check');


// window.onscroll = ()=> {
//   if(window.scrollY > 0){
//     nav.classList.add('scrolled');

//     links.forEach((link)=>{
//       link.classList.add('link-color');
//     });

//   }else{
//     nav.classList.remove('scrolled');

//     links.forEach((link)=>{
//       link.classList.remove('link-color');
//     });
//   }
// }


let nav = document.querySelector('#nav');
const links = document.querySelectorAll('.a-link');
const check = document.querySelector('#check');


check.addEventListener('click', ()=>{
  if(check.checked){
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
})


window.onscroll = ()=> {
  if(window.scrollY == 0){
    nav.classList.remove('scrolled');

    links.forEach((link)=>{
      link.classList.remove('link-color');
    });

  }else{
    nav.classList.add('scrolled');

    links.forEach((link)=>{
      link.classList.add('link-color');
    });
  }
}


