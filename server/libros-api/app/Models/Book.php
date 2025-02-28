<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
    use HasFactory;

    protected $table = 'books';

    protected $fillable = ['title','author', 'country', 'description', 'published_year', 'categories', 'isbn'];

    protected $casts = [
        'categories' => 'array', 
    ];
}
