
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

// Array de 30 NOMBRES de los productos
const nombresModelos = [
    "New Balance TWO WXY V5",    
    "Básquet Nike Freak 5",     
    "Nike KD 16 Aunt Pearl",     
    "Adidas Dame 8 Extply",      
    "Adidas Initiation",         
    "Adidas Gazelle Indor Collegiate",        
    "Adidas Predator Elite",          
    "Guayo Pro Max",          
    "Guayos Kipsta Viralto",        
    "New Balance Kaiha Road",       
    "New Balance SuperComp Trainer V3",   
    "New Balance FuelCell Rebel V5",    
    "Nike Pegasus 41",       
    "Nike Air Max 90",      
    "Nike Air Winflo",     
    "Travis Scott x Fragment",       
    "Nike Air Max SC",       
    "Nike Renew",          
    "Air Jordan 4 Rare Air",        
    "Air Jordan 1 Mid",      
    "Air Jordan 3 Retro",      
    "Air Jordan 3 White Cement",      
    "Air Jordan 11 Retro Legends Blue",      
    "Tenis Running Charged Quicker",        
    "Reebok Classic C Revenge",          
    "Reebok Classic Glide",         
    "Air Max 1 Cactus Jack x Travis Scott",        
    "New Balance 550",       
    "Adidas Yezzy Boost 700",     
    "Air Jordan 1 x Travis Scott"     
];

// Array de los 30 PRECIOS 
const preciosModelos = [
    520000, 480000, 550000, 610000, 420000, 
    530000, 490000, 560000, 450000, 464027, 
    535938, 547256, 495000, 580000, 650000, 
    430000, 500000, 470000, 510000, 555000, 
    440000, 570000, 590000, 515000, 485000, 
    525000, 460000, 600000, 620000, 505000
];


// este es el contenedor principal
const contenedor = document.getElementById("contenedor-productos");


for (let s = 1; s <= 10; s++) {
    const seccion = document.createElement("section");
    seccion.classList.add("seccion");

 
    
    // Contenedor de los 3 productos
    const grid = document.createElement("div");
    grid.classList.add("productos-grid");

    // Creo 3 productos por sección
    for (let i = 1; i <= 3; i++) {
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


document.getElementById("shopNow").addEventListener("click", () => {
    window.scrollTo({
        top: contenedor.offsetTop - 50,
        behavior: "smooth"
    });
});