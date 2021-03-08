<?php
$ary = Array();
$ary[0]["Depart"] = "程式";
$ary[0]["Dated"] = "2017-04-25(二)";
$ary[0]["Employee"] = "Arvin";
$ary[0]["Work"] = "09:28:12";
$ary[0]["Getoff"] = "18:38:58";
$ary[0]["Late"] = "0";

$ary[1]["Depart"] = "程式";
$ary[1]["Dated"] = "2017-04-25(二)";
$ary[1]["Employee"] = "Stan";
$ary[1]["Work"] = "09:38:03";
$ary[1]["Getoff"] = "18:55:27";
$ary[1]["Late"] = "8";

$ary[2]["Depart"] = "程式";
$ary[2]["Dated"] = "2017-04-25(二)";
$ary[2]["Employee"] = "Chuck";
$ary[2]["Work"] = "09:20:44";
$ary[2]["Getoff"] = "18:32:55";
$ary[2]["Late"] = "0";


header('Content-Type: application/json');
echo json_encode($ary)
?>