<?php

/*include "../../../config_test.php";

$DB_testMain_R = DB_select("testMain");*/

//帳號 roy123 pwd:a12345

require_once 'login.php';
$DB_testMain_R = new mysqli($hn, $un, $pw, $db);
if($DB_testMain_R->connect_error) die("Fatal error");     //DB連不上


$loginAccount = $_POST['account'];
$loginPassword = $_POST['pwd'];

//$sql = "SELECT * FROM 'members' WHERE passwd_safe=$loginAccount";
//console.log($sql);



$sql = "SELECT * FROM `member` WHERE passwd_safe= '$loginAccount'" ;
$result = $DB_testMain_R->query($sql);


if(!$result)    die("DB access failed");

//$row = $result->num_rows;  取DB的row數

/*
for($i=0; $i<$row; ++$i){
    $rows = $result->fetch_array();
    echo $rows[1];
}*/

$rows = $result->fetch_array();

//study 
//fetch_row 後面是[0] [1] [2]
//fetch_assoc 後面['KEY'] 直接找KEY
//fetch_array ['KEY']也可以拿值

if($loginAccount==$rows['passwd_safe'] && $loginPassword==$rows['passwd']){
    echo "登入成功"; 
    //header("Location:https://www.google.com/");
}
else{
    echo "Wrong Account or Password !";
}

?>