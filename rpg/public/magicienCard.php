<?php
require_once '../src/Personnage.php';
require_once '../src/Magicien.php';
$magicien1 = new Magicien('Merlin');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="css/magicien.css">
    <title>Document</title>
</head>
<body>

<div class="card">
    <div class="hp-magic">
        <div class="hp"> Hp <p><?php echo $magicien1->getVie(); ?></p></div>
        <div class="mag">Magic <p><?php echo $magicien1->getMagie(); ?></p></div>
    </div>
    <div class="img">
        <img src="pictures/magicien.jpg" alt="magician picture">
    </div>
    <div class="desc" style="margin-left: 15px ;">
        Magician can cast a spell
        Specifications :
        <ul>
            <li>
                degats => - 10 hp
            </li>
            <li>
                magic => +5
            </li>
        </ul>
    </div>
</div>

</body>
</html>

