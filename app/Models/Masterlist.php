<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Masterlist extends Model
{
    protected $table = 'masterlist';

    protected $fillable = [
        'student_id',
        'full_name',
        'sex',
        'program',
        'section',
        'year_level',
        'is_registered'
    ];
}