// "use strict"
//
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);
//
//     async function formSend(e) {
//         e.preventDefault();
//
//         let error = formValidate(form);
//
//         let formData = new FormData(form);
//
//
//         if (error === 0) {
//             form.classList.add('_sending')
//             let response = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 let result = await response.json();
//                 alert(result.message);
//                 form.reset();
//             } else {
//                 alert('Ошибка');
//                 form.classList.remove('_sending')
//             }
//         } else {
//             alert('Заполните обязательные поля')
//         }
//     }
//
//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req')
//
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);
//
//             // if(input.classList.contains('_phone')) {
//             //     if(phoneTest(input)) {
//             //         formAddError(input);
//             //         error++;
//             //     }
//             // } else {
//             //     if (input.value === '') {
//             //         formAddError(input);
//             //         error++;
//             //     }
//             // }
//
//             if (input.value === '') {
//                 formAddError(input);
//                 error++
//             }
//         }
//         return error;
//     }
//
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//
//     // проверка номера телефона
//     // function phoneTest(input) {
//     //     return (/(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/).test(input.value);
//     // }
// })

// ancors
$(() => {
    const anchors = document.querySelectorAll('.anchor')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
})