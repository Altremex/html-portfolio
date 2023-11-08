document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const email = document.getElementById('email').value;
    const duda = document.getElementById('duda').value;

    // Aquí puedes agregar el código para enviar estos datos a tu servidor.
    console.log("Datos a enviar:", {nombre, numero, email, duda});
});
