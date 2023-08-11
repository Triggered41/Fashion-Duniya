<?php 

include("dbHandler.php");


$name = $_POST['name'];
$password = $_POST['password'];

$sql = "Select * from Customers";

$res = $conn->query($sql);

while ($row = $res->fetch_assoc()){
    if ($name == $row["Name"] && password_verify($password, $row["Password"])){
        echo "<script>alert('Logged in succesfully');</script>";
        echo "<script>console.log('Loggged in');</script>";
        echo "<h3>You will be redirected shortly...</h3>";
        setSession($row['c_id']);
        header("refresh:0.5; url=../index.php");
        exit();
    }
}

function setSession($id){
    session_start();
    $_SESSION['c_id'] = $id;
}
?>