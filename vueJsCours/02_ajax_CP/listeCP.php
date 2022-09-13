<?php

$pdo = new PDO(
  'mysql:host=localhost; dbname=codespostaux; charset=utf8',
  'root',
  ''
);

$statement= $pdo->prepare(
  "SELECT * FROM belgique"
);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($result);

echo $json;
