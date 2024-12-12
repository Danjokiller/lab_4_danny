document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Formulario enviado correctamente.");
        // Aquí puedes añadir lógica para enviar los datos del formulario a un servidor
    }
});
