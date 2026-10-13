<?php

use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// This displays the React page when the user visits /login
Route::get('login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

// This catches the form submission when the user clicks "Continue"
Route::post('/verify-student', [AuthController::class, 'verifyStudent'])->name('verify.student');

Route::post('/login-registered-student', [AuthController::class, 'loginRegisteredStudent'])->name('login.registered');