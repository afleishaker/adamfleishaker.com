balanceText();

$(document).ready(function () {
    $(".Header-link").hover( function() {
        $(this).addClass( "animated infinite tada" );
    }, function(){
        $(this).removeClass( "animated infinite tada" );
    });
});