<?php

namespace App\Http\Controllers;

use App\Models\Floor;
use Inertia\Inertia;

class FloorController extends Controller
{
    public function show(String $id)
    {

        $floor   = Floor::find($id);
        $tenants = $floor->tenants()->with('zone')->paginate(12);

        return Inertia::render('Floor/index', [
            'floor'   => $floor,
            'tenants' => $tenants,
        ]);
    }
}