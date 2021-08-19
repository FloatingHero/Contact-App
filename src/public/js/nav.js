const icon = document.getElementById('navbar__icon');
const navbar_list = document.getElementById('navbar__list');
const username = document.getElementById('username');
const sublist = document.getElementById('navbar__list__item__sublist');

icon.addEventListener('click', () => {
	navbar_list.classList.toggle('toggle__list'); //* la clase debe ser #iddeseado.clase
});

username.addEventListener('click', () => {
	sublist.classList.toggle('toggle__sublist');
});

