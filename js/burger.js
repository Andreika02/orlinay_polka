const nav = document.querySelector('.nav__list');
const burger__const = document.querySelector('.burger');
const nav__link = document.querySelectorAll('.nav__item');



function activeBurger() {
	console.log('burger');
	// console.log(nav.classList)
	nav.classList.toggle("nav__list_active");
	burger__const.classList.toggle('active');
	nav__link.forEach((link, index) => {
		console.log(index)
		if (link.style.animation){
			link.style.animation = '';

		}
		else{
			link.style.animation = `navAnim 1.5s ease forwards ${index/7+0.3}s`;
		}
	})
}