<?php

final class Magicien extends Personnage
{
  private int $magie = 50 ;


  public function __construct(string $name)
{
    parent::__construct($name);

}
  public function attaquer(object $victime,)
  {
      parent::attaquer($victime);
      if($this->magie <= 100){
      $this->magie += 5;
      } else {
          $this->magie = 100 ;
      }
  }
    /**
     * @return int
     */
    public function getMagie(): int
    {
        return $this->magie;
    }
}