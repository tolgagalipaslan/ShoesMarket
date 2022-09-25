const navbarCollapse = document.querySelector('.navbar');
const navbarButton = document.querySelector('.nav_menu_btn');

function navbar_toggler (){
if(navbarCollapse.style.display=='flex'){

    navbarCollapse.style.display='none'
}
else{
navbarCollapse.style.display='flex'

}
}