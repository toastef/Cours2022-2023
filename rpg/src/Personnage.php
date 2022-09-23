<?php

class Personnage
{
    private string $name;
    protected int $vie = 100;
    private int $attaque = 50;
    public const GAME_NAME = 'diablo';
    private static $level = 'niveau 1' ;
    private array $armes = ['couteau',] ;




    /**
     * @param string $name
     */
    public function __construct(string $name)
    {
        $this->name = $name;

    }

    /**
     * @param int $vie
     */
    public function setVie(int $vie): void
    {
        $this->vie = $vie;
    }

    /**
     * @return int
     */
    public function getVie(): int
    {
        return $this->vie;
    }


    /**
     * @return int
     */
    public function getAttaque(): int
    {
        return $this->attaque;
    }



    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public static function getLevel()
    {
        return self::$level;
    }

    /**
     * @param object $victime
     * @return void
     */
    public function attaquer(object $victime )
    {
        $victime->vie -= 10;
        $this->attaque -=5 ;
    }


    /**
     * @param string $txt
     * @return string
     */
    public function talk(string $txt=' Que me voulez-vous'): string
    {
        return $txt;
    }

    /**
     * @return string
     */


    public function getArmes()
    {
        foreach($this->armes as $arm) {
            echo $arm .'<br>';
        }

    }

    public function findArm(string $armTrouvée):void
    {

            $this->armes[] =  $armTrouvée;
            }
}