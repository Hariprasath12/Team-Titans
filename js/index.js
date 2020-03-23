let toggleNavMenu = document.getElementById("toggle-nav-menu");
let navigation = document.getElementById("navigation");

toggleNavMenu.addEventListener('click', function(e) {
	navigation.classList.toggle('active');
	e.preventDefault();
});
