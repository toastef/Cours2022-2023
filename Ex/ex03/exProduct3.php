<?php
/* ajouter un taux de tva de 21%
* modifier la méthode pour qu'elle affiche le prix tvac
 * faites en sorte que l'on ne puisse pas vendre plus que le stock
 */

class exProduct3
{
    private string $name;
    private int $price;
    private int $stock;
    private const TVA = 0.21;


    /**
     * @param string $name
     * @param int $price
     * @param int $stock
     */
    public function __construct(string $name, int $price, int $stock)
    {
        $this->setName($name);
        $this->setPrice($price);
        $this->setStock($stock);
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
     * @return int
     */
    public function getPrice(): int
    {
        return $this->price;
    }

    /**
     * @param int $price
     */
    public function setPrice(int $price): void
    {
        $this->price = $price;
    }

    /**
     * @return int
     */
    public function getStock(): int
    {
        return $this->stock;
    }

    /**
     * @param int $stock
     */
    public function setStock(int $stock): void
    {
        $this->stock = $stock;
    }




// creer une methode permettant une reduction (reduce()) du prix du produit . la valeur n'est pas controlée et est placée comme param de la méthode

    /**
     * @param int $value
     * @return int
     */
    public function reduce(float $value): int
    {
        return $this->price -= $value;
    }

//creer une methode qui permet de vendre un produit (sell()) : et actualisé le stock du produit , et afficher le montant  tvac

    /**
     * @param int $qt
     * @return string
     */
    public function sell(int $qt): string
    {
        if ($this->getStock() > $qt) {
            $this->stock -= $qt;

            return ' le stock n\'est plus que de ' . $this->getStock() . '<br>' .
                'les  '. $qt.' ' . $this->name . ' sont au prix de ' . (($this->price) + ($this->price * self::TVA)) * $qt . ' € TVAC';
        }
        die('La quantitée d\'article demandée est plus importante que le stock du magasin ');

    }
}