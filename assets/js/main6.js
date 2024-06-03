let j = jQuery.noConflict();

// j(document).ready(function () {
//    j('#login-form').on('submit',function(e){
//     e.preventDefault();
//     let el = j(this);
//     let loader =j(".loading");
//     let btn_submit =j("#submit");
//     // alert("test");
//     let username = j("#username").val();
//     let passsword = j("#passsword").val();
//     // console.log(username);

//     // let csrf = j("#login-form").data("csrf");
//     let csrf = el.data("csrf");
//     // console.log(csrf);
//     j.ajax({
//         url:"login.php",
//         type:"POST",
//         // dataType:JSON,   
//         data:{
//             action:"do_register",
//             username : username,
//             password : passsword,
//             csrf : csrf
//         },
//         beforeSend : function(){
//             loader.show();
//             btn_submit.text("در حال ارسال ....");
//         }, 
//         success : function(response){
//             // alert("ورود شما موفقیت آمیز بوده است!");

//             let jsonData = JSON.parse(response);
//             // alert(jsonData);
//             if(jsonData.success == true){
//             // alert(jsonData.message);
//             j.toast({
//                 text: jsonData.message, // Text that is to be shown in the toast
//                 heading: 'Note', // Optional heading to be shown on the toast
//                 icon: 'success', // Type of toast icon
//                 showHideTransition: 'slide', // fade, slide or plain
//                 allowToastClose: true, // Boolean value true or false
//                 hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
//                 stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
//                 position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                
                
                
//                 textAlign: 'left',  // Text alignment i.e. left, right or center
//                 loader: true,  // Whether to show loader or not. True by default
//                 loaderBg: '#ffffff',  // Background color of the toast loader
//             });
//             }else{
//                 j.toast({
//                     text: jsonData.message, // Text that is to be shown in the toast
//                     heading: 'Note', // Optional heading to be shown on the toast
//                     icon: 'error', // Type of toast icon
//                     showHideTransition: 'slide', // fade, slide or plain
//                     allowToastClose: true, // Boolean value true or false
//                     hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
//                     stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
//                     position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                    
                    
                    
//                     textAlign: 'left',  // Text alignment i.e. left, right or center
//                     loader: true,  // Whether to show loader or not. True by default
//                     loaderBg: '#ffffff',  // Background color of the toast loader
//                 });
//             }

//         }, 
//         error : function(error){
//             alert("خطایی در ورود شما رخ داده است !");
//         },
//         complete : function(){
//             loader.hide();
//             btn_submit.text("ورود");

//         },


//     });
//    })
// });

 
// فصل 7 قسمت 5 

j(document).ready(function () {
    j('#login-form').on('submit',function(e){
     e.preventDefault();
     let el = j(this);
     let loader =j(".loading");
     let btn_submit =j("#submit");
    let form_data = el.serialize();
    // console.log(form_data);
    
    // let action = "do_login"
    let action = "do_register"
     j.ajax({
         url:"login.php",
         type:"POST",
         // dataType:JSON,   
         data: form_data+"&action="+action,
         beforeSend : function(){
             loader.show();
             btn_submit.text("در حال ارسال ....");
         }, 
         success : function(response){
             // alert("ورود شما موفقیت آمیز بوده است!");
 
             let jsonData = JSON.parse(response);
             // alert(jsonData);
             if(jsonData.success == true){
             // alert(jsonData.message);
             j.toast({
                 text: jsonData.message, // Text that is to be shown in the toast
                 heading: 'Note', // Optional heading to be shown on the toast
                 icon: 'success', // Type of toast icon
                 showHideTransition: 'slide', // fade, slide or plain
                 allowToastClose: true, // Boolean value true or false
                 hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                 stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                 position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                 
                 
                 
                 textAlign: 'left',  // Text alignment i.e. left, right or center
                 loader: true,  // Whether to show loader or not. True by default
                 loaderBg: '#ffffff',  // Background color of the toast loader
             });
             }else{
                 j.toast({
                     text: jsonData.message, // Text that is to be shown in the toast
                     heading: 'Note', // Optional heading to be shown on the toast
                     icon: 'error', // Type of toast icon
                     showHideTransition: 'slide', // fade, slide or plain
                     allowToastClose: true, // Boolean value true or false
                     hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                     stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                     position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                     
                     
                     
                     textAlign: 'left',  // Text alignment i.e. left, right or center
                     loader: true,  // Whether to show loader or not. True by default
                     loaderBg: '#ffffff',  // Background color of the toast loader
                 });
             }
 
         }, 
         error : function(error){
             alert("خطایی در ورود شما رخ داده است !");
         },
         complete : function(){
             loader.hide();
             btn_submit.text("ورود");
 
         },
 
 
     });
    })
 });
 

  