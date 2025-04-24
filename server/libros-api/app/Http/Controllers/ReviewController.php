<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function index(Book $book)
    {
        return $book->reviews()->with('user:id,name')->latest()->get();
    }

    public function store(Request $request, Book $book)
    {
        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        $review = $book->reviews()->create([
            'user_id' => Auth::id(),
            'rating' => $validated['rating'],
            'comment' => $validated['comment'] ?? '',
        ]);

        return response()->json($review->load('user:id,name'), 201);
    }

    public function update(Request $request, Review $review)
    {
        $this->authorize('update', $review); // Opcional: políticas

        $review->update($request->only('rating', 'comment'));

        return response()->json($review);
    }

    public function destroy(Review $review)
    {
        $this->authorize('delete', $review); // Opcional: políticas

        $review->delete();

        return response()->json(['message' => 'Reseña eliminada']);
    }
}

