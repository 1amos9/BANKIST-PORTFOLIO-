'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const message=document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='we use cookies for improving functionality and performance. <button class="btn btn--close-cookies"> Got it!</button>';
header.append(message);
message.style.backgroundColor='#37383d';
message.style.width='105%';
document.querySelector('.btn--close-cookies').addEventListener('click',function(e) {
  message.remove();
});
const btnscroll = document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');
btnscroll.addEventListener('click',function(e) {
 // const s1coords=section1.getBoundingClientRect();
  //how to scroll the position
 // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
 //old way to calculate the scroll position
//  window.scrollTo({
//   left:s1coords.left+window.pageXOffset,
//   top:s1coords.top+window.pageYOffset,
//   behavior:'smooth',
// })
//new way to scroll the position
section1.scrollIntoView({behavior:'smooth'});
})
//const h1=document.querySelector('h1');
//first way to use the mouse cursor behavior
// h1.addEventListener('mouseenter',function(e) {
//   alert('you have attend the space');
// });
//second way to use the mouse cursor behavior
// setTimeout(h1.onmouseenter=function(e) {
//   alert('you have attend the space');
// },3000);
const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
document.querySelector('body').addEventListener('click',function(e) {
  this.style.backgroundColor=randomColor();
});
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
})
