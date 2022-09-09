<?php

class User2
{
    //propriete
    public string $name;
    public int $old;


    public function message()
    {
        return " Bienvenu dans l'administration" . $this->name;
    }


    public function getname(): string
    {
        return $this->name;
    }



    /**
     * @return int
     */
    public function getOld(): int
    {
        return $this->old;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @param int $old
     * @return void
     */
    public function setOld(int $old):void
    {
        $this->old = $old;
    }

}