<?php
require "test.php";


$n=$_POST['user_name'] ;
$eid=$_POST['user_email'] ;
$pw=$_POST['password'];

$suppi = "INSERT INTO user (name,email,password) VALUES('$n','$eid','$pw')";
 

if(mysqli_query($conn, $suppi)){
    echo "Records added successfully.";
	header( "refresh:5; url=loginpage.html" );
	
	
} else{
    echo "ERROR: Could not able to execute $suppi. " .mysqli_error($conn);
	header( "refresh:5; url=insert.html" );
}



mysqli_close($conn);
?>