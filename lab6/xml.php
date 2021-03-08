<?php

//include "../../../config_test.php";    

//$DB_testMain_R = DB_select("testMain");         //DB_select是在config_test.php裡的 寫好的function

require_once 'login.php';
$DB_testMain_R = new mysqli($hn, $un, $pw, $db);
if($DB_testMain_R->connect_error) die("Fatal error");     //if DB連不上

$sql = "SELECT * FROM `member` ORDER BY `id` ASC LIMIT 10 " ;
$result = $DB_testMain_R->query($sql);


$xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$xml.="<serverresponse>";
while($row = $result->fetch_array()){
    $xml.="<user id=\"".$row['id']."\">";
    $xml.="<id>".$row['id']."</id>";
    $xml.="<username>".$row['passwd_safe']."</username>";
    $xml.="</user>";
}
$xml.="</serverresponse>";

header("Content-type: text/xml");
echo $xml;
?>