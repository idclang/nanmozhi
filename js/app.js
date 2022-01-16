window.onload = ()=>{

var input = document.querySelector("#input");
var menu_icon = document.querySelector(".menu-icon");
var hero = document.querySelector(".hero");
var search_bar = document.querySelector(".search-bar");
var settings_menu = document.querySelector(".settings-menu");
var theme = document.querySelector("#theme");




// hide
input.addEventListener('keyup',()=>{
    if(input.value.length > 0){
        hero.classList.replace('hero', 'hero-hide');
        search_bar.style.marginTop = "2vh";
    }else {
        hero.classList.replace('hero-hide', 'hero'); 
        search_bar.style.marginTop = "0vh";
    };
});
menu_icon.addEventListener('click', ()=>{
 // hero.classList.toggle('hero-hide');
  search_bar.classList.toggle('search-bar-hide');
  settings_menu.classList.toggle('settings-menu-reveal');
});


//theme

theme.addEventListener('change',()=>{
    if(theme.selectedIndex === 1){
        document.querySelector("header").classList.add('dark');
        document.querySelector(".footer").classList.add('dark');
        document.querySelector(".search-bar").classList.replace('search-bar','search-bar-dark');
       var selectboxes = document.getElementsByClassName('selectbox');
       for (var i=0, len = selectboxes.length; i <len; i++){
          selectboxes[i].classList.add('selectbox-dark');
       };
        
    }else if(theme.selectedIndex === 0){
        document.querySelector(".header").classList.remove('dark');
        document.querySelector(".footer").classList.remove('dark');
        document.querySelector(".search-bar-dark").classList.replace('search-bar-dark','search-bar');
        var selectboxes = document.getElementsByClassName('selectbox');
        for (var i=0, len = selectboxes.length; i <len; i++){
           selectboxes[i].classList.remove('selectbox-dark');
        };
      
    };
})

var header = document.querySelector(".header");

var scrollPos = 0;

window.addEventListener('scroll',()=>{
     // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos){
      header.classList.remove('sticky');
      hero.classList.replace('hero-hide', 'hero');
  }else{
      header.classList.add('sticky');
      hero.classList.replace('hero', 'hero-hide');
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});

}




