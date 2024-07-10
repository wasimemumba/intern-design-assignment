
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("righttopM");
    let top = document.getElementById("top");
    let content = document.getElementById("righttop");

    btn.addEventListener('click', function () {
        top.classList.toggle('expand');
        content.classList.toggle('show');

    })

    const form = document.getElementById('form1');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('fname').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('date').value;
        let select = document.getElementById('select').value;
        if (name == "" || email == "" || date == "" || select == "") {
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
                text: "Your table has been booked.",
                icon: "success"
            });
        }



    })
    // if (fileName == "contact.html") {
    //     const form = document.getElementById('form2');
    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault();
    //         let name = document.getElementById('Yname').value;
    //         let email = document.getElementById('email').value;
    //         let subject = document.getElementById('subject').value;
    //         let message = document.getElementById('message').value;
    //         if (name == "" || email == "" || subject == "" || message == "") {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Error",
    //                 text: "Don't leave text fields empty.",
    //                 // footer: '<a href="#">Why do I have this issue?</a>'
    //             });

    //         }
    //         else {
    //             Swal.fire({
    //                 title: "Sucess!",
    //                 text: "Your message has been sent.",
    //                 icon: "success"
    //             });
    //         }



    //     })
    // }



})

// document.addEventListener('DOMContentLoaded', function () {
//     let btn = document.getElementById("righttopM");
//     let top = document.getElementById("top");

//     btn.addEventListener('click', function () {
//         top.classList.toggle('expand')
//     })


// })