$(document).ready(function () {
    $(".hover-interact").hover( function() {
        $(this).addClass( "animated infinite tada" );
    }, function(){
        $(this).removeClass( "animated infinite tada" );
    });

    updateDisplayAesthetic(localStorage.getItem("displayModern"));

    $(".style-button").click(function() {
         if (localStorage.getItem("displayModern") == "true") {
            localStorage.setItem("displayModern", "false");
         } else {
            localStorage.setItem("displayModern", "true");
         }

         updateDisplayAesthetic(localStorage.getItem("displayModern"));
     });
});

function updateDisplayAesthetic(isModern) {
    if (isModern == "true"){
        $("body").attr("style", "font-family: 'hydrophilia-liquid'!important");
        $(".style-button").attr("src", "/assets/modernblock.svg");
        $(".return-button").removeClass("nes-btn")
        $(".return-button").addClass("btn btn-outline-dark")

        if ($(".profile-avatar").hasClass("finished-typing")) {
            $(".profile-avatar").attr("src","/assets/adamsmilemodern.gif");
        } else {
            $(".profile-avatar").attr("src","/assets/adamtalkmodern.gif");
        }

        if ($('.heart').length) {
            $(".adam-ko").removeClass("missing-link")

            $(".heart").removeClass("nes-icon")
            $(".heart").addClass("fa-duotone fa-regular fa-heart-crack")
        }

        $(".nav-github").removeClass("nes-icon github")
        $(".nav-github").addClass("fa-brands fa-github")

        $(".nav-linkedin").removeClass("nes-icon linkedin")
        $(".nav-linkedin").addClass("fa-brands fa-linkedin")

        $(".nav-resume").removeClass("nes-icon resume-file")
        $(".nav-resume").addClass("fa-duotone fa-regular fa-file-lines")
    } else {
        $("body").attr("style", "font-family: 'hydrophilia-iced'!important");
        $(".style-button").attr("src", "/assets/retroblock.gif");
        $(".return-button").addClass("nes-btn")
        $(".return-button").removeClass("btn btn-outline-dark")


        if ($(".profile-avatar").hasClass("finished-typing")) {
            $(".profile-avatar").attr("src","/assets/adamsmile.gif");
        } else {
            $(".profile-avatar").attr("src","/assets/adamtalk.gif");
        }

        if ($('.heart').length) {
            $(".adam-ko").addClass("missing-link")

            $(".heart").addClass("nes-icon")
            $(".heart").removeClass("fa-duotone fa-regular fa-heart-crack")
        }

        $(".nav-github").addClass("nes-icon github")
        $(".nav-github").removeClass("fa-brands fa-github")

        $(".nav-linkedin").addClass("nes-icon linkedin")
        $(".nav-linkedin").removeClass("fa-brands fa-linkedin")

        $(".nav-resume").addClass("nes-icon resume-file")
        $(".nav-resume").removeClass("fa-duotone fa-regular fa-file-lines")
    }
}