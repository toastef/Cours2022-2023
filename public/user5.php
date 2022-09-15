<?php
require_once '../src/User5.php';

$user = new User5('stef', 32, 'etudiant');
$admin = new User5 ('Franc',40, 'prof');

echo $user->getName().' à '. $user->getold().' ans qui est inscrit à '. user5::SCHOOL_NAME.' en tant que '. $user->getJob() .' pour un montant de '. $user->getSubscription(). '€ ';
echo '<br>';
echo $admin->getName().' à '. $admin->getold().' ans et est inscrit à '. user5::SCHOOL_NAME.' en tant que '. $admin->getJob() .' pour un montant de '. $admin->getSubscription(). '€.';