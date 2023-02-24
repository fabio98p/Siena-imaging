<?php

if(array_key_exists('button1', $_POST)) {
    add();
}
else if(array_key_exists('button2', $_POST)) {
    remove();
}
function add(){
    echo "+";
}
function remove(){
    echo "-";
}
for ($x = 0; $x <= 5; $x++) {
    echo "<h1>php: $x </h1><br>";
}
?>
