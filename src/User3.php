<?php

class User3


{

    public string $name;
    public int $old;

    /**
     * @return string
     */
    public function message()
    {
        return " Bienvenu dans l'administration " . $this->getname();
    }

    /**
     * @return string
     */
    public function getname(): string
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
     * @param $user
     * @return string
     */
    public function ban(User3 $user):string
    {
        return $user->getname().' a été ban par '. $this->getname() ;
    }

}