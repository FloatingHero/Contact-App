const icon = document.getElementById('navbar__icon');
const navbar_list = document.getElementById('navbar__list');
const profile_image = document.getElementById('profile_image');
const sublist = document.getElementById('navbar__list__item__sublist');

icon.addEventListener('click', () => {
	navbar_list.classList.toggle('toggle__list'); //* la clase debe ser #iddeseado.clase
});

profile_image.addEventListener('click', () => {
	sublist.classList.toggle('toggle__sublist');
});



