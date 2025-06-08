# 📚 Bookies

**Bookies** es una aplicación web desarrollada para ayudar a los usuarios a gestionar sus lecturas, descubrir libros y compartir reseñas o historias personales. Diseñada para ser intuitiva y funcional, ofrece tanto funcionalidades públicas como privadas, garantizando una experiencia accesible para todo tipo de lectores.

---

## ✨ Características principales

### 🔓 Parte pública (sin necesidad de registro)
- 🔍 **Búsqueda de libros**: Explora libros por título, autor o categoría.
- 📄 **Detalles del libro**: Visualiza sinopsis, datos bibliográficos y reseñas públicas.
- 🏆 **Ranking mensual**: Descubre los libros más populares del mes.
- 🧾 **Acceso directo a reseñas**: Cualquier visitante puede leer las reseñas de los libros.

### 🔐 Parte privada (requiere registro e inicio de sesión)
- 📚 **Biblioteca personal**:
  - Añadir/eliminar libros.
  - Clasificar lecturas por estado: *Reading, Planned, On Hold, Dropped, Completed, Rereading*.
  - Organizar libros en carpetas personalizadas y etiquetarlos.
- ✍️ **Gestión de reseñas**:
  - Escribir y publicar reseñas.
  - Puntuar libros con valoraciones de 1 a 5 (🍪).
- 📤 **Importación de documentos** (planificado): Sube archivos desde tu dispositivo, accesibles desde tu perfil.
- 📝 **Editor de texto en línea** (como funcionalidad opcional): Escribe historias o notas directamente en la plataforma.
- 🗣️ **Foro literario** (como funcionalidad opcional):
  - Lectura pública de temas y respuestas.
  - Participación activa para usuarios registrados (crear, editar y eliminar publicaciones).

---

## ⚙️ Tecnologías utilizadas

- **Frontend**: Angular (con opción a componentes standalone)
- **Backend**: Laravel (API RESTful con Laravel Sanctum para autenticación)
- **Base de datos**: MySQL (gestionada con Docker)
- **Estilos**: CSS puro (con posibilidad de adoptar librerías si el diseño lo requiere)

---

## 🧪 Estado actual del proyecto

- ✅ Autenticación de usuarios (registro, login, recuperación de contraseña)
- ✅ Gestión de lecturas y estados
- ✅ Visualización de libros y reseñas públicas
- ✅ Creación y listado de reseñas
- ✅ Importación de obras propias
- ✅ Foro

