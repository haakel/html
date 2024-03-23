let j = jQuery.noConflict();
j(document).ready(function () {
    j(window).scroll(function () { 
        var position = j(this).scrollTop();
        j("html").css("scroll-behavior","smooth");
        if (position > 200){
            j(".scrolltop").addClass("show");
        }else{
            j(".scrolltop").removeClass("show");
        }
    });
}); 