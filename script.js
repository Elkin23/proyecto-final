// Lista de los nombres de tus 30 archivos de imagen.
// ¡IMPORTANTE! Revisa y completa esta lista con los nombres exactos de tus 30 imágenes.
const nombresImagenes = [
    "basq.jpeg", "basq2.jpeg", "basq3.jpeg", "adi2.jpeg", "adi3.jpeg", "adi.jpeg",
    "gua.jpeg", "gua2.jpeg", "gua3.jpeg", "new r.jpeg", "new r2.jpeg", 
    "new r3.jpeg", "nike.jpeg", "nki4.webp", "nki2.webp", "travis.jpeg",
    "nki3.webp", "nki.webp", "jor4.jpg", "jor.jpg",
    "jor2.jpg", "jor3.jpg", "jor5.jpg", "und.jpg", "ree.jpg", 
    "ree2.jpg", "travis3.jpg", "nb.webp", "yee.webp", "travis2.jpg"
];

// Array de 30 DESCRIPCIONES únicas para cada producto.
const descripciones = [
    "La TWO WXY v4 es el primer modelo de baloncesto de New Balance que combina Fresh Foam X y FuelCell.",
    "Calzado exclusivo, provisto de una velocidad impresionante y con una amortiguación elástica.",
    "Decimosexto zapato de la firma de Kevin Durant con Nike Basketbal.",
    "Calzado diseñado para uso en canchas de baloncesto al aire libre y conocido por su durabilidad.",
    "Estos tenis adidas Initiation se han fabricado para ayudarte a encontrar tu ritmo en la cancha.",
    "Las adidas Gazelle Indoor Collegiate Green Preloved Yellow le dan un toque rastafari fresco a tu look.",
    "Guayos adidas Predator, diseñados para marcar goles.",
    "Las PRO MAX estan diseñadas para elevar tu rendimiento en el campo de césped.",
    "Guayos para los jóvenes jugadores que practican en terrenos naturales y sintéticos.",
    "Tanto si estás dando tus pasos diarios como entrenando para tu próxima carrera, hazlo con estilo y extrema comodidad.",
    "Diseñadas para entrenamientos de media maratón y maratón completa, estas zapatillas ofrecen comodidad en todo momento.",
    "El modelo FuelCell Rebel v5 fue diseñado para lucir y sentirse rápido.",
    "La amortiguación responsiva de los Pegasus proporciona una pisada enérgica para correr a diario en pavimento.",
    "La amortiguación visible, que se completa con colores fáciles de combinar, aporta comodidad a tu recorrido.",
    "El calzado de soporte neutro con Nike Air elástico y más espacio en el antepié brinda una sensación cómoda y amortiguada.",
    "La combinación de colores de las Air Jordan 1 Low viene con el Color Block de siempre, pero con los toques especiales que solo Scott y Fujiwara podían crear.",
    "Con sus líneas simples, el look de atletismo tradicional y, por supuesto, la amortiguación Air visible, el Nike Air Max SC es el toque final perfecto para cualquier atuendo.",
    "Zapatillas deportivas nike para mujer w nike renew in season tr 10.",
    "Los AJ4 “Rare Air” rinden homenaje a los comienzos inesperados.",
    "Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva.",
    "Las AJ3, un clásico desde que MJ los lleva, ponen un estilo legendario en tus pies.",
    "Blanco, gris, piel de becerro, motivo Jumpman característico, puntera redonda, cierre con agujetas en la parte delantera, plantilla con logo y suela de goma.",
    "las Air Jordan 11 Legend Blue tienen una profunda conexión con el panorama cultural y deportivo de la década de 1990.",
    "La tecnología New Charged Cushioning proporciona una respuesta máxima, manteniendo la comodidad y la durabilidad durante el rendimiento.",
    "Los colores te recuerdan que sea cual sea el deporte que apoyes, siempre estás en el equipo Reebok.",
    "La parte superior mezcla materiales para brindar textura y profundidad adicionales y darle una apariencia en capas.",
    "El Nike Air Max 1 x Cactus Jack es todo un homenaje a la superación de límites que combina detalles de estilo tradicional con looks todavía por pulir.",
    "La silueta aerodinámica y de caña baja de la 550, con su versión de diseño limpio y resistente de finales de los 80.",
    "Tennis Adidas Yezzy Boost 700 Carbon Blue.",
    "En tonos café terciopelo y moca oscuro, Travis Scott vuelve a darle un giro inesperado a los AJ1."
];

