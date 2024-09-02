<?php

// Include PHPMailer library files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Check if any field is empty
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        header('Location:/pages/contactus.html?error');
        exit(); // It's good practice to exit after header redirection
    } else {
        // Email configuration
        $host = "smtp.hostinger.com";
        $port = 587;
        $username = "contactus@lawyer-alaa-aljasmi.com"; // Your email address
        $password = "Contactus@lawyer-alaa-aljasmi.2024"; // Your email password

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = $host;
            $mail->SMTPAuth = true;
            $mail->Username = $username;
            $mail->Password = $password;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use TLS encryption
            $mail->Port = $port;

            // Recipients
            $mail->setFrom($username, 'Lawyer Alaa Aljasmi'); // Set sender
            $mail->addAddress('contactus@lawyer-alaa-aljasmi.com'); // Add a recipient

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "<strong>From:</strong> $name &lt;$email&gt;<br><br>" . nl2br($message); // Convert newlines to <br>
            $mail->AltBody = "From: $name <$email>\n\n" . $message; // Plain text version for non-HTML email clients

            // Send the email
            if ($mail->send()) {
                header('Location:/pages/contactus.html?success');
            } else {
                header('Location:/pages/contactus.html?error');
            }
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
} else {
    header('Location:/pages/contactus.html');
    exit();
}



// // Include PHPMailer library files
// use  PHPMailer\PHPMailer\SMTP;
// use  PHPMailer\PHPMailer\Exception;

// require_once 'vendor/autoload.php';


// if (isset($_POST['submit'])) {
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $subject = $_POST['subject'];
//     $message = $_POST['message'];

//     if (empty($name) || empty($email) || empty($subject) || empty($message)) {
  
//         header('location:contactus.php?error');
   

//     } else {
//         // Email configuration
//         $host = "smtp.hostinger.com";
//         $port = 587 ;
//         $username = "contactus@lawyer-alaa-aljasmi.com"; // Your Gmail email address
//         $password = "Contactus@lawyer-alaa-aljasmi.2024"; // Your Gmail password or app-specific password

//         // Create a new PHPMailer instance
//         $mail = new PHPMailer\PHPMailer\PHPMailer();

//         try {
//             // Server settings
//             $mail->isSMTP();
//             $mail->Host = $host;
//             $mail->SMTPAuth = true;
//             $mail->Username = $username;
//             $mail->Password = $password;
//             $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
//             $mail->Port = $port;

//             // Recipients
//             $mail->setFrom($email, $name);
//             $mail->addAddress('contactus@lawyer-alaa-aljasmi.com'); // The recipient email address

//             // Content
//             $mail->isHTML(true);
//             $mail->Subject = $subject;
//             $mail->Body    = $message ;
//             $mail->FromName = $email;   
       
//             // Send the email
//             if ($mail->send()) {
//                 header('location:contactus.php?success');
//             } else {
//                 header('location:contactus.php?error');
//             }
//         } catch (Exception $e) {
//             echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
//         }
//     }
// } else {
//     header('location:contactus.php');
// }

