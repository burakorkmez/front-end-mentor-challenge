const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('header nav');
const links = document.querySelectorAll('header ul li');

let menuOpen = false;
menu.addEventListener('click', () => {
	if (!menuOpen) {
		menu.classList.add('open');
		menuOpen = true;
		headerNav.classList.add('go-down');
	} else {
		menu.classList.remove('open');
		menuOpen = false;
		headerNav.classList.remove('go-down');
	}
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		menu.classList.remove('open');
		headerNav.classList.remove('go-down');
		menuOpen = false;
	});
});
