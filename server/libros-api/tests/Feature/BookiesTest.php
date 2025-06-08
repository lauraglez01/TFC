<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use App\Models\Book;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BookiesTest extends TestCase
{

    use RefreshDatabase;

    // Tests para verificar el registro, inicio de sesión y acceso a rutas protegidas
    public function test_user_can_register()
    {
        $response = $this->postJson(('/api/register'), [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password'
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['user' => ['id', 'name', 'email']]]);
    }

    public function test_user_can_login_and_get_token()
    {
        $user = User::factory()->create([
            'password' => bcrypt('password123')
        ]);

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'password123'
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['accessToken', 'user']]);
    }

    public function test_authenticated_user_can_access_protected_route()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->getJson('/api/user');
        $response->assertStatus(200);
    }

    public function test_guest_cannot_access_protected_route()
    {
        $response = $this->getJson('/api/user');
        $response->assertStatus(401);
    }

    // Tests para verificar el acceso a libros y reseñas
    public function test_books_list_is_accessible()
    {
        Book::factory()->count(3)->create();

        $response = $this->getJson('/api/books');
        $response->assertStatus(200);
        $this->assertIsArray($response->json());
    }

    public function test_authenticated_user_can_create_review_for_a_book()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $book = Book::factory()->create();

        $data = [
            'rating' => 5,
            'comment' => '¡Excelente libro!',
        ];

        $response = $this->postJson("/api/books/{$book->id}/reviews", $data);

        $response->assertStatus(201);
        $response->assertJsonFragment([
            'user_id' => $user->id,
            'rating' => 5,
            'comment' => '¡Excelente libro!',
        ]);
        $this->assertArrayHasKey('id', $response->json());
        $this->assertArrayHasKey('user_id', $response->json());
        $this->assertArrayHasKey('rating', $response->json());
    }

    public function test_authenticated_user_can_create_forum_post()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $data = [
            'title' => 'Título de prueba',
            'content' => 'Contenido del post de prueba',
        ];

        $response = $this->postJson('/api/forum', $data);

        $response->assertStatus(201);
        $response->assertJsonFragment([
            'user_id' => $user->id,
            'title' => 'Título de prueba',
            'content' => 'Contenido del post de prueba',
        ]);
        $this->assertArrayHasKey('id', $response->json());
    }

    public function test_authenticated_user_can_comment_on_forum_post()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $post = \App\Models\ForumPost::factory()->create();

        $data = [
            'content' => 'Este es un comentario de prueba',
        ];

        $response = $this->postJson("/api/forum/{$post->id}/comments", $data);

        $response->assertStatus(201);

        $comment = $response->json();
        if (is_array($comment) && isset($comment[0])) {
            $comment = $comment[0];
        }

        $this->assertEquals($user->id, $comment['user_id']);
        $this->assertEquals($post->id, (int)$comment['forum_post_id']);
        $this->assertEquals('Este es un comentario de prueba', $comment['content']);
    }
}
