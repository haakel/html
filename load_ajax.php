<?php

$items=[
     [
        "img"=>"assets/img/1.jpg",
        "title"=>"عنوان مقاله 1",
        "desc"=> "این یک متن نمونه برای مقاله آموزشی 1 است."
     ],
     [
        "img"=>"assets/img/2.jpg",
        "title"=>"عنوان مقاله 2",
        "desc"=> "این یک متن نمونه برای مقاله آموزشی 2 است.",
     ],
     [
        "img"=>"assets/img/3.jpg",
        "title"=>"عنوان مقاله 3",
        "desc"=> "این یک متن نمونه برای مقاله آموزشی 3 است."
     ],
     [
        "img"=>"assets/img/4.jpg",
        "title"=>"عنوان مقاله 4",
        "desc"=> "این یک متن نمونه برای مقاله آموزشی 4 است."
     ],
     [
        "img"=>"assets/img/5.jpg",
        "title"=>"عنوان مقاله 5",
        "desc"=> "این یک متن نمونه برای مقاله آموزشی 5 است."
     ],
     [
        "img"=>"assets/img/6.jpg",
        "title"=>"عنوان مقاله 6",
        "desc"=> "این یک متن نمونه برای مقاله آموزشی 6 است."
     ]
     ];
     
     shuffle($items);
    //  var_dump($items);
    $i = 0;
    foreach($items as$item):
    if ($i == 3){break ;}
    ?>
<div class="article-box">
    <img src="<?php echo $item["img"] ?>" alt="" />
    <h2><?php echo $item["title"] ?></h2>
    <p><?php echo $item["desc"] ?></p>
</div>
<?php
$i++;
 endforeach;?>