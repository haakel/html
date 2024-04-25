let j = jQuery.noConflict;

j(document).ready(function () {
   j('#login-form').on('submit',function(e){
    e.preventDefault();
    // alert("test");
    let username = j("#username").val();
    let passsword = j("#passsword").val();
    // console.log(username);

    // try this here
    let csrf = j("#login-form").data("csrf");
    console.log(csrf);

   })
});