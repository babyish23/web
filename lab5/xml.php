<?php
$ary = Array();
$ary[0]["Depart"]= "程式";
$ary[0]["Date"] = "2017-04-25(二)";
$ary[0]["Employee"] = "Arvin";
$ary[0]["Work"] = "09:28:12";
$ary[0]["Getoff"] = "18:38:58";
$ary[0]["Late"] = "0";

$ary[1]["Depart"] = "程式";
$ary[1]["Date"] = "2017-04-25(二)";
$ary[1]["Employee"] = "Stan";
$ary[1]["Work"] = "09:38:03";
$ary[1]["Getoff"] = "18:55:27";
$ary[1]["Late"] = "8";

$ary[2]["Depart"] = "程式";
$ary[2]["Date"] = "2017-04-25(二)";
$ary[2]["Employee"] = "Chuck";
$ary[2]["Work"] = "09:20:44";
$ary[2]["Getoff"] = "18:32:55";
$ary[2]["Late"] = "0";


$xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$xml.="<serverresponse1>";


for($i=0; $i<sizeof($ary); $i++){                                  //多串一個層級 ex:PersonalInfo
    $xml.="<Depart>".$ary[$i]["Depart"]."</Depart>";    //可以更好做維護 
    $xml.="<Date>".$ary[$i]["Date"]."</Date>";
    $xml.="<Employee>".$ary[$i]["Employee"]."</Employee>";
    $xml.="<Work>".$ary[$i]["Work"]."</Work>";
    $xml.="<Getoff>".$ary[$i]["Getoff"]."</Getoff>";
    $xml.="<Late>".$ary[$i]["Late"]."</Late>";
}
/*
for($i=0; $i<sizeof($ary); $i++){                                  //多串一個層級 ex:PersonalInfo
    $xml.="<PersonalInfo">.$i.;
    $xml.="<Depart>".$ary[$i]["Depart"]."</Depart>";    
    $xml.="<Date>".$ary[$i]["Date"]."</Date>";
    $xml.="<Employee>".$ary[$i]["Employee"]."</Employee>";
    $xml.="<Work>".$ary[$i]["Work"]."</Work>";
    $xml.="<Getoff>".$ary[$i]["Getoff"]."</Getoff>";
    $xml.="<Late>".$ary[$i]["Late"]."</Late>";
    $xml.="</PersonalInfo">;
}
*/


$xml.="</serverresponse1>";

header("Content-type: text/xml");
echo $xml;


?>