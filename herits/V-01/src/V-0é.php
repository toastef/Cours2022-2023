<?php
// classe fille de User

declare(strict_types=1);
/*
 * un admin peut visualiser ses action de type CRUD
 */
class Admin extends User
{
    /**
     * @param string $name
     * @param string $password
     */
    public function __construct(string $name, string $password)
    {
        parent::__construct($name, $password);
    }


    /**
     * @return void
     */
    public function viewRoles(): void
    {
        echo 'Ajouter <br> Modifier';
    }
}

