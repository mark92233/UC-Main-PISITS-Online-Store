<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class rolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('roles')->insert([
            [
                'name' => 'President',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Vice President',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Treasurer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Auditor',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Officer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Developer',
                'created_at' => now(),
                'update_at' => now(),
            ],
            [
                'name' => 'Student',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
