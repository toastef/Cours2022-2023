<?php
require_once '../src/User2.php';
$user = new User2;


$user->setName('stefan');
$user->setOld(32);

echo $user->getname().' à '. $user->getOld();