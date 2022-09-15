<?php

class User4
{
    private string $name;
    private int $old;

    /**
     * @param string $name
     * @param int $old
     */

    public function __construct(string $name, int $old)
    {
        // affectation de la valeur directement dans la propriétée
        $this->name = $name;
        // affectation de la valeur en utilisant le setter
        $this->setold($old);
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
     * @return string
     */
    public function getold(): int
    {
        return $this->old;
    }

    /**
     * @param string $old
     */
    public function setold(int $old): void
    {
        $this->old = $old;
    }

}