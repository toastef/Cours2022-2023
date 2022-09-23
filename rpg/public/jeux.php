<?php
spl_autoload_register(function ($class){
    require_once '../src/'.$class.'.php';
});

$apache = new Personnage('Stef');
$druide = new Personnage('Antho');
$guerier = new Guerier('Xena');
$magicien = new Magicien('Gandalph');

echo $apache::GAME_NAME;
echo '<br>';
echo $druide->getVie();
echo '<br>';
echo $druide->getname().': '. $druide->talk('je suis occupé');
echo'<br>';
$druide->findArm('hache');
echo $druide->getArmes();
$druide->findArm('fusil');
echo'<hr>';
echo $druide->getArmes();
echo '<br>';
