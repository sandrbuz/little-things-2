let headMenu = document.getElementById('head-menu');
headMenu.addEventListener('click', openCloseLists);
let x = document.getElementById('lists');


function openCloseLists() {
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }


}
/* dropdown menu when clicked */

// ----------------------------------------------------------