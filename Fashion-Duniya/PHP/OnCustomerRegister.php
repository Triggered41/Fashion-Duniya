<?php

include("dbHandler.php");

if ($conn->connect_error){
	echo "<h3 style='color:red'>Connnection Error</h3><br>";
}else{
	echo "<h3 style='color:green'>Connnection successfully</h3><br>";
}

$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$contact = $_POST['contact'];
$password = $_POST['password'];

$password = password_hash($password, PASSWORD_BCRYPT);

$sql = "Insert into Customers values('', '$name', '$email', '$address', '$contact', '$password')";
$flag = $conn->query($sql);

if (!$flag){
	echo "<h3 style='color:red'>Query Error</h3><br>";
}else{
	header("Location: ..\HTML\Customer_Login.html");
	exit();
}

?>

