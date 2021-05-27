var audio = new Audio("https://res.cloudinary.com/ds0fjuvyz/video/upload/v1622047913/audi/mordekaiser_sucumba_estourado_cselyb.mp3");

$('#play-pause-button').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};

function play(){
       var audio = document.getElementById("audio");
audio.play();
}