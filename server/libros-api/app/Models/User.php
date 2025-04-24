<?php

namespace App\Models;

use App\Models\Reading;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function readings()
    {
        return $this->hasMany(Reading::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Devuelve el estado de lectura que el usuario actual tiene para un libro dado.
     *
     * @param  int    $bookId  ID del libro
     * @return string          El estado ('Reading', 'Completed', etc.) o 'not started' si no hay lectura
     */
    public function getBookStatus(int $bookId): string
    {
        $reading = $this->readings()->where('book_id', $bookId)->first();
        return $reading?->status ?? 'not started';
    }
}
