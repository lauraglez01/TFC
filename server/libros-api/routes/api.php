<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordResetController;
use App\Models\Book;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Obtener usuario autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Logout (requiere autenticación)
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Obtener libros (todos o filtrados por categoría)
Route::get('/books', function (Request $request) {
    $query = Book::with('categories');

    if ($request->has('category_id')) {
        $query->whereHas('categories', function ($q) use ($request) {
            $q->where('id', $request->category_id);
        });
    }

    return response()->json($query->get());
});

// Autenticación
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Recuperación de contraseña
Route::post('/regenerate/code', [AuthController::class, 'regenerateCode']);
Route::post('/regenerate/password', [AuthController::class, 'regeneratePassword']);
