const slider = document.querySelector(".banner-style");
const slides = document.getElementsByClassName("slider-item");
const dods = document.querySelector(".slider-controls").children;

let current = 0;
let prevent = 2;

let timerId;
getTimeout();
function getTimeout(){
	clearTimeout(timerId);
	timerId = setTimeout(function tick() {
		current = (current + 1) % 3;
		prevent = (current === 0)?2:current - 1;
       	nextSlide();
       	timerId = setTimeout(tick, 4000);
   	}, 4000);
}
          
function nextSlide(){
	slider.classList.remove("site-wrapper-" + prevent);
	slider.classList.add("site-wrapper-" + current);
	slides[prevent].classList.remove("slide-current");
	slides[current].classList.add("slide-current");
	dods[prevent].classList.remove("current");
	dods[current].classList.add("current");
}
for (let i=0; i < dods.length; i++){
	dods[i].addEventListener("click",function(){
		let id = Number(dods[i].id);
		if(id!== current){
			prevent = current;
			current = id;
			nextSlide();
			getTimeout();
		}
	});
}