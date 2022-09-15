<?php
require_once 'exProduct3.php';
$screen= new exProduct3('ASUS r12', 120,50);

echo 'le prix est de '.$screen->reduce(10).' €  par article HTVA';
echo '<br>';
echo $screen->sell(67);