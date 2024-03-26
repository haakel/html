let j = jQuery.noConflict();
j(document).ready(function () {
    let slidecount = j('#slider ul li').length;
    let slidewidth = j('#slider ul li').width();
    let slideheight = j('#slider ul li').height();
    let slideulwidth = slidecount * slidewidth;
    // میاد 4 تا تصویر که به هم چسیبدن رو با توجه به اندازه تصویر که باید حد مشخصی باشه ، جدا میکنه به صورتی که صرفا یک تصویر نشون داده بشه ، بگو خب
    // j("#slider").css({
    //     width : slidewidth,
    //     height : slideheight
    // });
        j("#slider").css({
        width : slidewidth,
        height : slideheight
        });
    // j('#slider ul').css({
    //     width:slideulwidth,
    //     marginRight:-slidewidth
    // } );
    // j('#slider ul li:last-child').prependTo('#slider ul'); 
    function moveright(){
    // j("#slider ul").animate({
    //     // left: -slidewidth
    //     opacity:0
    // },1000,function(){
    // j('#slider ul li:last-child').prependTo('#slider ul');
    // j('#slider ul li:last-child').next().css('opacity','1');
    // j('#slider ul').css('opacity','1');
    // });
    // j('#slider ul li:last-child').css('opacity','1',
    // 1000,function(){
    //     j("#slider ul").animate({
    //         // left: -slidewidth
    //         opacity:0
    //     });
    //     j('#slider ul li:last-child').prependTo('#slider ul');
    // }
    // );

    // j('#slider ul li:last-child').prependTo('#slider ul');
    // alert("test");
    let currentSlide = j('#slider ul li.active');
    let nextSlide = currentSlide.next('li');

    if (nextSlide.length === 0) {
        nextSlide = j('#slider ul li:first-child');
    }

    currentSlide.removeClass('active');
    nextSlide.addClass('active');
  

    }
    j("a.control_next").click(function(){
        moveright(); 
    });

    function moveleft(){

        j("#slider ul").animate({
            // left: +slidewidth
            opacity:1
        },1000,function(){
        j('#slider ul li:first-child').prependTo('#slider ul');
        // j('#slider ul').css('left','');
        j('#slider ul li:first-child').css('opacity','0');
        });
        // j('#slider ul li:last-child').css("border-color","#28ff2c");

        // j('#slider ul li:first-child').next().prependTo('#slider ul');
        // alert("test");
        
        }
        j("a.control_prev").click(function(){
            moveleft(); 
        });
});