$(document).ready(function(){

 //Despliegue de menú

  
$("#desplegar").click(function (e) {

  e.preventDefault();

  $(".toggle").toggle();
   
});



$("#desplegar2").click(function (e) {

  e.preventDefault();

  $(".toggle2").toggle();

   
});

$("#desplegar3").click(function (e) {

  e.preventDefault();

  $(".toggle3").toggle();

   
});

$("#desplegar4").click(function (e) {

  e.preventDefault();

  $(".toggle4").toggle();
   
});

$("#desplegar5").click(function (e) {

  e.preventDefault();

  $(".toggle5").toggle();
   
});

})


function myFunction() {

  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


