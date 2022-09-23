<?php
// classe mere , principale
declare(strict_types=1);
/*
 * Un User possede un name et un password et peut seulement les visualiser. pas les modifs
 */
class User
{
    private string $name;
    protected string $password;

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

}