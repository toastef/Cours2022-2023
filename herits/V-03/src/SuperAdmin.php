<?php
declare(strict_types=1);

/*Un superadmin possède une action (validation en plus : supprimer un article )
*/
 class SuperAdmin extends Admin
{
    public function __construct(string $name, string $password)
    {
        parent::__construct($name, $password);
    }


    /** va hériter de la methode que l'on va modifier
     * @return void
     */
    public function viewRoles(): void
    {
        parent::viewRoles();
        echo "<br>Supprimer un article" ;
    }
}