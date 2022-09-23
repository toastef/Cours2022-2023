<?php
declare(strict_types=1);
final class Guerier extends Personnage
{

    public function __construct(string $name)
    {
        parent::__construct($name);
    }

    public function attaquer(object $victime)
    {
        parent::attaquer($victime);
        if($this->vie <= 90)
        {
            $this->vie += 10 ;
        }
    }

}