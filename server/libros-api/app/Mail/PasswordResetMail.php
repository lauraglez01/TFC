<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordResetMail extends Mailable
{
    use SerializesModels;

    public $code;

    // Recibe el código de recuperación
    public function __construct($code)
    {
        $this->code = $code;
    }

    public function build()
    {
        return $this->subject('Código de Recuperación de Contraseña')
                    ->view('emails.password-reset'); // Vista del correo
    }
}
