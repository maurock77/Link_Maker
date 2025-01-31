document.addEventListener('DOMContentLoaded', () => {
    // Espera a que todo el contenido de la página se haya cargado antes de ejecutar el código

    // Selección de elementos
    const socialIcons = document.querySelectorAll('.social-icon');
    // Selecciona todos los elementos con la clase 'social-icon' y los guarda en la variable socialIcons

    // Añadir efecto hover a iconos
    socialIcons.forEach(icon => {
        // Recorre cada elemento de socialIcons
        
        icon.addEventListener('mouseenter', () => {
            // Añade un evento que se ejecuta cuando el ratón entra en el área del icono
            icon.style.transform = 'scale(1.1)';
            // Escala el icono, haciéndolo un 10% más grande
            icon.style.opacity = '0.8';
            // Cambia la opacidad del icono, haciéndolo un poco más transparente
        });

        icon.addEventListener('mouseleave', () => {
            // Añade un evento que se ejecuta cuando el ratón sale del área del icono
            icon.style.transform = 'scale(1)';
            // Restablece el tamaño original del icono
            icon.style.opacity = '1';
            // Restablece la opacidad original del icono
        });
    });

    // Función para copiar enlace al portapapeles (ejemplo)
    function copyShareLink() {
        const shareLink = window.location.href;
        // Obtiene la URL actual de la página

        navigator.clipboard.writeText(shareLink).then(() => {
            // Copia el enlace al portapapeles
            alert('Enlace copiado al portapapeles');
            // Muestra una alerta indicando que el enlace ha sido copiado
        });
    }
});
