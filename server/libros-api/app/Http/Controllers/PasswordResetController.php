<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Mail\PasswordResetMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class PasswordResetController extends Controller
{
    // Función para enviar el código de recuperación
    public function sendRecoveryCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $user = User::where('email', $request->email)->first();
        $code = Str::random(6); // Genera un código de 6 caracteres

        // Aquí deberías guardar el código en la base de datos o almacenarlo de alguna manera segura
        // para luego verificarlo en el proceso de restablecer la contraseña

        // Enviar el correo con el código
        Mail::to($user->email)->send(new PasswordResetMail($code));

        return response()->json(['message' => 'Código de seguridad enviado a tu correo.']);
    }

    // Función para restablecer la contraseña
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|size:6', // Asegúrate de validar el tamaño del token
            'password' => 'required|min:8|confirmed',
        ]);

        // Verifica el código (esto depende de cómo lo hayas almacenado)
        $user = User::where('email', $request->email)->first();

        if ($user && $user->recovery_code == $request->token) {
            $user->password = Hash::make($request->password);
            $user->save();
            return response()->json(['message' => 'Contraseña restablecida con éxito.']);
        }

        return response()->json(['message' => 'Código de recuperación inválido.'], 400);
    }
}