// Array de 30 NOMBRES personalizados. ¡DEBES EDITAR ESTOS NOMBRES!
const nombresModelos = [
    "New Balance TWO WXY V5",    // Modelo 1
    "Básquet Nike Freak 5",      // Modelo 2
    "Nike KD 16 Aunt Pearl",     // Modelo 3
    "Adidas Dame 8 Extply",      // Modelo 4
    "Adidas Initiation",         // Modelo 5
    "Adidas Gazelle Indor Collegiate",        // Modelo 6
    "Adidas Predator Elite",          // Modelo 7
    "Guayo Pro Max",          // Modelo 8
    "Guayos Kipsta Viralto",        // Modelo 9
    "New Balance Kaiha Road",        // Modelo 10 
    "New Balance SuperComp Trainer V3",    // Modelo 11 
    "New Balance FuelCell Rebel V5",    // Modelo 12 
    "Nike Pegasus 41",       // Modelo 13
    "Nike Air Max 90",      // Modelo 14
    "Nike Air Winflo",     // Modelo 15
    "Travis Scott x Fragment",       // Modelo 16
    "Nike Air Max SC",       // Modelo 17
    "Nike Renew",          // Modelo 18
    "Air Jordan 4 Rare Air",        // Modelo 19
    "Air Jordan 1 Mid",      // Modelo 20
    "Air Jordan 3 Retro",      // Modelo 21
    "Air Jordan 3 White Cement",      // Modelo 22
    "Air Jordan 11 Retro Legends Blue",       // Modelo 23
    "Tenis Running Charged Quicker",        // Modelo 24
    "Reebok Classic C Revenge",          // Modelo 25
    "Reebok Classic Glide",          // Modelo 26
    "Air Max 1 Cactus Jack x Travis Scott",        // Modelo 27
    "New Balance 550",       // Modelo 28
    "Adidas Yezzy Boost 700",     // Modelo 29
    "Air Jordan 1 x Travis Scott"     // Modelo 30
];

// Array de 30 PRECIOS personalizados (sin formato, solo números). ¡DEBES EDITAR ESTOS PRECIOS!
const preciosModelos = [
    520000, 480000, 550000, 610000, 420000, 
    530000, 490000, 560000, 450000, 464027, // El precio 464027 corresponde al Modelo 10 de tu imagen
    535938, 547256, 495000, 580000, 650000, 
    430000, 500000, 470000, 510000, 555000, 
    440000, 570000, 590000, 515000, 485000, 
    525000, 460000, 600000, 620000, 505000
];


// Seleccionamos el contenedor principal
const contenedor = document.getElementById("contenedor-productos");

// Creamos 10 secciones (Contenedores)
for (let s = 1; s <= 10; s++) {
    const seccion = document.createElement("section");
    seccion.classList.add("seccion");

    // NOTA: El código que crea y añade el título <h2> fue eliminado.
    
    // Contenedor de los 3 productos
    const grid = document.createElement("div");
    grid.classList.add("productos-grid");

    // Creamos 3 productos por sección
    for (let i = 1; i <= 3; i++) {
        // 'numero' irá de 1 a 30
        const numero = (s - 1) * 3 + i;

        // Obtenemos los datos del producto (índice 0 a 29)
        const nombreArchivo = nombresImagenes[numero - 1]; 
        const rutaImagen = `imagenes/${nombreArchivo}`; 
        const descripcionProducto = descripciones[numero - 1];
        const nombreModelo = nombresModelos[numero - 1];
        const precio = preciosModelos[numero - 1]; 

        const producto = document.createElement("div");
        producto.classList.add("producto");

        producto.innerHTML = `
            <img src="${rutaImagen}" alt="${nombreModelo}">
            <h3>${nombreModelo}</h3>
            <p>${descripcionProducto}</p>
            <span class="precio">$ ${precio.toLocaleString('es-CO')}</span>
        `;

        grid.appendChild(producto);
    }

    seccion.appendChild(grid);
    contenedor.appendChild(seccion);
}

// Botón "Comprar ahora" hace scroll hacia las secciones
document.getElementById("shopNow").addEventListener("click", () => {
    window.scrollTo({
        top: contenedor.offsetTop - 50,
        behavior: "smooth"
    });
});