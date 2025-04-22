<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reading extends Model
{
    use HasFactory;

    protected $table = 'readings';

    protected $fillable = ['user_id', 'book_id', 'status', 'started_at', 'finished_at'];

    // App\Models\Reading.php
    public function book()
    {
        return $this->belongsTo(Book::class)->with('categories');
    }
}
