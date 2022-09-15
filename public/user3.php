<?php
require_once '../src/User3.php';
$user = new User3;
$admin = new User3();


$user->setname('stef');
$admin->setName('Arnold');


echo $admin->ban($user);