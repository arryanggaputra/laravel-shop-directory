<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zone extends Model
{
    use HasFactory;

    public function floor()
    {
        return $this->belongsTo(Floor::class);
    }

    public function tenants()
    {
        return $this->hasMany(Tenant::class);
    }

}