# 👟 SneakersShop 

Un sitio web moderno que muestra la **colección 2025 de zapatillas deportivas**, desarrollado con **HTML, CSS y JavaScript puro**, mostrando los productos de forma dinámica y atractiva.

---

## 🖥️ **Descripción del proyecto**

**SneakersShop** es una página web estática que presenta una galería de **30 productos deportivos** (tenis, guayos y zapatillas de diferentes marcas).  
Su contenido se genera **dinámicamente desde JavaScript**, con imágenes, nombres, descripciones y precios.  

El sitio incluye:
- Encabezado con menú de navegación y barra de búsqueda.  
- Sección principal de héroe (hero section) con botón de desplazamiento.  
- Grid de productos dinámico, dividido en secciones.  
- Pie de página con enlaces a redes sociales.  

---

## 🚀 **Características principales**

✅ Generación dinámica de productos desde arrays en `script.js`.  
✅ Navegación moderna y responsive.  
✅ Scroll suave hacia la sección de productos.  
✅ Diseño limpio y centrado en la experiencia del usuario.  
✅ Estructura de carpetas organizada y escalable.  

---

## 🧩 **Tecnologías utilizadas**

| Tecnología | Descripción |
|-------------|-------------|
| 🧱 **HTML5** | Estructura principal de la página. |
| 🎨 **CSS3** | Diseño visual y estilos personalizados. |
| ⚙️ **JavaScript (ES6)** | Generación dinámica de contenido y funciones interactivas. |

---

## 🗂️ **Estructura del proyecto**

📦 PAGINA WEB
┣ 📂 imagenes/ # Carpeta que contiene todas las imágenes de los productos
┣ 📜 index.html # Archivo principal de la página web
┣ 📜 styles.css # Hoja de estilos (CSS)
┗ 📜 script.js # Lógica de la página (generación dinámica de productos, scroll, etc.)

yaml
Copiar código

---

## 🧠 **Funcionamiento**

El archivo `script.js` contiene cuatro arreglos:
- `nombresImagenes`: rutas de las imágenes.
- `descripciones`: texto descriptivo para cada producto.
- `nombresModelos`: nombres de los modelos.
- `preciosModelos`: precios de los productos.

El script genera automáticamente las secciones y productos dentro del contenedor principal (`#contenedor-productos`) del archivo `index.html`.

Además, el botón **"Comprar ahora"** realiza un **scroll suave** hasta la galería principal.

---

## ⚙️ **Cómo ejecutar el proyecto**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Elkin23/proyecto-final
Abre la carpeta del proyecto en Visual Studio Code.

Asegúrate de tener las imágenes dentro de la carpeta imagenes/.

Haz clic derecho sobre index.html → “Open with Live Server” (si tienes la extensión instalada).

Disfruta de la vista de la nueva colección 2025. 👟

🌐 Vista previa
(Opcional) Puedes alojar este proyecto en GitHub Pages:

Sube tu repositorio.

Activa GitHub Pages desde la pestaña Settings → Pages.

Accede con la URL: https://elkin23.github.io/proyecto-final/

👨‍💻 Autor
Elkin Solis