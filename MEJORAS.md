# Plan de mejoras (fase 2)

El sitio quedó migrado tal como estaba en Google Sites. Esta es la lista de mejoras propuesta, ordenada por impacto. Cada punto puede convertirse en un *Issue* de GitHub y resolverse en su propia rama con un *Pull Request*.

El contenido actualizado de referencia es el brochure de octubre de 2026 (`Araucan_IA_Brochure.pdf` en el Drive del negocio).

## Prioridad alta: contenido y contacto

- [ ] **Portada con propuesta clara.** Reemplazar "Inteligencia Artificial para tus negocios" por la propuesta del brochure: *Contenido con inteligencia artificial para pymes de La Araucanía*, con el subtítulo y un botón visible a WhatsApp ("Recibe una idea de contenido gratis").
- [ ] **Servicios vigentes.** Cambiar los seis servicios actuales por los del brochure:
  - Contenido: videos y reels, imágenes de producto, voces y locuciones, logos e identidad, avatares digitales, gestión de redes y contenido en serie.
  - Más soluciones: video con dron, campañas pagadas, chatbot con IA, páginas web, plantillas Excel, asesoría y clases de IA, y soporte técnico.
- [ ] **Cómo trabajamos y por qué Araucan IA.** Sumar los cuatro pasos (conversamos, briefing y propuesta, producción, entrega y ajustes) y los tres diferenciadores del brochure.
- [ ] **Precios.** Decidir si se publican los valores de referencia (video desde $45.000 + IVA, plan mensual desde $150.000 por 4 videos, contenido + ads a cotizar, pago 50/50) o si la web solo invita a cotizar.
- [ ] **Contacto en todas las secciones clave.** Botón flotante de WhatsApp en celulares; "Más información" hoy lleva a LinkedIn y conviene que lleve a WhatsApp o a una sección de contacto con correo, redes y ubicación.
- [ ] **Completar o quitar lo pendiente.** Workflows ("Personalización" y "Digitalización" están vacíos), Partners, fotos del equipo y la sección de ayuda.
- [ ] **Testimonios reales** de clientes, con su autorización, en lugar del testimonio de ejemplo.
- [ ] **Colaboradores.** Confirmar que los cuatro negocios siguen de acuerdo con aparecer y sumar clientes nuevos.
- [ ] **Correcciones rápidas:** "Cotenido" → "Contenido", "Quienes Somos" → "Quiénes somos" y el año del pie de página.

## Prioridad media: marca y diseño

- [ ] **Identidad visual vigente.** Usar los logos SVG oficiales (ya incluidos en `assets/img/marca/`) y la paleta del brochure (verde oscuro #17402F, verde #2F9B63, menta #E4F4EA, celeste #7CC3E6) en lugar del tema amarillo y gris de Google Sites.
- [ ] **Diseño pensado primero para celulares,** con textos legibles, botones grandes y buen contraste (WCAG AA).
- [ ] **Mostrar trabajos reales:** reels, imágenes de producto y el spot de la marca, en vez de imágenes genéricas.

## Prioridad media: técnico, SEO y privacidad

- [ ] **SEO básico:** título y descripción propios en cada página, imagen para compartir en WhatsApp y redes (Open Graph), datos estructurados de negocio local (Temuco), `sitemap.xml`, `robots.txt` y alta en Google Search Console.
- [ ] **Dominio propio (opcional),** por ejemplo un `.cl`, configurado en GitHub Pages con HTTPS.
- [ ] **Aviso de privacidad** acorde a la Ley 21.719, sobre todo si se agrega analítica o un formulario.
- [ ] **Medición de visitas** sin cookies, o con aviso de consentimiento si se usan.
- [ ] **Rendimiento:** imágenes de fondo más livianas para celulares y precarga de la portada.

## Prioridad baja: crecimiento

- [ ] **Versión en inglés** para clientes de Estados Unidos y España, a partir del brochure y la lista de precios en inglés.
- [ ] **Páginas por rubro** (automotoras, inmobiliarias, abogados, servicios locales) con ejemplos para cada uno.
- [ ] **Otros servicios** que quieras ofrecer en la web, como las tarjetas NFC de reseñas o la línea de apoyo para la Ley 21.719.

## Cómo trabajar cada mejora desde GitHub

1. Crea un *Issue* con el punto de la lista.
2. Crea una rama para ese punto (por ejemplo `mejora/portada`).
3. Haz los cambios, súbelos y abre un *Pull Request* hacia `main`.
4. Revisa el resultado y fusiona el PR: GitHub Pages publica la nueva versión en uno o dos minutos.
