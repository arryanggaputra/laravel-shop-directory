<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    use HasFactory;

    public function zones()
    {
        return $this->hasMany('App\Models\Zone');
    }

    public function tenants()
    {
        return $this->hasManyThrough(Tenant::class, Zone::class);
    }
}