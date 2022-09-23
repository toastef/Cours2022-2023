<?php
declare(strict_types=1);

class User6
    //Systeme de bannissement via une propriete standard
{
    private string $name;
    private array $ban = [];

    public function __construct(string $name)
    {
        $this->setName($name);

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
     * @return array
     */
    public function getBan(): string
    {
        $banname = "";
        foreach ($this->ban as $banni) {
            $banname .= $banni . '<br>';
        }
        return $banname;
    }

    /**
     * @param string $ban
     */
    public function setBan(string $ban): void
    {
        $this->ban[] .= $ban;
    }


}