<?php
// classe fille de User

declare(strict_types=1);
/*
 * un admin possède 2 roles deux action ( viewRoles et Ajouter et Modifier )
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
        echo 'Ajouter un articles <br> Modifier un article';
    }

    /**
     * @return void
     */
    public function getArticle(){
        foreach(self::$articles as $article =>$key){
            echo $article .'<br>';
        }
    }
}

