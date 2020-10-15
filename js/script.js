const buttonCart = document.querySelector(".button-cart");
const modalShow = document.querySelector(".modal-login");
const loginClose = document.querySelector(".modal-close");
const modalForm = document.querySelector(".modal-form-name");
const iconName = document.querySelector(".form-icon-name");
const iconEmail = document.querySelector(".form-icon-email");
const textArea = document.querySelector(".textarea-modal");

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

modalForm.addEventListener("submit", function(evt) {
	if (!iconName || !iconEmail || !textArea){
		evt.preventDefault();
		modalShow.classList.add("modal-error");
	} else {
		localStorage.setItem("login", iconEmail.value);
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalShow.classList.contains("modal-show")) {
			evt.preventDefault();
			modalShow.classList.remove("modal-show");
		}
	}
});