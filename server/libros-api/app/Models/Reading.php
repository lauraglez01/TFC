<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reading extends Model
{
    use HasFactory;

    protected $table = 'readings';

    protected $fillable = ['user_id','book_id', 'status', 'started_at', 'finished_at'];

}
