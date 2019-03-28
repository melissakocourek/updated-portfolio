var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
                    var slideIndex = 1;
                    showDivs(slideIndex);
                    
                    function plusDivs(n) {
                      showDivs(slideIndex += n);
                    }
                    
                    function currentDiv(n) {
                      showDivs(slideIndex = n);
                    }
                    
                    function showDivs(n) {
                      var i;
                      var x = document.getElementsByClassName("mySlides");
                      var dots = document.getElementsByClassName("demo");
                      if (n > x.length) {slideIndex = 1}
                      if (n < 1) {slideIndex = x.length}
                      for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";  
                      }
                      for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" w3-white", "");
                      }
                      x[slideIndex-1].style.display = "block";  
                      dots[slideIndex-1].className += " w3-white";
                    }

                    (function($) {
                        $(function() {
                          $('nav ul li > a:not(:only-child)').click(function(e) {
                            $(this).siblings('.nav-dropdown').toggle();
                            $('.nav-dropdown').not($(this).siblings()).hide();
                            e.stopPropagation();
                          });
                          $('html').click(function() {
                            $('.nav-dropdown').hide();
                          });
                        });
                        document.querySelector('#nav-toggle').addEventListener('click', function() {
                          this.classList.toggle('active');
                        });
                        $('#nav-toggle').click(function() {
                          $('nav ul').toggle();
                        });
                      })(jQuery);