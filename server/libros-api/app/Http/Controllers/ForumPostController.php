<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ForumPost;
use Illuminate\Support\Facades\Auth;

class ForumPostController extends Controller
{
    public function index() {
        return ForumPost::with('user', 'comments.user')->latest()->get();
    }

    public function store(Request $request) {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = ForumPost::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return response()->json($post, 201);
    }

    public function show($id) {
        return ForumPost::with('user', 'comments.user')->findOrFail($id);
    }

    public function update(Request $request, $id) {
        $post = ForumPost::findOrFail($id);

        if ($post->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $post->update($request->only('title', 'content'));

        return response()->json($post);
    }

    public function destroy($id) {
        $post = ForumPost::findOrFail($id);

        if ($post->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $post->delete();

        return response()->noContent();
    }
}