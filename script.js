function toggleClass(){
	let menu= document.querySelector(".nav-links");
	menu.classList.toggle("toggleCls");
}
let hamburger =document.querySelector(".hemIcon");
hamburger.addEventListener("click",toggleClass)
