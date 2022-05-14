<?php

print "<pre>";
 print_r($_POST);
print "</pre>";

// Если данные отправились в JSON
$_POST = json_decode(file_get_contents('php://input'), true);
print "<pre>";
 print_r($_POST);
print "</pre>";