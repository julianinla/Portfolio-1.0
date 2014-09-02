$('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });

// var bgmusic = new Audio('srcfile.wav');
// window.onload=function {
//     bgmusic.play();
// }