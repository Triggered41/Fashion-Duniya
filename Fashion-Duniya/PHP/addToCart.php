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

    $js = json_encode($arr);
    session_start();
    $id = $_SESSION["c_id"];
    $sql = "Insert into cart values('','$id','$js')";
    $flag = $conn->query($sql);

    if($flag){
        echo "sadas";
        // $res = $conn->query("Select * from cart");
        // while ($row = $res->fetch_assoc()){
        //     echo $row['p_id'];.$row['c_id'].$row['item'];
    }else{
        echo "Fail";
    }

}

?>