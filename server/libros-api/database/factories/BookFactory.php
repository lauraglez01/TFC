<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'author' => $this->faker->name,
            'country' => $this->faker->country,
            'description' => $this->faker->paragraph,
            'published_year' => $this->faker->year,
            'isbn' => $this->faker->isbn13,
            'cover' => $this->faker->imageUrl(200, 300, 'books', true, 'Book Cover'),
        ];
    }
}
