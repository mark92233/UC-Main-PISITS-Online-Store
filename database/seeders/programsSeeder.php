<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class programsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('programs')->insert([
            [
                'name' => 'BSIT',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'BSCS',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'BSCS-AI',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
