<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            Student::create([
                'firstname' => $faker->firstName(),
                'lastname' => $faker->lastName(),
                'course' => $faker->word(),
                'birthday' => $faker->date(),
                'age' => $faker->randomDigit(),
                'allowance' => 100.50
            ]);
        }

        User::create([
            'name' => 'Joseph Vincent',
            'email' => 'joseph@vincent.com',
            'password' => Hash::make('password')
        ]);
    }
}
