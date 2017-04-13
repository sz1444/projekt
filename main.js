var allGallery= document.querySelectorAll('#gallery ul li img');


 var screenImg = document.querySelector('#screen-img');
var galleryDisplay =document.querySelector('#display');
var closeGallery = document.querySelector('#close');


for (i = 0; i < allGallery.length; i++) {
   allGallery[i].addEventListener("click", write);
    
}
 

closeGallery.addEventListener('click', close);

function write(){
   screenImg.src=this.src;
    galleryDisplay.style.display="block";
     
}


function close(){
   galleryDisplay.style.display='none';
}

var input = document.querySelector('#formarea');
var characters = document.querySelector('#charactersLength');

input.addEventListener('keyup', onKeyDown);

function onKeyDown(){
    characters.textContent = input.value.length;
}


var buttonForm = document.querySelector('#send');


buttonForm.addEventListener('click', validation);


function validation(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
     if (name.value === '' ) {
        name.setCustomValidity('Podaj swoje imię!');
        name.classList.add("error");
    } else {
        name.setCustomValidity('');
         email.classList.remove("error");
    }
    
    if(input.value.length<1){
       input.setCustomValidity('Podaj treść swojej wiadomości!'); 
        input.classList.add("error");
    } else {
        input.setCustomValidity('');
         email.classList.remove("error");
    }
    
    if(email.value.match(reg)==null){
       email.setCustomValidity('Podany adres jest nie prawidłowy');
         email.classList.add("error");
    } else {
        email.setCustomValidity('');
         email.classList.remove("error");
    }
}



var menu = document.querySelector('#menu');


menu.addEventListener("click", mobileMenu);


function mobileMenu() {
   var a = document.querySelector('nav');
   
   if (a.style.display == 'none') {
      a.style.display = "block"
   } else {
      a.style.display = "none"
   }
}