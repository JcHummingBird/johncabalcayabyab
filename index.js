function myGreetings() {
  alert("Welcome to my website!");
}


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $("#Greet").hide(5000);
    $("#Greet").css("fontSize", "36px");
    $("#Greet").css("color", "#1F4690");
});

/*$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#divfltr *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});*/


document.getElementById("firstproj").innerHTML = "Project Number 1"





 









