<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
    use HasFactory;

    protected $table = 'books';

    protected $fillable = ['title', 'author', 'country', 'description', 'published_year', 'isbn', 'cover'];
    protected $hidden = ['created_at', 'updated_at'];

    // Book.php
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'book_categories');
    }

    public function readings()
{
    return $this->hasMany(Reading::class);
}

public function reviews()
{
    return $this->hasMany(Review::class);
}

}
