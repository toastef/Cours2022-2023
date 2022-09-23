<?php
declare(strict_types=1);
require_once '../src/User6.php';

$superAdmin = new User6('Vincent Vega');
$user1 = new User6('John Doe');
$admin = new User6('Pat Mar');
$user2 = new User6('Dom Servais');


$admin->setBan($user2->getName());
$admin->setBan($user1->getName());

echo "Liste des bannis <br> " . $admin->getBan();

var_dump($superAdmin) ;