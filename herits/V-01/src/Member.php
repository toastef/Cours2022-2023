<?php
// classe fille de User
declare(strict_types=1);

/*
 * un Member peut modifier son mot de passe et possèdeune propriété supplementaire prepaid permettant d'acheter en ligne
 */


class Member extends User
{
   private float $prepaid;
   // bien remettre les param de la classe mère
   public function __construct(string $name, string $password, float $prepaid)
   {
       parent::__construct($name, $password);
       $this->prepaid = $prepaid;
   }

    /**
     * @return float
     */
    public function getPrepaid(): float
    {
        return $this->prepaid;
    }

    /**
     * @doc set to spend money
     * @param float $amount
     * @return string
     */
    public function spend(float $amount): string {
        $this->prepaid -= $amount;
        return 'Montant dépensé par '.$this->getname() .' ' .$amount ."€ solde du compte " .$this->getprepaid(). ' €' ;
    }

    /**
     * @param string $password
     * @return void
     */
    public function setPassword(string $password): void {

        $this->password = $password;
    }


}