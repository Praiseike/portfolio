<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Books>
 */
class BooksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $faker = \Faker\Factory::create('en_US');

        return [
            'title'=> $faker->sentence,
            'image'=> $faker->imageUrl(640,640),
            'summary'=> $faker->paragraph,
            'price'=>$faker->randomNumber(2)
        ];
    }
}
