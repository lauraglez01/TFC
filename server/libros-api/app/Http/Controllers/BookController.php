<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\User;
use App\Models\Reading;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::with('categories')->get();
        return response()->json(['books' => $books], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = Book::with('categories')->findOrFail($id);
    
        $status = Auth::userser()->getBookStatus($id);
    
        // Devolvemos ambos en el JSON
        return response()->json([
            'book'   => $book,
            'status' => $status,
        ], 200);
    }

    // BookController.php

public function updateStatus(Request $request, $id)
{
    $book = Book::findOrFail($id);
    $status = $request->input('status');

    $reading = $request->user()->readings()->where('book_id', $id)->first();

    if ($reading) {
        $reading->status = $status;
        $reading->save();
    } else {
        $request->user()->readings()->create([
            'book_id' => $id,
            'status' => $status,
        ]);
    }

    return response()->json(['message' => 'Book status updated successfully']);
}


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
