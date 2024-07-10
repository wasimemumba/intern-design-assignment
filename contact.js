
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("righttopM");
    let top = document.getElementById("top");
    let content = document.getElementById("righttop");

    btn.addEventListener('click', function () {
        top.classList.toggle('expand');
        content.classList.toggle('show');

    })

    const form = document.getElementById('form2');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('Yname').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;
        if (name == "" || email == "" || subject == "" || message == "") {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Don't leave text fields empty.",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });

        }
        else {
            Swal.fire({
                title: "Sucess!",
                text: "Your message has been sent.",
                icon: "success"
            });
        }



    })




})

