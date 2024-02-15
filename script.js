function convertir() {
    // Obtener el texto introducido
    const texto = document.getElementById("texto").value;

    // Convertir el texto a un array de caracteres
    const caracteres = texto.split("");

    // Convertir cada caracter a su código Unicode
    const unicode = caracteres.map(caracter => `&#${caracter.charCodeAt(0)};`);

    // Mostrar el resultado
    document.getElementById("resultado").value = unicode.join("");
  };

function copiar_al_portapapeles(){

    const resultado_unicode = document.getElementById("resultado").value;
    navigator.clipboard.writeText(resultado_unicode);

    const boton = document.getElementById("copiar-btn");
    boton.textContent = "Copiado al portapapeles";
  };


