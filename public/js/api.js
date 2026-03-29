/**
 * API Cliente - Carrito de Compra
 * Módulo para interactuar con la API REST del servidor
 */

const API_BASE_URL = '/api/carrito';

/**
 * Realiza una petición HTTP con manejo de errores
 */
async function hacerPeticion(url, opciones = {}) {
  try {
    const respuesta = await fetch(url, {
      ...opciones,
      headers: {
        'Content-Type': 'application/json',
        ...opciones.headers
      }
    });

    if (!respuesta.ok) {
      const error = await respuesta.text();
      throw new Error(`Error ${respuesta.status}: ${error}`);
    }

    // Si la respuesta está vacía (204 No Content), retorna null
    if (respuesta.status === 204) {
      return null;
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error en petición:', error);
    throw error;
  }
}

/**
 * FUNCIONES DE CARRITO
 */

/**
 * Crear un nuevo carrito
 */
async function crearCarrito(idUsuario, correo) {
  return hacerPeticion(`${API_BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify({
      idUsuario: parseInt(idUsuario),
      correo: correo
    })
  });
}

/**
 * Obtener un carrito por ID
 */
async function obtenerCarrito(idCarrito) {
  return hacerPeticion(`${API_BASE_URL}/${idCarrito}`);
}

/**
 * Actualizar datos de un carrito
 */
async function actualizarCarrito(idCarrito, datos) {
  return hacerPeticion(`${API_BASE_URL}/${idCarrito}`, {
    method: 'PUT',
    body: JSON.stringify(datos)
  });
}

/**
 * Eliminar un carrito
 */
async function eliminarCarrito(idCarrito) {
  return hacerPeticion(`${API_BASE_URL}/${idCarrito}`, {
    method: 'DELETE'
  });
}

/**
 * FUNCIONES DE LÍNEAS DE CARRITO
 */

/**
 * Agregar una línea al carrito
 */
async function agregarLineaCarrito(idCarrito, idArticulo, numeroUnidades, precioUnitario) {
  return hacerPeticion(`${API_BASE_URL}/${idCarrito}/lineas`, {
    method: 'POST',
    body: JSON.stringify({
      idArticulo: parseInt(idArticulo),
      numeroUnidades: parseInt(numeroUnidades),
      precioUnitario: parseFloat(precioUnitario)
    })
  });
}

/**
 * Eliminar una línea del carrito
 */
async function eliminarLineaCarrito(idCarrito, idLineaCarrito) {
  return hacerPeticion(`${API_BASE_URL}/${idCarrito}/lineas/${idLineaCarrito}`, {
    method: 'DELETE'
  });
}

/**
 * UTILIDADES
 */

/**
 * Mostrar una alerta en la página
 */
function mostrarAlerta(mensaje, tipo = 'info') {
  const contenedorAlertas = document.getElementById('contenedor-alertas');

  if (!contenedorAlertas) {
    console.warn('No se encontró contenedor de alertas');
    return;
  }

  const alerta = document.createElement('div');
  alerta.className = `alerta alerta-${tipo}`;
  alerta.innerHTML = `
    ${mensaje}
    <span class="cerrar-alerta" onclick="this.parentElement.style.display='none';">&times;</span>
  `;

  contenedorAlertas.appendChild(alerta);

  // Auto-remover después de 5 segundos
  setTimeout(() => {
    alerta.style.display = 'none';
  }, 5000);
}

/**
 * Formatear precio en moneda
 */
function formatearPrecio(precio) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(precio);
}

/**
 * Guardar dato en localStorage
 */
function guardarDato(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

/**
 * Obtener dato de localStorage
 */
function obtenerDato(clave) {
  const dato = localStorage.getItem(clave);
  return dato ? JSON.parse(dato) : null;
}

/**
 * Limpiar localStorage
 */
function limpiarDatos() {
  localStorage.clear();
}

/**
 * Validar email
 */
function esEmailValido(email) {
  const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresion.test(email);
}

/**
 * Establecer página activa en navegación
 */
function establecerNavegacionActiva() {
  const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('nav a').forEach(enlace => {
    const href = enlace.getAttribute('href');
    if (href === paginaActual || (paginaActual === '' && href === 'index.html')) {
      enlace.classList.add('activo');
    } else {
      enlace.classList.remove('activo');
    }
  });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', establecerNavegacionActiva);
