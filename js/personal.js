$(document).ready(function () {
    $(".hover-interact").hover( function() {
        $(this).addClass( "animated infinite tada" );
    }, function(){
        $(this).removeClass( "animated infinite tada" );
    });

    $(".navbar-toggler").click( function() {
       $(".nes-drop").text(($(".nes-drop").text() == '»') ? '«' : '»');
    });
});