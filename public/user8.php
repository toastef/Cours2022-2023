<?php
require_once '../src/User8.php';

$superAdmin = new User8('Vincent Vega');
$user1 = new User8('John Doe');
$admin = new User8('Pat Mar');
$user2 = new User8('Dom Servais');


$admin->setBan($user2->getName());
$admin->setBan($user1->getName());

echo "Liste des bannis ".$admin->getname()." <br> " . User8::getBan();
echo '<br>';
echo "Liste des bannis ".$superAdmin->getname()." <br> " . User8::getBan();

echo '<br>';
$admin->setWebsite('IEPSCF');
echo $admin->getWebsite();