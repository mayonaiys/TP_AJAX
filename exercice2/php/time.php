<?php
$date =  getdate();
$seconds = $date[seconds];
$minutes = $date[minutes];
$hours = $date[hours];
$string = "Il est :".$hours.":".$minutes.":".$seconds;
$data = array($string,array("hours"=>$hours,"minutes"=>$minutes,"seconds"=>$seconds));
$json = json_encode($data);
?>