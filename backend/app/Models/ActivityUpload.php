<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityUpload extends Model
{
    /** @use HasFactory<\Database\Factories\ActivityUploadFactory> */
    use HasFactory;


    protected $fillable = [
        'id',
        'title',
        'description',
        'attachments',
        'total_score'
    ];

    protected $casts = [
        'attachments' => 'array',
    ];
}