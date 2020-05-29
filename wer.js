btn_menu.addEventListener('click', function(){
  menu.classList.toggle('menu_is-open');})

  var color = 'green'; // Либо hex #fafafa и т.д.

// Менять цвет при клике, либо сразу после загрузки dom
function change(identifier) {
 identifier.style.background = color;
}