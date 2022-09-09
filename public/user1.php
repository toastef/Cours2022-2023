<?php
require_once '../src/User1.php';

// les instanciations

$user = new User1;
$admin = new User1();


// assignation directement dans les propriétée

$user->name  = 'Jhon Doe';
$admin->name = 'Pat Mar';
echo $user->message();
echo "<p>" . $user->message().' ' .$user->name. " </p>";