<?php

$pdo = new PDO(
  'mysql:host=localhost; dbname=paysmonde; charset=utf8',
  'root',
  ''
);

$statement= $pdo->prepare(
  "SELECT * FROM pays"
);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);
//echo "coucou";

$json = json_encode($result);

echo $json;
