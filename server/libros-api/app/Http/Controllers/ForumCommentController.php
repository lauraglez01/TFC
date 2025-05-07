<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ForumComment;
use Illuminate\Support\Facades\Auth;

class ForumCommentController extends Controller
{
    public function store(Request $request, $postId) {
        $request->validate(['content' => 'required|string']);

        $comment = ForumComment::create([
            'user_id' => Auth::id(),
            'forum_post_id' => $postId,
            'content' => $request->content,
        ]);

        return response()->json($comment->load('user'), 201);
    }

    public function destroy($id) {
        $comment = ForumComment::findOrFail($id);

        if ($comment->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $comment->delete();
        return response()->noContent();
    }
}