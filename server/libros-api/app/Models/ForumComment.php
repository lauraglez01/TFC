<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumComment extends Model
{
    use HasFactory;
    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function post() {
        return $this->belongsTo(ForumPost::class, 'forum_post_id');
    }
    
}
