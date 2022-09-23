<?php
declare(strict_types=1);
require_once '../src/User.php';
require_once '../src/Member.php';
require_once '../src/Admin.php';

$user01 = new User('stef', 'PARAPAPA');
$admin01 = new Admin('COCO', 'jevais');

// le User va voir les article que si ils sont validé
echo "la liste d'article pour user : <br>";
$user01->getArticles();
echo '<br>';

//L'Admin  va voir tous les articles de la liste même si pas validés
$admin01->getArticle();

