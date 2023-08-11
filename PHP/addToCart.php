<?php 

if (isset($_POST)){
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);


    include("dbHandler.php");
    $arr;
    $arr['user'] = $user["dressname"];
    $arr['price'] = $user["dressPrice"];
    $arr['info'] = $user["dressInfo"];
    $arr['path'] = $user["dressPath"];

    $sql = "Insert into Customers valu"
    json_encode($arr); 

}

?>