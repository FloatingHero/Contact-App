const icon = document.getElementById('navbar__icon');
const navbar_list = document.getElementById('navbar__list');

icon.addEventListener('click', () => {

    console.log('evento lanzado')
    navbar_list.classList.toggle('toggle__list'); //* la clase debe ser #iddeseado.clase

});