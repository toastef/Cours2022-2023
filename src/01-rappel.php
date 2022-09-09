<?php
// instanciation de la classe DateTimeImmutable
$date = new DateTimeImmutable();  // la variable $date est devenu un objet

// var_dump($date);
// invocation de la methode format de la classe DateTimeImmutable
// la fleche est un opérateur qui indique d'executer la methode format sur $date
echo $date->format('d/m/Y');


$dbh= new PDO('mysql:host=localhost; dbname=travel;charset=utf8','root','');


$dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$querry = "SELECT * FROM company ";

$stmt = $dbh->prepare($querry);
$result = $stmt->execute();
$result = $stmt->fetchAll();

echo '<br>';
foreach ($result as $res){
    echo $res->name .'<br>';
}