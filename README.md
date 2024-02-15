# Convertidor de texto a Unicode

En lo personal lo utilizo para ofuscar direcciones de correo electrónico.

Ofuscar un correo electrónico significa ocultarlo o codificarlo de tal manera que no sea legible para los rastreadores que recopilan información de las páginas web.

Al convertir direcciones de correo electrónico a su equivalente en Unicode logramos complicar la recolección a los rastreadores, pero sin mayor efecto visual en el navegador y con ello disminuir el envío de SPAM o correos maliciosos.

## Ejemplo

En un enlace a una dirección de correo electrónico lo tradicional sería usar esto:

    <a href="mailto:hola@ejemplo.com">

En su lugar usamos la dirección de correo electrónico convertida a Unicode.

    <a href="mailto:&#104;&#111;&#108;&#97;&#64;&#101;&#106;&#101;&#109;&#112;&#108;&#111;&#46;&#99;&#111;&#109;">
