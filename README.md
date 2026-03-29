# 🛒 Frontend - Carrito de Compra

## Descripción
Frontend completo y responsivo para la aplicación de Carrito de Compra desarrollado con **HTML5**, **CSS3** y **JavaScript vanilla**.

## Características
✅ 4 páginas interconectadas  
✅ Interfaz responsiva y moderna  
✅ Integración con API REST  
✅ Formularios validados  
✅ Tablas de datos  
✅ Navegación consistente  
✅ Alertas y retroalimentación  
✅ Almacenamiento local (localStorage)  

## Estructura de Archivos

```
public/
├── index.html                 # Página principal
├── crear-carrito.html         # Crear nuevo carrito
├── ver-carrito.html           # Gestionar carrito
├── ayuda.html                 # Centro de ayuda
├── css/
│   └── estilo.css             # Estilos globales (responsive)
├── js/
│   └── api.js                 # Cliente para la API REST
└── img/                       # Carpeta para imágenes
```

## Páginas

### 1. **index.html** - Página de Inicio
- Introducción a la aplicación
- Características principales (tarjetas)
- Guía de primeros pasos
- Información técnica
- Preguntas frecuentes
- Estadísticas

**Elementos HTML utilizados:**
- Títulos (`<h1>`, `<h2>`, `<h3>`)
- Párrafos (`<p>`)
- Listas (`<ul>`, `<li>`)
- Tablas (`<table>`)
- Tarjetas personalizadas
- Navegación

### 2. **crear-carrito.html** - Crear Carrito
- Formulario para crear nuevo carrito
- Campos: ID Usuario, Correo electrónico
- Visualización de resultados
- Datos de ejemplo
- Validación de email

**Elementos HTML utilizados:**
- Formularios (`<form>`, `<input>`, `<label>`)
- Validación
- Tablas de resultados
- Botones interactivos

### 3. **ver-carrito.html** - Gestionar Carrito
- Cargar carrito existente
- Tabla de artículos en el carrito
- Agregar artículos (con formulario)
- Eliminar artículos
- Visualización de totales
- Artículos de ejemplo

**Elementos HTML utilizados:**
- Formularios múltiples
- Tablas con datos dinámicos
- Botones de acción
- Información de estado
- Validación de campos

### 4. **ayuda.html** - Centro de Ayuda
- Tabla de contenidos con navegación
- Guías detalladas
- Preguntas frecuentes
- Solución de problemas
- Especificaciones técnicas
- Documentación de API

**Elementos HTML utilizados:**
- Títulos jerárquicos
- Párrafos explicativos
- Listas ordenadas y desordenadas
- Tablas técnicas
- Enlaces internos
- Secciones organizadas

## Estilos CSS

### Características del CSS (`estilo.css`)
- **Responsivo:** Mobile-first, adaptable a cualquier pantalla
- **Variables CSS:** Colores centralizados
- **Animaciones:** Transiciones suaves
- **Grid/Flexbox:** Layouts modernos
- **Tema consistente:** Colores y estilos uniformes
- **Accesibilidad:** Contraste adecuado, navegación clara

### Paleta de Colores
```
Primario:     #2c3e50 (Azul oscuro)
Secundario:   #3498db (Azul claro)
Éxito:        #27ae60 (Verde)
Peligro:      #e74c3c (Rojo)
Advertencia:  #f39c12 (Naranja)
Fondo:        #ecf0f1 (Gris claro)
```

## JavaScript (`api.js`)

### Funcionalidades
- **Cliente REST:** Funciones para interactuar con la API
- **Manejo de Peticiones:** Fetch API con manejo de errores
- **LocalStorage:** Guardado de datos en navegador
- **Validación:** Email y otros campos
- **Utilidades:** Formateo de precios, navegación activa

### Funciones Principales
```javascript
// Carrito
crearCarrito(idUsuario, correo)
obtenerCarrito(idCarrito)
actualizarCarrito(idCarrito, datos)
eliminarCarrito(idCarrito)

// Líneas de Carrito
agregarLineaCarrito(idCarrito, idArticulo, cantidad, precio)
eliminarLineaCarrito(idCarrito, idLineaCarrito)

// Utilidades
mostrarAlerta(mensaje, tipo)
formatearPrecio(precio)
guardarDato(clave, valor)
esEmailValido(email)
```

## Cómo Usar

### Instalación
1. Coloca los archivos en `src/main/resources/public/`
2. La aplicación Spring Boot sirve estos archivos automáticamente
3. Accede a `http://localhost:8080/` en tu navegador

### Flujo de Uso
1. **Inicio:** Explora la página principal
2. **Crear Carrito:** Completa el formulario con tu ID y correo
3. **Ver Carrito:** Carga tu carrito y agrega artículos
4. **Ayuda:** Consulta el centro de ayuda si necesitas asistencia

## Características Responsivas

- **Desktop:** Diseño completo con varias columnas
- **Tablet:** Ajuste de columnas, navegación adaptada
- **Mobile:** Layout en una columna, menú optimizado

### Breakpoints
- `768px`: Cambio a tablet
- `480px`: Cambio a mobile

## Elementos Multimedia

- **Iconos emoji:** Utilizados para mejorar la interfaz
- **Imágenes placeholder:** Reservadas en sección de ayuda
- **Animaciones CSS:** Efectos de transición suave
- **Fondos gradiente:** Mejora visual

## Validación

### Frontend
- Email válido
- Campos obligatorios
- Números positivos para cantidades y precios

### Backend
- Validación completa en el servidor
- Manejo de errores
- Respuestas significativas

## Accesibilidad

- Etiquetas semánticas HTML5
- Contraste de colores adecuado
- Navegación clara
- Validación de formularios
- Mensajes de error descriptivos

## Cumplimiento de Requisitos

✅ **Página principal + 3 páginas interiores interconectadas**
- index.html (Inicio)
- crear-carrito.html (Crear)
- ver-carrito.html (Gestionar)
- ayuda.html (Ayuda)

✅ **Elementos HTML diversos**
- Títulos (`<h1>` a `<h3>`)
- Párrafos (`<p>`)
- Tablas (`<table>`)
- Formularios (`<form>`)
- Listas (`<ul>`, `<ol>`)
- Enlaces (`<a>`)
- Multimedia (iconos, espacios para imágenes)

✅ **CSS Uniforme y Personal**
- Estilo consistente en todas las páginas
- Colores y tipografía elegidos
- Responsive design
- Animaciones y efectos

✅ **Código Limpio**
- HTML semántico
- CSS organizado
- JavaScript modular
- Comentarios explicativos

## Navegador Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notas
- La aplicación requiere que Spring Boot esté ejecutándose
- Los datos se procesan a través de la API REST del backend
- El localStorage solo almacena referencias locales
- La compatibilidad es total en navegadores modernos

## Autor
Desarrollado para la práctica 3 de desarrollo web

## Licencia
MIT
