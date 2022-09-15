<?php
require_once 'exProduct1.php';
$screen= new exProduct1('ASUS r12', 120,50);

echo 'le prix réduit est de '.$screen->reduce(10).' €';
echo '<br>';
echo $screen->sell(3);