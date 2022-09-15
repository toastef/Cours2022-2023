<?php
require_once '../src/User2.php';

$user = new User2;
$admin = new User2;

$admin->setName('Arnold');
$user->setName('stef');
echo $user->message();

