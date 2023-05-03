function toggleMode(dark, storage) {
    if(dark) {
        document.documentElement.setAttribute('data-color-mode', 'light');
        document.documentElement.setAttribute('data-light-theme', 'light');
        document.getElementById('toggle-icon').setAttribute('icon', 'fluent-emoji:crescent-moon');
        if(storage) {
            localStorage.theme = 'light';
        }
    } else {
        document.documentElement.setAttribute('data-color-mode', 'dark');
        document.documentElement.setAttribute('data-dark-theme', 'dark');
        document.getElementById('toggle-icon').setAttribute('icon', 'fluent-emoji:sun');
        if(storage) {
            localStorage.theme = 'dark';
        }
    }
}
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggleMode(false, false);
}
document.getElementById('toggle').onclick = function() {
    if(document.documentElement.getAttribute('data-color-mode') === 'dark') {
        toggleMode(true, true);
    } else {
        toggleMode(false, true);
    }
};
balanceText();

$(document).ready(function () {
    $("i, .Header-link").hover( function() {
        $(this).addClass( "animated infinite tada" );
    }, function(){
        $(this).removeClass( "animated infinite tada" );
    });
});