$(document).ready(function () {
  $(".open").click(function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");

    answer.slideToggle(200);

    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    } else {
      trigger.addClass("faq-o");
    }

    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    } else {
      container.addClass("expanded");
    }
  });
  $(".question").each(function () {
    $(this).attr(
      "data-search-term",
      $(this).text().toLowerCase() + $(this).find("ptag").text().toLowerCase()
    );
  });

  $(".live-search-box").on("keyup", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(".question").each(function () {
      if (
        $(this).filter("[data-search-term *= " + searchTerm + "]").length > 0 ||
        searchTerm.length < 1
      ) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });
  });
});
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
   $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;

/*  $(document).ready(function(){ 
  	$('.SmoothmyTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});*/
}


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
