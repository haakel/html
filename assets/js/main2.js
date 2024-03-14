jQuery(document).ready(function () {
    // jQuery('span').parent().css("border-color","red");
    // jQuery('span').parents().css("border-color","red");
    jQuery('span').parentsUntil("div").css("border-color","red");
});