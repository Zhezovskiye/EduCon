$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#to-top').fadeIn();
        $('#whatsapp').fadeIn();
        $('#whatsapp').addClass('opct');
        $('#whatsapp').removeClass('opct1');
    } else {
        $('#to-top').fadeOut();
        $('#whatsapp').fadeOut();
    }
    if ($(this).scrollTop() > $(document).height() - 1000) {
      $('#whatsapp').addClass('opct1');
      $('#whatsapp').removeClass('opct');
    }
});
$('#whatsapp').hover(function () {
  $('#order').fadeIn();
}, function() {
  $('#order').fadeOut();
}
);
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
