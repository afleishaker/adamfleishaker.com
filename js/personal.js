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
        $(".style-button").attr("src", "/assets/moderntoggle.png");
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
            $(".heart").addClass("bi bi-heartbreak")
        }

        $(".nav-github").removeClass("nes-icon github")
        $(".nav-github").addClass("bi bi-github")

        $(".nav-linkedin").removeClass("nes-icon linkedin")
        $(".nav-linkedin").addClass("bi bi-linkedin")

        $(".nav-resume").removeClass("nes-icon resume-file")
        $(".nav-resume").addClass("bi bi-file-earmark-richtext-fill")
    } else {
        $("body").attr("style", "font-family: 'hydrophilia-iced'!important");
        $(".style-button").attr("src", "/assets/retrotoggle.png");
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
            $(".heart").removeClass("bi bi-heartbreak")
        }

        $(".nav-github").addClass("nes-icon github")
        $(".nav-github").removeClass("bi bi-github")

        $(".nav-linkedin").addClass("nes-icon linkedin")
        $(".nav-linkedin").removeClass("bi bi-linkedin")

        $(".nav-resume").addClass("nes-icon resume-file")
        $(".nav-resume").removeClass("bi bi-file-earmark-richtext-fill")
    }
}