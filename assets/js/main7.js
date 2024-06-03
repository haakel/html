
let j = jQuery.noConflict();

j(document).ready(function () {
    j('.refresh-button').on('click',function(e){
     e.preventDefault();
     let el = j(this);
     let loader =j(".loading");
     j(document).ajaxStart(function(){
        loader.show();
     });
    j(".articles").load("load_ajax.php")
    })
    j(document).ajaxComplete(function(){
        loader.hide();
     });
 });