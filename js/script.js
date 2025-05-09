function faz_login(event) {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if(email == "luis@gmail.com" && password == "Luis@123") {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html"
    } else {
        alert("Usuário não cadastrado, reveja seus dados.");
    }
}