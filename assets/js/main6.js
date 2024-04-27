let j = jQuery.noConflict();

j(document).ready(function () {
   j('#login-form').on('submit',function(e){
    e.preventDefault();
    let el = j(this);
    let loader =j(".loading");
    let btn_submit =j("#submit");
    // alert("test");
    let username = j("#username").val();
    let passsword = j("#passsword").val();
    // console.log(username);

    // let csrf = j("#login-form").data("csrf");
    let csrf = el.data("csrf");
    // console.log(csrf);
    j.ajax({
        url:"login.php",
        type:"POST",
        // dataType:JSON,
        data:{
            action:"userlogin",
            username : username,
            password : passsword,
            csrf : csrf
        },
        beforeSend : function(){
            loader.show();
            btn_submit.text("در حال ارسال ....");
        }, 
        success : function(response){
            alert("ورود شما موفقیت آمیز بوده است!");
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

 


  