document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el formulario de comentarios y el área donde se muestran
    const commentForm = document.querySelector('.comment-form');
    const commentsDisplay = document.querySelector('.comments-display');

    // 2. Escuchar el evento de envío del formulario
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Detiene el envío del formulario al servidor

        // 3. Obtener los valores del formulario
        const nameInput = document.getElementById('name');
        const textInput = document.getElementById('comment-text');
        
        const userName = nameInput.value || 'Usuario Anónimo';
        const commentText = textInput.value;
        const currentDate = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

        if (commentText.trim() === "") {
            alert("El comentario no puede estar vacío.");
            return;
        }

        // 4. Crear el nuevo elemento HTML del comentario
        const newCommentHTML = `
            <div class="client-comment">
                <h4>Usuario: ${userName}</h4>
                <p class="comment-date">Publicado: ${currentDate}</p>
                <p class="comment-text">${commentText}</p>
                <div class="reply-section"></div>
            </div>
        `;

        // 5. Insertar el nuevo comentario al inicio del área de visualización
        // Se inserta después del título h2 pero antes de los comentarios existentes
        const h2Element = commentsDisplay.querySelector('h2');
        h2Element.insertAdjacentHTML('afterend', newCommentHTML);

        // 6. Limpiar el formulario
        commentForm.reset();
        alert("Comentario publicado localmente.");
    });
});
