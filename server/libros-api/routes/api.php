<?php

use App\Http\Controllers\BookController;
use App\Models\Book;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PasswordResetController;

/*
|----------------------------------------------------------------------
| API Routes
|----------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Authenticated routes - logout
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Book routes
Route::get('/books', function () {
    $categories = request('categories');

    if ($categories) {
        $categoriesArray = explode(',', $categories);
        return response()->json(Book::whereJsonContains('categories', $categoriesArray)->get());
    }

    return response()->json(Book::all());
});

// Authentication routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/regenerate/code', [AuthController::class, 'regenerateCode']);
Route::post('/regenerate/password', [AuthController::class, 'regeneratePassword']);
