<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $tenants = Tenant::orderBy('name', 'DESC')->with(['zone' => function ($zone) {
            $zone->with('floor');
        }]);

        return Inertia::render('Home/index', [
            'tenants' => $tenants->paginate(12),
        ]);
    }

    public function shop()
    {
        return Inertia::render('Shop');
    }

}