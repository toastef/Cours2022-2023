<?php
// classe mere , principale
declare(strict_types=1);
/*
 *Un User ne poura jamais etre iunstancier il faudra passer par les objets des classe admin et superadmin. Va servir juste de base pour les autres classes
 */
 abstract class User
{
    private string $name;
    protected string $password;
    protected static $articles = [
        'Symfony 6' => true,
        'PHP 8.2' => false,
        'CSS 03' => true,
        'HTML 05' => false
    ];


    public function __construct(string $name, string $password)
    {
        $this->name = $name;
        $this->password = $password;
    }


    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }


    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @return array
     */
    public static function getArticles():void
    {
        foreach (self::$articles as $article => $key) {
            if ($key) {
                echo $article . '<br>';
            }
        }
    }
}

