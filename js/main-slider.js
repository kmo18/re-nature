window.onload = () => {
const wrap = document.querySelector('body'), wrapWidth = wrap.offsetWidth, slideList = document.querySelector('.slide_list'), slide = document.querySelectorAll('.slide'), slideImg = document.querySelectorAll('.slide img'), prev = document.querySelector('#prev'), next = document.querySelector('#next'), bullet = document.querySelectorAll('.bullet'), slideLen = slide.length, slideWidth = 100, slideSpeed = 300, slideMove = 5000;
if(wrapWidth >= 1401) { for(let i = 0; i < slideLen; i++) { slideImg[i].setAttribute('src', `imgs/main-sc-uhd-slide0${i + 1}.jpg`); } }else if(wrapWidth < 1401 && wrapWidth >= 1051) { for(let i = 0; i < slideLen; i++) { slideImg[i].setAttribute('src', `imgs/main-sc-desk-slide0${i + 1}.jpg`); } }else if(wrapWidth < 1051 && wrapWidth >= 651) { for(let i = 0; i < slideLen; i++) { slideImg[i].setAttribute('src', `imgs/main-sc-tb-slide0${i + 1}.jpg`); } }else if(wrapWidth < 651 && wrapWidth >= 320) { for(let i = 0; i < slideLen; i++) { slideImg[i].setAttribute('src', `imgs/main-sc-mb-slide0${i + 1}.jpg`); } }
slideList.style.width = `${slideWidth * (slideLen + 2)}vw`;
const firstEleChild = slideList.firstElementChild, lastEleChild = slideList.lastElementChild, firstClone = firstEleChild.cloneNode(true), lastClone = lastEleChild.cloneNode(true);
slideList.insertBefore(lastClone, firstEleChild); slideList.appendChild(firstClone); slideList.style.transform = `translate(-${slideWidth}vw)`;
const startNum = 0;
let currentIndex = startNum, currentSlide = slide[currentIndex], currentBullet = bullet[currentIndex];
let slideAddClass = () => { currentSlide.classList.add('active_slide'); currentBullet.classList.add('active_bullet'); }
let slideRemoveClass = () => { currentSlide.classList.remove('active_slide'); currentBullet.classList.remove('active_bullet'); } 
slideAddClass();
prev.addEventListener('click', (e) => { e.preventDefault();
if (currentIndex >= 0) { slideList.style.transition = `${slideSpeed}ms`; slideList.style.transform = `translateX(-${(slideWidth * currentIndex)}vw)`; }
if (currentIndex === 0) { setTimeout(() => { slideList.style.transition = '0ms'; slideList.style.transform = `translateX(-${(slideWidth * slideLen)}vw)`; }, slideSpeed); currentIndex = slideLen; }
slideRemoveClass(); currentSlide = slide[--currentIndex];
currentBullet = bullet[currentIndex]; slideAddClass(); });
next.addEventListener('click', (e) => { e.preventDefault();
if (currentIndex < slideLen) { slideList.style.transition = `${slideSpeed}ms`; slideList.style.transform = `translateX(-${(slideWidth * (currentIndex + 2))}vw)`; }
if (currentIndex === slideLen - 1) { setTimeout(() => { slideList.style.transition = '0ms'; slideList.style.transform = `translateX(-${slideWidth}vw)`; }, slideSpeed); currentIndex = -1; }
slideRemoveClass(); currentSlide = slide[++currentIndex];
currentBullet = bullet[currentIndex]; slideAddClass(); });
setInterval(() => {
if (currentIndex < slideLen) { slideList.style.transition = `${slideSpeed}ms`; slideList.style.transform = `translateX(-${(slideWidth * (currentIndex + 2))}vw)`; }
if (currentIndex === slideLen - 1) { setTimeout(() => { slideList.style.transition = '0ms'; slideList.style.transform = `translateX(-${slideWidth}vw)`; }, slideSpeed); currentIndex = -1; }
slideRemoveClass(); currentSlide = slide[++currentIndex];
currentBullet = bullet[currentIndex]; slideAddClass(); }, slideMove);
}