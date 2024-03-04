jQuery(document).ready(
    function () {
    //     //  alert("hello!");
    // // var x = 1; منسوخ شده 
    // // let y = 2;  بهینه شده var قابل تغییر هم هست
    // // const z ="helo!!!";  مثل let فقط نمیشه تغییرش داد 
    // let y = 2; 
    // // jQuery("#username").hide(); انتخاب id 
    // // jQuery("input").hide(); انتخاب یک تگ

    // let username = jQuery("#username");
    // let x = jQuery("input.x")
    // x.hide;
    // jQuery('#submit').click(function (e) { 
    //     e.preventDefault();
    //     jQuery('.alert').after('<input type="hidden" id="hidden" />'); 
        
    // });


// jQuery("#checkbox").change(function () { 
//     // if(this.checked){
//     //     jQuery('body').addClass('night');
//     // }else{
//     //     jQuery('body').removeClass('night');

//     // }
//     jQuery("body").toggleClass("night");
//     jQuery("section").toggleClass("night-derails");
// });



jQuery("#checkbox").change(function () { 
    // if(this.checked){
    //     jQuery('body').addClass('night');
    // }else{
    //     jQuery('body').removeClass('night');

    // }
    // jQuery("body").toggleClass("night");
    // jQuery("section").toggleClass("night-details");

    // localStorage.setItem("test","testlocalstorege");
    // localStorage.clear("test");
    // let x= localStorage.getItem("test");
    // alert(x);
    // console.log(x);
    let data = {
        "night":"night",
        "night-details":"night-details",
    };


    if (this.checked){
    localStorage.setItem("theme_mode",JSON.stringify(data));
    let return_data = localStorage.getItem("theme_mode");
    let class1 = JSON.stringify(return_data).night;
    console.log(JSON.stringify(return_data).night);
    let class2 =  JSON.stringify(return_data).night-details;
    jQuery('body').addClass(class1);
    jQuery('section').addClass(class2);
    }else{
    localStorage.clear("theme_mode");
    jQuery('body').removeClass('night');
    jQuery('section').removeClass('night-details');

    }

    



});
});
