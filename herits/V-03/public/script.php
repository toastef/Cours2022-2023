<?php
/*declare(strict_types=1);
require_once '../src/User.php';
require_once '../src/Member.php';
require_once '../src/Admin.php';
require_once '../src/SuperAdmin.php';
*/
// fonction  pour l'appel des require_once qui va contenir une fonction anonyme
spl_autoload_register(function($class)
{
    require_once '../src/'.$class.'.php';
});

// impossible d'instancier user car classe abstrraite
// $user01 = new User('stef', 'PARAPAPA');
$admin01 = new Admin('COCO', 'jevais');
$SuperAdmin = new SuperAdmin('stefan','pourquoipas');

echo 'Option admin: <br>';
$admin01->viewRoles();
echo '<hr>';
echo 'Option superadmin: <br>';
$SuperAdmin->viewRoles();

