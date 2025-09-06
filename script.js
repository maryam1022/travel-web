let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container'); 
let formClose = document.querySelector('#form-close'); 
let menu = document.querySelector('#menu-bar'); 
let navBar = document.querySelector('.nav'); 

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
  
};
menu.addEventListener( 'click',() =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});
searchBtn.addEventListener( 'click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.toggle('active');
 });

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
 });


 var homeShadow = gsap.timeline();

homeShadow.to(".home-shadow",{
    top: 0,
    duration : 2
})
.from(".home-shadow h3",{
  opacity:0,
  duration:1,
  y:50
})
.from(".home-shadow video",{
  opacity:0,
  stragger:.2,
  duration: 1,
  scale:1.2
})

.from(".home-data h1",{
  opacity:0,
  duration:1,
  y:50
},"-=.5")
.from(".home-data p",{
  opacity:0,
  duration:1,
  y:50
})
.from(".home-data a",{
  opacity:0,
  duration:1,
  y:50
})

var book = gsap.timeline()
book.from(".booking-heading h1 span", {
  opacity:0,
  y:50,
  duration:0.7,
  stragger:0.7,
})
book.from(".form-box ",{
  opacity:0,
  y:50,
  duration:1
})
book.from(".images img ",{
  opacity:0,
  duration:1,
  stragger:.2
})

var package = gsap.timeline()
package.from(".package h1 span",{
   opacity:0,
  y:50,
  duration:1,
  stragger:0.4,
})
package.from("#box1 ",{
  opacity:0,
  y:50,
  duration:0.7
})
 
package.from("#box2 ",{
  opacity:0,
  y:50,
  duration:0.7
})

package.from("#box3 ",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box4 ",{
  opacity:0,
  y:50,
  duration:1
})

package.from("#box5 ",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box6 ",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box7 ",{
  opacity:0,
  y:50,
  duration:2
})
package.from("#box8 ",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box9",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box10",{
  opacity:0,
  y:50,
  duration:1
})
package.from("#box11",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box12",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box13",{
  opacity:0,
  y:50,
  duration:1
})
package.from("#box14 ",{
  opacity:0,
  y:50,
  duration:0.7
})
package.from("#box15 ",{
  opacity:0,
  y:50,
  duration:0.7
})

var services = gsap.timeline()
services.from(".services h1 span",{
   opacity:0,
  y:50,
  duration:1,
  stragger:0.4,
})
services.from("#boxe ",{
  opacity:0,
  y:50,
  duration:0.7
})
 
services.from("#box0 ",{
  opacity:0,
  y:50,
  duration:0.7
})

services.from("#boxa ",{
  opacity:0,
  y:50,
  duration:0.7
})
services.from("#boxb ",{
  opacity:0,
  y:50,
  duration:0.7
})

services.from("#boxc",{
  opacity:0,
  y:50,
  duration:0.7
})
services.from("#boxd ",{
  opacity:0,
  y:50,
  duration:0.7
})
var review = gsap.timeline()
review.from(".review h1 span",{
   opacity:0,
  y:50,
  duration:1,
  stragger:0.4,
})
review.from("#cob ",{
  opacity:0,
  y:50,
  duration:0.7
})
 
review.from("#cosa",{
  opacity:0,
  y:50,
  duration:0.7
})

review.from("#cos3 ",{
  opacity:0,
  y:50,
  duration:0.7
})