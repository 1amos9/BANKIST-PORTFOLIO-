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
// const message=document.createElement('div');
// message.classList.add('cookies-message');
// message.innerHTML ='we use cookies for improved functionality and performance. <button class="btn btn--close-cookies">Got it!</button>';
// header.append(message);
// message.style.backgroundColor='#37383d';
// message.style.width='105%';
// //message.style.height=Number.parseFloat(getComputedStyle(message.height)+40+px);
// message.style.textAlign='center';
// message.style.color='#ffff';
// document.querySelector('.btn--close-cookies').addEventListener('click', function(){
//   message.remove();
// })
//changing a customized properties which was declared in the css file 
//document.documentElement.style.setProperty('--color-primary','orangered');
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e){
  const s1coords=section1.getBoundingClientRect();
  //how to calculate the scroll position
 // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
 //old way to do it 
//  window.scrollTo({
//   left: s1coords.left+window.pageXOffset,
//   top: s1coords.top+window.pageYOffset,
//   behavior:"smooth",
//  })
//New way to do it and shortest way
section1.scrollIntoView({behavior:"smooth"})
})
