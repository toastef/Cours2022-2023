<?php
require_once '../src/User7.php';

$superAdmin = new User7('Vincent Vega');
$user1 = new User7('John Doe');
$admin = new User7('Pat Mar');
$user2 = new User7('Dom Servais');


$admin->setBan($user2->getName());
$admin->setBan($user1->getName());

echo "Liste des bannis ".$admin->getname()." <br> " . $admin->getBan();
echo '<br>';
echo "Liste des bannis ".$superAdmin->getname()." <br> " . $superAdmin->getBan();

echo '<br>';
$admin->setWebsite('IEPSCF');
 echo $admin->getWebsite();