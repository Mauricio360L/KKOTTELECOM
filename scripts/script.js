document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener la imagen principal (grande) y las miniaturas
  const mainImage = document.querySelector(".main-image img");
  const thumbnails = document.querySelectorAll(".thumbnail");

  // 2. Iterar sobre cada miniatura para agregar un "escuchador" de clics
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // a) Cambiar la imagen principal
      // Toma la fuente (src) de la miniatura en la que se hizo clic
      const newImageSrc = thumbnail.getAttribute("src");
      // Asigna esa fuente a la imagen principal
      mainImage.setAttribute("src", newImageSrc);

      // b) Manejar la clase 'active' para el estilo visual (CSS)

      // 1. Quitar la clase 'active' de todas las miniaturas
      thumbnails.forEach((t) => t.classList.remove("active"));

      // 2. Añadir la clase 'active' solo a la miniatura que fue clicada
      thumbnail.classList.add("active");
    });
  });
});
