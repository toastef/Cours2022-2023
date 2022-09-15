<?php
/*
 * Creer une classe contenant 2 propriétée name et pass avec les getter et les setter
 * le mot de passe doit etre compris entre 6 et 12 caractères. Si pas , le script est interrompu et un message est retourné
*/

class ExUser {
    private string $name;
    private string $password;






    public function  __construct(string $name, string $password){

        $this->setName($name);
        $this->setPassword($password);

}


    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function setPassword(string $password):void

    {
        if(strlen($password) >= 6 && strlen($password) <= 12)
        {
            echo 'mot de passe validé';
         $this->password = $password;
        }else{
            die('Mot de passe invalide');
        }
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {

        return $this->password;
    }
}