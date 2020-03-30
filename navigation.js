const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
document.getElementById("menu").className = "noscroll"
toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
});