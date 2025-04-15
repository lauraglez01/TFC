<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create(['name' => 'Fiction']);
        Category::create(['name' => 'Science']);
        Category::create(['name' => 'Romance']);
        Category::create(['name' => 'History']);
        Category::create(['name' => 'Fantasy']);
        Category::create(['name' => 'Mystery']);
        Category::create(['name' => 'Thriller']);
        Category::create(['name' => 'Adventure']);
    }
}
