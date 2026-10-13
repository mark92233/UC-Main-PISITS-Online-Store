<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MasterlistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('masterlist')->insert([
            [
                'student_id' => '123456789',
                'first_name' => 'John',
                'last_name' => 'Doe',
                'program_id' => 1,
                'year_level' => 3,
                'sex' => 'Male',
                'section' => 'A',
                'is_registered' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}