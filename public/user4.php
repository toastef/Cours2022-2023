<?php
require_once '../src/User4.php';

$user = new User4('stef', 32);

echo $user->getName().' à '. $user->getold();
