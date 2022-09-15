<?php

require_once 'Strict.php';

$productPrice = new Strict(4.5);

    echo $productPrice->getPrice();