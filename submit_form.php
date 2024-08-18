<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Configuração do email
    $to = 'seu-email@exemplo.com';
    $subject = 'Nova mensagem de contato';
    $body = "Nome: $name\nEmail: $email\nMensagem: $message";
    $headers = 'From: no-reply@seusite.com' . "\r\n" .
               'Reply-To: ' . $email;

    if (mail($to, $subject, $body, $headers)) {
        echo 'Mensagem enviada com sucesso!';
    } else {
        echo 'Ocorreu um erro ao enviar a mensagem.';
    }
}
?>
