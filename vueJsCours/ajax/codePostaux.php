<?php
$pdo = new PDO('mysql:host=localhost; dbname=codespostaux; charset=utf8', 'root','root');

$statement = $pdo->prepare("SELECT * FROM belgique");
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($result); // création d'un tab objet

echo $json;
