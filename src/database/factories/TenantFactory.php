<?php

namespace Database\Factories;

use App\Models\Tenant;
use Illuminate\Database\Eloquent\Factories\Factory;

class TenantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tenant::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'        => 'Tenants - ' . $this->faker->firstName,
            'lot_number'  => $this->faker->unique()->numberBetween(1, 200),
            'description' => $this->faker->sentence(20),
        ];
    }
}