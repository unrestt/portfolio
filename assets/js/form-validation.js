document.getElementById("contactForm").addEventListener("submit", function (e) {
    let formIsValid = true;
    let messages = [];

    const imie = document.getElementById("imie");
    const nazwisko = document.getElementById("nazwisko");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const wiadomosc = document.querySelector("textarea[name='wiadomosc']");
    const checkbox = document.getElementById("checkbox");

    // Imię
    if (!imie.value.match(/^[A-Za-zÀ-žżźćńółśąęŻŹĆĄŚĘŁÓŃ\s-]{2,40}$/)) {
        messages.push("Podaj poprawne imię.");
        formIsValid = false;
    }

    // Nazwisko
    if (!nazwisko.value.match(/^[A-Za-zÀ-žżźćńółśąęŻŹĆĄŚĘŁÓŃ\s-]{2,60}$/)) {
        messages.push("Podaj poprawne nazwisko.");
        formIsValid = false;
    }

    // Email
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        messages.push("Podaj poprawny adres e-mail.");
        formIsValid = false;
    }

    // Telefon
    if (!tel.value.match(/^[0-9\-\+\s]{7,20}$/)) {
        messages.push("Podaj poprawny numer telefonu.");
        formIsValid = false;
    }

    // Wiadomość
    if (wiadomosc.value.trim().length < 10) {
        messages.push("Wiadomość musi mieć minimum 10 znaków.");
        formIsValid = false;
    }

    // Zgoda RODO
    if (!checkbox.checked) {
        messages.push("Musisz wyrazić zgodę na przetwarzanie danych.");
        formIsValid = false;
    }

    // Jeśli niepoprawne – blokuj wysyłkę
    if (!formIsValid) {
        e.preventDefault();
        alert(messages.join("\n"));
    }
});