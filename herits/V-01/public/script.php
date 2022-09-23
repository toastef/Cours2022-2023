<?php
declare(strict_types=1);
require_once '../src/User.php';
require_once '../src/Member.php';
require_once '../src/Admin.php';

// Instanciation classe fille
$user01 = new Member('stef', 'azerty', 100);
$admin1 = new Admin('Jean', 'TOTO');


echo $user01->spend(15);
echo '<br>';
$user01->setPassword('valeur13456');
echo $user01->getPassword();
echo '<br>';
$admin1->viewRoles();