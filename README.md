# Araucan IA — sitio web

Sitio estático de [Araucan IA](https://araucania.github.io) (HTML, CSS y un poco de JavaScript, sin compilación), publicado con GitHub Pages.

## Estado

- **8 nov 2026:** migrado desde Google Sites (sitio "Araucan IA" del Drive del negocio, última edición el 21 sep 2026; nunca estuvo publicado).
- Esta primera versión es una **copia fiel** del sitio original. Las mejoras están planificadas en [MEJORAS.md](MEJORAS.md).

## Estructura

```
index.html            Página principal
documentacion.html    Documentación (Quiénes somos, equipo, ayuda)
404.html              Página que GitHub muestra para enlaces rotos
favicon.ico
assets/
  css/styles.css      Estilos (colores y tipografías en las variables de :root)
  js/main.js          Menú en celulares, barra de navegación y desplegables
  img/                Imágenes en WebP
  img/marca/          Logos oficiales en SVG (Brandkit, para la fase de mejoras)
  icons/              Íconos del sitio (favicon, ícono de Apple)
  fonts/              Tipografías Roboto, Roboto Mono y PT Sans (alojadas aquí)
MEJORAS.md            Plan de mejoras (fase 2)
```

## Ver el sitio en tu computador

- Doble clic en `index.html` y se abre en tu navegador.
- O, en VS Code, instala la extensión **Live Server** y usa **Go Live** para ver los cambios al guardar.

## Publicar por primera vez (VS Code + GitHub Pages)

1. **Git:** si VS Code no lo detecta, instala [Git para Windows](https://git-scm.com/download/win) y reinicia VS Code. Al primer commit te pedirá tu nombre y correo.
2. **Crear el repositorio vacío en GitHub:** en github.com → **New repository** → *Owner:* `AraucanIA` → *Repository name:* `AraucanIA.github.io` → **Public** → sin README, sin .gitignore y sin licencia → **Create repository**.
3. **Abrir el proyecto:** en VS Code, *Archivo → Abrir carpeta…* y elige esta carpeta. Ya trae Git con el commit de la migración.
4. **Conectar con GitHub:** abre *Control de código fuente* (Ctrl+Shift+G) → menú **…** → *Remoto → Agregar remoto* (*Remote → Add Remote*). Pega `https://github.com/AraucanIA/AraucanIA.github.io.git` y ponle de nombre `origin`.
5. **Subir:** haz clic en **Publicar rama** (*Publish Branch*). La primera vez VS Code te pide iniciar sesión en GitHub.
6. **Activar la página:** en el repositorio, *Settings → Pages* → *Source:* **Deploy from a branch** → *Branch:* `main` y `/ (root)` → **Save**. En uno o dos minutos queda en línea en <https://araucania.github.io>.

## Hacer cambios

1. Edita los archivos en VS Code.
2. En *Control de código fuente*, escribe un mensaje que diga qué cambiaste → **Confirmar** (*Commit*) → **Sincronizar** (*Sync / Push*).
3. GitHub Pages actualiza el sitio solo, en uno o dos minutos.

Para mejoras grandes conviene trabajar en una rama nueva y abrir un *Pull Request* en GitHub: así revisas los cambios antes de que se publiquen.

**Dónde está cada cosa**

- Textos: `index.html` y `documentacion.html`.
- Colores y tipografías: bloque `:root` al inicio de `assets/css/styles.css`.
- Imágenes: `assets/img/`. Usa WebP y procura que pesen menos de 300 KB.
- WhatsApp: los botones usan `https://wa.me/message/2SJY6SYY5FPGD1`.

## Notas de la migración

**Se migró tal cual:** las dos páginas (Página principal y Documentación), sus textos, imágenes, colores, tipografías, enlaces (TikTok, Instagram, LinkedIn y WhatsApp) y el orden de las secciones.

**No se publicó** (quedó como comentario en el HTML, marcado con `PENDIENTE` o `NO MIGRADO`, para decidir en la fase 2):

- El testimonio "Este producto superó todas mis expectativas…" (María Pérez, Temuco): parece texto de ejemplo del bloque insertado. Si es de un cliente real, se puede reponer.
- Textos de plantilla de Google Sites sin completar: "Paso 1 / Paso 2 / Paso 3", las cuatro tarjetas "Nombre del documento", el párrafo de ayuda genérico y el botón "Foro de ayuda" que llevaba a google.com.
- Marcadores de imagen vacíos (fotos del equipo y dos secciones de Documentación), que tampoco se verían en un Google Site publicado.
- El buscador de Google Sites, que no existe en un sitio estático.

**Se mantuvo sin corregir**, para que la migración sea una copia fiel: "Cotenido", "Quienes Somos" sin tilde y el año 2025 del pie de página. Están en la lista de MEJORAS.md.

**Cambios técnicos que no se ven:** imágenes convertidas a WebP (unos 1,1 MB en total), tipografías alojadas en el propio sitio, menú para celulares, enlaces directos (sin la redirección de google.com/url) y textos alternativos en las imágenes.
