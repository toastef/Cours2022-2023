<?php

// les constantes de class
// Creer une propriété $subscription et une méthode permettant de réduire l'abonnement de 40 si le membre est étudiant

class User5
{
    private string $name;
    private int $old;
    private string $job;
    private int $subscription;


    public const SCHOOL_NAME = "IEPSCF-NAMUR";
    public const BASE_SUBSCRIPTION = 100;


    /**
     * @param string $name
     * @param int $old
     * @param string $job
     */

    public function __construct(string $name, int $old, string $job )
    {

        $this->setName($name);
        $this->setold($old);
        $this->setJob($job);
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

    /**
     * @return string
     */
    public function getJob(): string
    {
        return $this->job;
    }

    /**
     * @param string $job
     */
    public function setJob(string $job): void
    {
        $this->job = $job;
    }

    /**
     * @return int
     */
    public function getSubscription(): int
    {
        return $this->setSubscription();
    }

    /**
     * @return void
     */
    private function setSubscription(): void  // utilisation que dans la création du Getter donc pas besoin de le mettre en public car pas besoin de le reutiliser dans script
    {
        if($this->job == 'etudiant'){
            $this->subscription = self::BASE_SUBSCRIPTION -40; //
        }else {
             $this->subscription = self::BASE_SUBSCRIPTION;
        }
    }
}
