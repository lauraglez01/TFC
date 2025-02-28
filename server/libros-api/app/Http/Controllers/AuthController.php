<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        //validaciones de campos que viajan en la request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        //en caso de cumplir las validaciones, se crea el nuevo usuario en bbdd
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        //se devuelve respuesta con los datos del nuevo usuario
        return response()->json(['data' => ['user' => $user]]);
    }

    public function login(Request $request)
    {
        //validaciones de campos que viajan en la request
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        //en caso de cumplir las validaciones, se comprueban las credenciales
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        //en caso de credenciales correctas, se recupera la información del usuario
        $user = User::where('email', $request['email'])->firstOrFail();

        //se crea y almacena el token de autenticación
        $token = $user->createToken('auth_token')->plainTextToken;

        //se devuelve respuesta con los datos del usuario logado 
        return response()->json([
            'data' => [
                'accessToken' => $token,
                'toke_type' => 'Bearer',
                'user' => $user
            ]
        ]);
    }

    public function logout()
    {
        // Get the authenticated user
        $user = auth()->user();
    
        // Check if the user is authenticated
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        // Delete all the user's tokens to log them out
        $user->tokens->each(function ($token) {
            $token->delete();
        });
    
        return response()->json(['message' => 'Usuario deslogado']);
    }
    

    public function regenerateCode(Request $request)
    {
        $request->validate(['email' => 'required|email|exists:users']);

        $codigo = rand(1000, 9999);

        // Eliminar cualquier código anterior para ese correo
        DB::table('password_resets')->where(['email' => $request->email])->delete();

        // Insertar el nuevo código en la base de datos
        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $codigo,
            'created_at' => Carbon::now()
        ]);

        // Enviar el código por correo
        try {
            Mail::raw("Tu código de recuperación es: $codigo", function ($message) use ($request) {
                $message->to($request->email)
                    ->subject('Código de recuperación de contraseña');
            });
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al enviar el correo'], 500);
        }

        return response()->json(['message' => 'Código de seguridad enviado a tu correo']);
    }



    public function regeneratePassword(Request $request)
    {
        //validaciones de campos que viajan en la request
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required',
            'token' => 'required'
        ]);

        //en caso de cumplir las validaciones, se consulta en bbdd si el código (token) 
        //es el que está asociado al email en la tabla password_resets
        $updatePassword = DB::table('password_resets')
            ->where(['email' => $request->email, 'token' => $request->token])->first();

        //si no se encuentra registro en la consulta anterior, se devuelve error
        if (!$updatePassword) {
            return response()->json(['message' => 'Código inválido'], 401);
        }

        //esta parte es para ver si el código ha expirado
        //en este caso se implementa para que expire en un minuto
        //en caso de haber expirado se devuelve error
        $fechaActual = Carbon::now();
        $fechaCodMasUnMin = Carbon::parse($updatePassword->created_at)->addMinute(1);
        if ($fechaActual->gt($fechaCodMasUnMin)) {
            return response()->json(['message' => 'Código expirado'], 401);
        }

        //en caso de superar todas las validaciones, se actualiza la password hasheada en bbdd
        User::where('email', $request->email)->update(['password' => Hash::make($request->password)]);

        //se eliminan los registros de la tabla password_resets asociados al email de entrada
        DB::table('password_resets')->where(['email' => $request->email])->delete();

        //se devuelve la salida con un mensaje informativo
        return ['message' => 'Contraseña modificada correctamente'];
    }

    public function user()
    {
        return response()->json(['data' => ['user' => auth()->user()]]);
    }
}
