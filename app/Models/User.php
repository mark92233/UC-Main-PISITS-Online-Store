<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'masterlist_id',
        'role_id',
        'email',
        'password',
    ];

    
    protected $hidden = [
        'password',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function masterlist()
    {
        // Tells Laravel to look for the 'id' in Masterlist that matches 'masterlist_id' in Users
        return $this->belongsTo(Masterlist::class, 'masterlist_id', 'id');
    }
}