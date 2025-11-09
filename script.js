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
    "Clásico de lona reinventado con plantillas de espuma viscoelástica.",
    "Modelo exclusivo de diseñador con detalles de cuero italiano.",
    "Versión impermeable para clima frío, mantiene tus pies secos y cálidos.",
    "Innovadora suela dividida para una flexibilidad y tracción inigualables.",
    "Unisex, ideal para entrenamiento cruzado y levantamiento de pesas.",
    "Estilo vintage de los 80, combinando colores vibrantes y materiales premium.",
    "Diseño aerodinámico inspirado en la velocidad, para el corredor más rápido.",
    "Colaboración especial con amortiguación visible y detalles reflectantes.",
    "Zapatilla con refuerzos para el skate, durabilidad probada en trucos.",
    "Diseño de corte alto con soporte extra para el tobillo.",
    "Transpirable y ligera, la mejor opción para el verano.",
    "Modelo personalizable con parches y cordones intercambiables.",
    "Edición 'Glow in the dark', que brilla en la oscuridad.",
    "Zapatilla de estilo casual con un toque formal, versátil para cualquier ocasión.",
    "Tecnología de absorción de impacto, protege tus rodillas y articulaciones.",
    "Hecha de punto (knit) elástico que se adapta a la forma del pie.",
    "Suela gruesa para mayor altura y un estilo 'chunky'.",
    "Zapatilla liviana con sistema de ventilación superior.",
    "Diseño camuflado para el estilo militar o urbano más discreto.",
    "Versión con cierre de velcro, rápida y fácil de poner.",
    "Edición con detalles metálicos, para un acabado lujoso.",
    "Modelo de edición anual conmemorativa, pieza de colección.",
    "La zapatilla más vendida del año, comodidad garantizada."
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
    "Gua 3.0 Fly",          // Modelo 8
    "New R. Xpress",        // Modelo 9
    "New R. R2 Pro",        // Modelo 10 (Se ve en la imagen que subiste)
    "New R. R3 Trainer",    // Modelo 11 (Se ve en la imagen que subiste)
    "Nike Air Zoom Pro",    // Modelo 12 (Se ve en la imagen que subiste)
    "Nike Max Run 2",       // Modelo 13
    "Nike Tech Racer",      // Modelo 14
    "Travis Scott Low",     // Modelo 15
    "Auis Pro Skate",       // Modelo 16
    "Basq Pro Court",       // Modelo 17
    "Basq Summer",          // Modelo 18
    "Basq 360 Knit",        // Modelo 19
    "Descarga Custom",      // Modelo 20
    "Gua Formal Slip",      // Modelo 21
    "Gua Impact Zero",      // Modelo 22
    "Gua Knit Adapt",       // Modelo 23
    "New R. Chunky",        // Modelo 24
    "New R. Aero",          // Modelo 25
    "New R. Camo",          // Modelo 26
    "New R. Velcro",        // Modelo 27
    "New Balance 550",       // Modelo 28
    "Nike Anniversary",     // Modelo 29
    "Travis Bestseller"     // Modelo 30
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