<?php
		 require "test.php";
		 session_start();
		 
		 $user=$_POST['email'];
		 $pass=$_POST['password'];
		 $_SESSION['name'] = $user;
		 
		 $sql="select * from user where email='$user' and password='$pass'";
		 
		 $result=mysqli_query($conn,$sql);
		 $check=mysqli_fetch_array($result);
		 if(isset($check)){
		 echo '("login successfull")';
		 header('refresh:1;url=index.html');
		}
		else{
		echo '("invalid login")';
		 header('refresh:1;url=login.html');
		 }
		 mysqli_close($conn);
		 ?>
		 