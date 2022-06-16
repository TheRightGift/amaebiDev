M.AutoInit();

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$("#contactFormId").on("submit", (e) => {
    e.preventDefault();
    
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let textarea1 = $("#textarea1").val();
    let contactBtn = $("#contactBtn").val();
    console.log(firstName, lastName, email, subject, textarea1, contactBtn);
   
    var dataToPost = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        textarea1: textarea1,
        contactBtn: contactBtn
    }

    $.ajax({
        url: 'contactFormSub.php',
        type: 'POST',
        data: dataToPost,
        success: function (result) {
            if (result == 200) {
                console.log('Success!');
                Swal.fire({
                    icon: 'success',
                    title: 'Message forwarded successfully!',
                    text: 'We\'ll get back to you shortly',
                    showConfirmButton: false,
                    timer: 5000
                });
                setInterval(() => {
                    location.reload();
                }, 5000);
            } else if (result == 501) {
                console.log('Not successful.');
                Swal.fire({
                    icon: 'error',
                    title: 'Your Message Submission Failed',
                    text: 'Please try again later',
                    showConfirmButton: false,
                    timer: 5000
                });
                setInterval(() => {
                    location.reload();
                }, 5000);
            }
        },
        error: function () {
            console.log('Error!');
            Swal.fire({
                icon: 'error',
                title: 'Network is slow',
                text: 'Please try again later',
                showConfirmButton: false,
                timer: 5000
            });
        }
    });
});