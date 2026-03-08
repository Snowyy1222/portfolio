let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let imie = document.getElementById("imie").value;
    let email = document.getElementById("email").value;
    let wiadomosc = document.getElementById("wiadomosc").value;

    if (imie == "" || email == "" || wiadomosc == "") {
        alert("Wypełnij wszystkie pola");
        return;
    }

    alert("Formularz został wysłany");

    form.reset();
})