<?php
namespace Html;
class Table {
  public $title = "";
  public $numRows = 0;
  public function message() {
    echo "<p>Table '{$this->title}' has {$this->numRows} rows.</p>";
  }
}
$table = new Table();
$table->title = "My table";
$table->numRows = 5;
?>
<?php
namespace Scr;
class Table {
  public $title = "";
  public $numRows = 0;
  public function message() {
    echo "<p>Table '{$this->title}' has {$this->numRows} columns.</p>";
  }
}
$table = new Table();
$table->title = "My table";
$table->numRows = 5;
?>
<!DOCTYPE html>
<html>
<body>

<?php
use Html;
use Scr;
$table = new Html\Table();
$table->title = "My table";
$table->numRows = 5;
$table->message();
$table = new Scr\Table();
$table->title = "My table";
$table->numRows = 5;
$table->message();
?>

</body>
</html>