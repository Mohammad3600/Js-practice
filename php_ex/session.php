<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Set session variables
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.";
var_dump($_SESSION);
?>
<script>
sessionStorage.setItem("lastname", "Smith");
console.log("hii"+sessionStorage.getItem("favcolor"));
</script>

</body>
</html>