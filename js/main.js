$(document).ready(function(){

 //Despliegue de menú

  
$("#desplegar").click(function (e) {

  e.preventDefault();

  $(".toggle").toggle("slow");
   
});



$("#desplegar2").click(function (e) {

  e.preventDefault();

  $(".toggle2").toggle("slow");

   
});

$("#desplegar3").click(function (e) {

  e.preventDefault();

  $(".toggle3").toggle("slow");

   
});

$("#desplegar4").click(function (e) {

  e.preventDefault();

  $(".toggle4").toggle("slow");
   
});

$("#desplegar5").click(function (e) {

  e.preventDefault();

  $(".toggle5").toggle("slow");
   
});

})


function myFunction() {

  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


