// seleziono la lista email
const emailList = document.querySelector("#email-list");

// ciclo 10 volte
for (let i = 0; i < 10; i++) {

    // chiamata API
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

        });

}
