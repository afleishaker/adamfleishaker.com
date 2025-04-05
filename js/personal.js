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
        $(".return-button").removeClass("nes-btn")
        $(".return-button").addClass("btn btn-outline-dark")

        if ($(".profile-avatar").hasClass("finished-typing")) {
            $(".profile-avatar").attr("src","/assets/adamsmilemodern.gif");
        } else {
            $(".profile-avatar").attr("src","/assets/adamtalkmodern.gif");
        }

        if ($('.heart').length) {
            $(".heart").removeClass("nes-icon")
            $(".heart").addClass("bi bi-heartbreak")
        }

        if ($(".adam-nav").hasClass("adam-walk")) {
            $(".adam-nav").removeClass("adam-walk")
            $(".adam-nav").addClass("adam-walk-modern")
        }

        if ($(".adam-nav").hasClass("adam-celebrate")) {
            $(".adam-nav").removeClass("adam-celebrate")
            $(".adam-nav").addClass("adam-celebrate-modern")
        }

        if ($(".adam-nav").hasClass("adam-graduate")) {
            $(".adam-nav").removeClass("adam-graduate")
            $(".adam-nav").addClass("adam-graduate-modern")
        }

        $(".theme-icon").attr("src", "/assets/toggle.svg");
        $(".github-icon").attr("src", "/assets/github.svg");
        $(".linkedin-icon").attr("src", "/assets/linkedin.svg");
        $(".resume-icon").attr("src", "/assets/resume.svg");
    } else {
        $("body").attr("style", "font-family: 'hydrophilia-iced'!important");
        $(".return-button").addClass("nes-btn")
        $(".return-button").removeClass("btn btn-outline-dark")


        if ($(".profile-avatar").hasClass("finished-typing")) {
            $(".profile-avatar").attr("src","/assets/adamsmile.gif");
        } else {
            $(".profile-avatar").attr("src","/assets/adamtalk.gif");
        }

        if ($('.heart').length) {
            $(".heart").addClass("nes-icon")
            $(".heart").removeClass("bi bi-heartbreak")
        }

        if ($(".adam-nav").hasClass("adam-walk-modern")) {
            $(".adam-nav").removeClass("adam-walk-modern")
            $(".adam-nav").addClass("adam-walk")
        }

        if ($(".adam-nav").hasClass("adam-celebrate-modern")) {
            $(".adam-nav").removeClass("adam-celebrate-modern")
            $(".adam-nav").addClass("adam-celebrate")
        }

        if ($(".adam-nav").hasClass("adam-graduate-modern")) {
            $(".adam-nav").removeClass("adam-graduate-modern")
            $(".adam-nav").addClass("adam-graduate")
        }

        $(".theme-icon").attr("src", "/assets/togglepixel.svg");
        $(".github-icon").attr("src", "/assets/githubpixel.svg");
        $(".linkedin-icon").attr("src", "/assets/linkedinpixel.svg");
        $(".resume-icon").attr("src", "/assets/resumepixel.svg");
    }
}