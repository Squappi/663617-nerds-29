const buttonCart = document.querySelector(".button-cart");
const modalShow = document.querySelector(".modal-login");
const loginClose = modalShow.querySelector(".modal-close");
const modalForm = modalShow.querySelector(".modal-form-name");
const iconName = modalShow.querySelector(".form-icon-name");
const iconEmail = modalShow.querySelector(".form-icon-email");
const textArea = modalShow.querySelector(".textarea-modal");
const button = modalShow.querySelector(".button-modal");
const slider = document.querySelector(".banner-style");
const slides = document.getElementsByClassName("slide");
const sliderControls = document.querySelector(".slider-controls");
const dods = (sliderControls)?sliderControls.children:null;

let current = 0;
let prevent = 2;

let timerId;
getTimeout();
function getTimeout(){
	clearTimeout(timerId);
	timerId = setTimeout(function tick() {
       	if(dods){
       		current = (current + 1) % 3;
			prevent = (current === 0)?2:current - 1;
       		nextSlide();
       		timerId = setTimeout(tick, 4000);
       	}
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
if(dods){
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
}


buttonCart.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalShow.classList.add("modal-show");
	console.log(iconName);
	iconName.focus();
});

loginClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalShow.classList.remove("modal-show");
	modalShow.classList.remove("modal-error");
});
function checkName (value){
	if(!value || value.length < 0){
		iconName.classList.add("modal-error");
		return false;
	}
	return true;
}
button.addEventListener("click", function(evt) {
	if (checkName(iconName.value) && iconEmail.value && textArea.value){
		localStorage.setItem("login", iconEmail.value);
		return;
	}
	if(!iconEmail.value){
		iconEmail.classList.add("modal-error");
	}
	if(!textArea.value){
		textArea.classList.add("modal-error");
	}
	setTimeout(function(){
			iconName.classList.remove("modal-error");
			iconEmail.classList.remove("modal-error");
			textArea.classList.remove("modal-error");
		},650);
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalShow.classList.contains("modal-show")) {
			evt.preventDefault();
			modalShow.classList.remove("modal-show");
			modalShow.classList.remove("modal-error");
		}
	}
});
