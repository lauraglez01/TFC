<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Story;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class StoryController extends Controller
{
    /**
     * Obtiene todas las historias del usuario autenticado.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stories = Auth::user()->stories; // Relación con el modelo User
        return response()->json(['stories' => $stories], 200);
    }

    /**
     * Crea una nueva historia para el usuario autenticado.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'file' => 'nullable|file|mimes:jpg,jpeg,png,pdf,txt|max:2048',
            ]);

        $story = Auth::user()->stories()->create($validatedData);

        return response()->json(['message' => 'Story created successfully', 'story' => $story], 201);
    }

    /**
     * Elimina una historia específica del usuario autenticado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $story = Auth::user()->stories()->findOrFail($id); 

        $story->delete();

        return response()->json(['message' => 'Story deleted successfully'], 200);
    }
    public function upload(Request $request)
    {
        try {
            $request->validate([
                'file' => 'required|file|mimes:jpg,jpeg,png,pdf,txt|max:2048',
            ]);
    
            $file = $request->file('file');
            $path = $file->store('uploads', 'public');
    
            $story = Auth::user()->stories()->create([
                'title' => $file->getClientOriginalName(),
                'description' => 'Uploaded via file',
                'image' => $path,
                'file' => $path,
            ]);
    
            return response()->json([
                'message' => 'Archivo subido y historia creada correctamente',
                'story' => $story,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Upload failed: ' . $e->getMessage());
            return response()->json([
                'message' => 'Upload failed',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function showContent($id)
{
    $story = Auth::user()->stories()->findOrFail($id);

    if (!$story->image) {
        return response()->json(['message' => 'No file associated'], 404);
    }

    // Construye la URL pública (asegúrate de que storage:link esté hecho)
    $url = asset('storage/' . $story->image);

    return response()->json(['url' => $url], 200);
}


public function preview($id)
{
    $story = Auth::user()->stories()->findOrFail($id);

    $path = storage_path('app/public/' . $story->image);

    if (!file_exists($path)) {
        return response()->json(['message' => 'File not found'], 404);
    }

    $ext = strtolower(pathinfo($story->image, PATHINFO_EXTENSION));

    if ($ext === 'pdf') {
        return response()->file($path, [
            'Content-Type' => 'application/pdf',
        ]);
    }

    if ($ext === 'txt') {
        $contents = file_get_contents($path);
        return response($contents, 200, [
            'Content-Type' => 'text/plain; charset=UTF-8',
        ]);
    }

    return response()->json(['message' => 'Unsupported file type'], 415);
}

}
