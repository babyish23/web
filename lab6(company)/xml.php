<?php

include "../../../config_test.php";    

$DB_testMain_R = DB_select("testMain");         //DB_select是在config_test.php裡的 寫好的function

//require_once 'login.php';
//$DB_testMain_R = new mysqli($hn, $un, $pw, $db);
if($DB_testMain_R->connect_error) die("Fatal error");     //if DB連不上

$sql = "SELECT * FROM `member` ORDER BY `id` ASC LIMIT 10 " ;  //CAST(`id` AS UNSIGNED)
$result = $DB_testMain_R->query($sql);


$xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$xml.="<serverresponse>";
/*
while($row = $result->fetch_array()){  //next_record()
    $xml.="<user id=\"".$row['id']."\">";  //.$DB_testMain_R->f('id')
    $xml.="<id>".$row['id']."</id>";
    $xml.="<username>".$row['username']."</username>";
    $xml.="</user>";
}
$xml.="</serverresponse>";
*/


while($row = $result->next_record()){  
    $xml.="<user id=\"".$DB_testMain_R->f('id')."\">"; 
    $xml.="<id>".$DB_testMain_R->f('id')."</id>";
    $xml.="<username>".$DB_testMain_R->f('username')."</username>";
    $xml.="</user>";
}
$xml.="</serverresponse>";

header("Content-type: text/xml");
echo $xml;

/*
$DB_testMain_R = DB_select("MAIN");

$sql = "SELECT `id`,`username` FROM members ORDER BY `id` ASC LIMIT 10;";
$DB_testMain_R->query($sql);


$xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$xml.="<serverresponse>";
while($DB_testMain_R->next_record()){
    $xml.="<user id=\"".$DB_testMain_R->f('id')."\">";
    $xml.="<id>".$DB_testMain_R->f('id')."</id>";
    $xml.="<username>".$DB_testMain_R->f('username')."</username>";
    $xml.="</user>";
}
$xml.="</serverresponse>";

*/
?>




