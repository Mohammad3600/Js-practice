<?php
setcookie("user", "Mohammad", time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<html>
<body>

<?php
if(!isset($_COOKIE["user"])) {
  echo "Cookie named is  not set!";
} else {
  setcookie("user","Nikhil",time() + (86400 * 30));
  setcookie("age",12);
  var_dump($_COOKIE);
  echo "Value is: " . $_COOKIE["user"];
}
?>
</body>
</html>