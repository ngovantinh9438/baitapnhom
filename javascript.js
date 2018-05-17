$(document).ready(function(){
    $('video').click(function(){
        $('.my-btn-play').toggle();
        (this).paused ? (this).play() : (this).pause();
        
    });
});