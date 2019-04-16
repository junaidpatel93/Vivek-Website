var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 7 seconds
}

function onLoad(){
    
    homeSelect();
}
$(function() {
    $('#homeTab').trigger('click');
    
  });

function changeTabs(){
    
    $('#critical').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#healthAndDental').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });
    
    $('#disability').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#respIns').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#rrspIns').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#tfsaIns').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#visitV').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#superV').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#travelInsurance').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#lifeIns').click(function(){
        $('#insuranceShow').removeClass("show");
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
    });

    $('#homeTab').click(function(){
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
        homeSelect();
    });
    $('#insuranceTab').click(function(){
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
        insurance();
    });
    $('#contactTab').click(function(){
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
        contactSelect();
    });
    $('#aboutTab').click(function(){
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
        aboutUs();
    });
    $('#superTab').click(function(){
        $(".active").removeClass("active");
        $('.tabBGColor').removeClass("tabBGColor");
        superVisaTab();
    });
}

function superVisaTab(){
    $('#superTab').addClass("active");
    $('#superTab').addClass("tabBGColor");
}

function aboutUs(){
    $('#aboutTab').addClass("active");
    $('#aboutTab').addClass("tabBGColor");
}
function homeSelect(){
    $('#homeTab').addClass("active");
    $('#homeTab').addClass("tabBGColor");
}
function contactSelect(){
    $('#contactTab').addClass("active");
    $('#contactTab').addClass("tabBGColor");
}
function insurance(){
    $('#insuranceTab').addClass("active");
    $('#insuranceTab').addClass("tabBGColor");
}


var form = $('form')[0];
   form.addEventListener('submit',contact,false);
   function contact(e) {
      // Prevent Default Form Submission
      e.preventDefault();

      var target = e.target || e.srcElement;
      var i = 0;
      var message = '';

      // Loop Through All Input Fields
      for(i = 0; i < target.length; ++i) {
         // Check to make sure it's a value. Don't need to include Buttons
         if(target[i].type != 'text' && target[i].type != 'number' && target[i].type != 'textarea') {
                // Skip to next input since this one doesn't match our rules
            continue;
         }

         // Add Input Name and value followed by a line break
         message += target[i].name + ': ' + target[i].value + "\r\n";
      }
      // Modify the hidden body input field that is required for the mailto: scheme
      target.elements["body"].value = message;

      // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
      this.submit();
   }

   var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

