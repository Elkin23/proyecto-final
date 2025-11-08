// Lista de los nombres de tus 30 archivos de imagen.
// ¡IMPORTANTE! Revisa y completa esta lista con los nombres exactos de tus 30 imágenes.
const nombresImagenes = [
    "Air_Jordan.jpeg", "basq.jpeg", "basq2.jpeg", "basq3.jpeg", "descarga.jpeg", 
    "gua.jpeg", "gua2.jpeg", "gua3.jpeg", "new r.jpeg", "new r2.jpeg", 
    "new r3.jpeg", "nike.jpeg", "nike2.jpeg", "nike3.jpeg", "travis.jpeg",
    "auis.jpeg", "basq.jpeg", "basq2.jpeg", "basq3.jpeg", "descarga.jpeg",
    "gua.jpeg", "gua2.jpeg", "gua3.jpeg", "new r.jpeg", "new r2.jpeg", 
    "new r3.jpeg", "nike.jpeg", "nike2.jpeg", "nike3.jpeg", "travis.jpeg"
];

// Array de 30 DESCRIPCIONES únicas para cada producto.
const descripciones = [
    "La zapatilla icónica que define la historia del baloncesto y el estilo urbano.",
    "Diseño minimalista con amortiguación de alto rendimiento, ideal para el running diario.",
    "Modelo retro con plataforma, perfecto para un look audaz y cómodo.",
    "Edición limitada con suela de carbono, máxima ligereza para atletas de élite.",
    "Calzado ecológico fabricado con materiales reciclados, estilo sostenible.",
    "Zapatilla de trail con agarre extremo, lista para cualquier aventura en montaña.",
    "Diseño futurista con tecnología de auto-ajuste y luces LED incorporadas.",
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
    "Jordan Legacy High",    // Modelo 1
    "Basq Runner Pro",      // Modelo 2
    "Basq City V2",         // Modelo 3
    "Basq Carbon X",        // Modelo 4
    "Descarga Vintage",     // Modelo 5
    "Gua Trail GTX",        // Modelo 6
    "Gua 2.0 Max",          // Modelo 7
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
    "Nike Lux Metal",       // Modelo 28
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