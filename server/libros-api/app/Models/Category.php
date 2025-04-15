<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $fillable = ['name'];

    protected $hidden = ['pivot', 'created_at', 'updated_at'];

    // Category.php
    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_categories');
    }
}
