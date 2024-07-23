<!-- не используется -->
<?php 
  $serverName = 'localhost';
  $userName = 'root';
  $password = '';
  $dbName = 'registerUser';

  $conn = mysqli_connect($server, $userName, $password, $dbName);

  if(!conn) die("Connection failed".mysqli_connect_error());
  else echo 'Success';
?>