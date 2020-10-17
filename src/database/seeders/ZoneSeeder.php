<?php

namespace Database\Seeders;

use App\Models\Floor;
use App\Models\Tenant;
use App\Models\Zone;
use Illuminate\Database\Seeder;

class ZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Floor::factory()->times(4)->create()->each(function ($floor) {
            Zone::factory()->times(5)->create(['floor_id' => $floor->id])->each(function ($zone) {
                Tenant::factory()->times(10)->create([
                    'zone_id' => $zone->id,
                ]);
            });
        });
    }
}