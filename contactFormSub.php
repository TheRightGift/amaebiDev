<?php
    session_start();

    if(isset($_POST['contactBtn'])){
        $err = 0;

        if(isset($_POST['firstName']) && $_POST['firstName'] != ""){
            $firstName = $_POST['firstName'];
        } else {
            $err = 1;
        }

        if(isset($_POST['lastName']) && $_POST['lastName'] != ""){
            $lastName = $_POST['lastName'];
        } else {
            $err = 1;
        }

        if(isset($_POST['email']) && $_POST['email'] != ""){
            $email = $_POST['email'];
        } else {
            $err = 1;
        }

        if(isset($_POST['subject']) && $_POST['subject'] != ""){
            $subject = $_POST['subject'];
        } else {
            $err = 1;
        }

        if(isset($_POST['textarea1']) && $_POST['textarea1'] != ""){
            $textarea1 = $_POST['textarea1'];
        } else {
            $err = 1;
        }

        $emailAcct = 'amaebidevnet@gmail.com';
        $contactDetails = " Firstname: $firstName\n Lastname: $lastName\n\n Message: $textarea1";

        if(mail($emailAcct,  $subject, $contactDetails, 'From:  ' . $email)){
            //if email sent successfully 
            //print success message
            echo  200;
            // "<div style='color: green;'>Your message has been sent to $loanEmailAcct. This might take up to 24 hours to process.</div>";
        } else {
            
            echo 501;
            // "Mail was not successful.";  
        }

    } else {
        echo 501;
    }
?>