'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');
const btnscroll = document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');
const nav= document.querySelector('.nav');
const allSections = document.querySelectorAll('.section');

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
// message.style.position='fixed';
document.querySelector('.btn--close-cookies').addEventListener('click',function(e) {
  message.remove();
});

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
//⚠️changing colors on the page👇🏻
// const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
// const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// document.querySelector('body').addEventListener('click',function(e) {
//   this.style.backgroundColor=randomColor();
// });
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
})
// const h1=document.querySelector('h1');
// console.log(h1.childNodes);
// h1.firstElementChild.style.color='white';
// h1.lastElementChild.style.color='orangered';

tabsContainer.addEventListener('click',function(e){
const clicked=e.target.closest('.operations__tab');
if(!clicked)return;
//remove tab
tabs.forEach(t=>t.classList.remove('operations__tab--active'));
tabsContent.forEach(c=>c.classList.remove('operations__content--active'));
//active tab
clicked.classList.add('operations__tab--active');
//Active content area
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
const handHover=(e,opacity)=>{
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    const siblings=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if(el!==link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
}

//old way to handle hove on this buttons👇🏻
nav.addEventListener('mouseover',(e)=>{
  handHover(e,0.5);
});
nav.addEventListener('mouseout',(e)=>{
  handHover(e,1)
});

//sticky navigation
const initialCoords=section1.getBoundingClientRect();
window.addEventListener('scroll',()=>{
if(window.scrollY>initialCoords.top) nav.classList.add('sticky'); else nav.classList.remove('sticky');
});
//reveal sections
const revealSection=function(entries, observer) {
const [entry]=entries;
if(!entry.isIntersecting)return;
entry.target.classList.remove('section--hidden');
observer.unobserve(entry.target);
};
const sectionObserver=new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15,
})
allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})
const imgTarget=document.querySelectorAll('img[data-src]');
const loadImg=function(entries, observer){
const [entry]=entries;
if(!entry.isIntersecting)return;
//replace src with data-src
entry.target.src=entry.target.dataset.src;

entry.target.addEventListener('load',function(){
  entry.target.classList.remove('lazy-img')
})
observer.unobserve(entry.target);
}
const imgObserver=new IntersectionObserver(loadImg,{
root: null,
threshold:0,
rootMargin: '-200px',
})
imgTarget.forEach(img=>imgObserver.observe(img))
const slides=document.querySelectorAll('.slide')