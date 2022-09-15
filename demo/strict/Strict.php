<?php
declare(strict_types = 1) ;
class Strict {
    private float $price;

       public function __construct($price)
        {
            $this->setPrice($price);
        }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

}