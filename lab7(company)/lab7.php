<?php

/*include "../../config_test.php";

$DB_testMain_R = DB_select("testMain");*/     //testMain連不上 用MAIN去連

//帳號 roy123 pwd:a12345

require_once 'login.php';
$DB_testMain_R = new mysqli($hn, $un, $pw, $db);
if($DB_testMain_R->connect_error) die("Fatal error");     //if DB連不上


$loginAccount = $_POST['account'];
$loginPassword = $_POST['pwd'];

//$sql = "SELECT * FROM 'members' WHERE passwd_safe=$loginAccount";
//console.log($sql);



$sql = "SELECT * FROM `member` WHERE passwd_safe= '$loginAccount' AND passwd='$loginPassword'" ;
$result = $DB_testMain_R->query($sql);      //若是用config_test.php裡面的DB_select 那麼此處的$DB_testMain_R->query($sql)
                                            //將會是特殊自創寫出的用法 不能接著 $rows = $result->fetch_array(); 會出錯
                                            //使用$DB_testMain_R->next_record()來取fetch該data的位址（ex:id)
                                            //然後用$DB_testMain_R->f('tag') 來拿到特定tag的data

if(!$result){    //die("DB access failed");
    alert("帳號或密碼錯誤");
    include("./index.html");
}

$arrayID= array();
$arrayUsrname = array();
while($DB_testMain_R->next_record()){
    array_push($arrayID, $DB_testMain_R->f('id'));
    array_push($arrayUsrname, $DB_testMain_R->f('username'));
}

for($i=0; $i<sizeof($arrayID); ++$i){
    echo "id : " . $arrayID[$i] . " username : " . $arrayUsrname[$i];
}


//$row = $result->num_rows;  取DB的row數

/*
for($i=0; $i<$row; ++$i){
    $rows = $result->fetch_array();
    echo $rows[1];
}*/

//$rows = $result->fetch_array();

//study 
//fetch_row 後面是[0] [1] [2]
//fetch_assoc 後面['KEY'] 直接找KEY
//fetch_array ['KEY']也可以拿值

/*
if($loginAccount==$rows['passwd_safe'] && $loginPassword==$rows['passwd']){
    echo "登入成功"; 
    //header("Location:https://www.google.com/");
}
else{
    echo "Wrong Account or Password !";
}
*/

?>