<?php

$file = $_GET["csv_file"];

$csv = file_get_contents($file);  // chaine de caractères avec toutes les données

$data = array_map("str_getcsv", explode("\n", $csv));  // toutes les lignes à traiter
$nbLg = count($data); // nbre de lignes

$champs = $data[0];  // 1ère ligne reprend les noms des champs

$json = [];  // résultats en json


for ($li = 1; $li < $nbLg; $li++) {
    $json[$li - 1] = [];  // chaque ligne est un tableau
    foreach ($champs as $id => $col) {
        $json[$li - 1][$col] = $data[$li][$id];
    }
}

echo json_encode($json);
