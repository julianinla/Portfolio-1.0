$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	var current, playlist;
	current = 0;

function loadplaylist() {
         current++;
         var songs = Array("../Portfolio 1.0/music/charliebrown.m4a", "../Portfolio 1.0/music/dontpanic.mp3", "../Portfolio 1.0/music/lifeintechnicolor.m4a", "../Portfolio 1.0/music/askyfullofstars.m4a", '../Portfolio 1.0/music/magic.m4a');
         playlist = songs.length;
         if (current == playlist) {
           //do nothing or stop
         } else {
           this.playOptions = document.getElementById("audio");
           this.playOptions.src = songs[current];
           this.playOptions.play();
         }
     }

$('.carousel').carousel({
  interval: 5000
})