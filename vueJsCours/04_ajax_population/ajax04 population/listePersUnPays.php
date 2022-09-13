<?php
$pays = $_GET['pays'];

$pdo = new PDO(
  'mysql:host=localhost; dbname=population2021; charset=utf8',
  'root',
  ''
);

$statement = $pdo->prepare("SELECT * FROM personnes WHERE paysP= :pays");
$statement->execute([':pays' => $pays]);

$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);

echo $json;
