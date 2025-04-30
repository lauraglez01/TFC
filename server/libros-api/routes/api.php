<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Models\Book;
use Illuminate\Support\Facades\Response;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\StoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Obtener usuario autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Obtener libros leídos por el usuario autenticado
Route::middleware('auth:sanctum')
     ->get('/book/{id}', [BookController::class, 'show']);


// Logout (requiere autenticación)
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/user/readings', function (Request $request) {
    return Response::json(
        $request->user()->readings()->with('book.categories')->get()
    );
});

// Reseñas
Route::middleware('auth:sanctum')->post('/book/{id}/status', [BookController::class, 'updateStatus']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/books/{book}/reviews', [ReviewController::class, 'store']); 
    Route::put('/reviews/{review}', [ReviewController::class, 'update']);    
    Route::delete('/reviews/{review}', [ReviewController::class, 'destroy']); 
});

Route::get('/books/{book}/reviews', [ReviewController::class, 'index']);

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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/stories', [StoryController::class, 'index']); 
    Route::post('/stories', [StoryController::class, 'store']); 
    Route::delete('/stories/{id}', [StoryController::class, 'destroy']);
    Route::post('/stories/upload', [StoryController::class, 'upload']);
    Route::get('/stories/{id}/content', [StoryController::class, 'showContent']);
    Route::get('/stories/{id}/preview', [StoryController::class, 'preview']);
});

// Autenticación
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Recuperación de contraseña
Route::post('/regenerate/code', [AuthController::class, 'regenerateCode']);
Route::post('/regenerate/password', [AuthController::class, 'regeneratePassword']);