<?php

class tools
{
    public static function loading()
    {
        spl_autoload_register(function ($class) {
            require_once '../app/' . $class . '.php';
        });
    }
}