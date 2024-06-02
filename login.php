<?php
// $username = $_POST["username"];
// var_dump($_POST);
// echo"$username";


 // قسمت 3 فصل 7
// if(!empty($_POST["username"])){ 
//   echo  json_encode([
//         "success" => true,
//         "message"=>"login",
//         "status" => 200
//     ]);
// }else{
//   echo  json_encode([
//         "success" => false ,
//         "message"=>"مشکلی در ورود پیش آمده",
//         "status" => 404
//     ]);
// }
if (isset($_POST["action"])&& !empty($_POST["action"]) && function_exists($_POST["action"])){
    switch ($_POST["action"]){
        case "do_login":
            do_login();
                break;
            case "do_register":
                do_register ();
                break;
    }


    
}else{
    echo  json_encode([
        "success" => false ,
        "message"=>"خطایی رخ داده است ",
        "status" => 404
    ]);
}
 // قسمت 4 فصل 7
function do_login() {
    //login

    if(!empty($_POST["username"])){ 
  echo  json_encode([
        "success" => true,
        "message"=>"ورود موفقیت آمیز بوده است",
        "status" => 200
    ]);
}else{
  echo  json_encode([
        "success" => false ,
        "message"=>"مشکلی در ورود پیش آمده",
        "status" => 404
    ]);
}
};
function do_register() {
    //login

    if(!empty($_POST["username"])){ 
  echo  json_encode([
        "success" => true,
        "message"=>"ثبت نام موفقیت آمیز بوده است ",
        "status" => 200
    ]);
}else{
  echo  json_encode([
        "success" => false ,
        "message"=>"مشکلی در ثبت نام پیش آمده",
        "status" => 404
    ]);
}
};


?>