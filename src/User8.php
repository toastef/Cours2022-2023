<?php

class User8
{

    private string $name;
    private static array $ban = [];
    private static $website ;



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
    public static function getBan(): string
    {
        $banname = "";
        foreach (self::$ban as $banni) {
            $banname .= $banni . '<br>';
        }
        return $banname;
    }

    /**
     * @param string $ban
     * @return void
     */
    public function setBan(string $ban): void
    {
        self::$ban[] .= $ban;
    }

    /**
     * @return string
     */
    public function getWebsite(): string
    {
        return self::$website;
    }

    /**
     * @param string $website
     */
    public function setWebsite(string $website): void
    {
        self::$website = $website;
    }


}