<?php
require_once 'ExUser.php';
$userex = new ExUser('stef','ddqdihjbguyqxsqxsqxsqx');
echo '<br>';
echo $userex->getPassword();