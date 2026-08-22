# AGENTS.md — Donde Juanita

Instrucciones para IAs y desarrolladores que mantengan este sitio.

## Proyecto

- **URL**: https://0z4c4.github.io/dondejuanita/
- **Repo**: https://github.com/0z4c4/dondejuanita.git
- **Stack**: React 19 + TypeScript + Vite + Zustand + React Router 7 (PWA)
- **Package manager**: pnpm (v11.18.0) — no usar npm
- **Deploy**: `pnpm run deploy` (build + push de `dist/` a rama `gh-pages`,
  mismo método que el proyecto portfolio)
- **Base path**: `/dondejuanita` — configurado en:
  - `vite.config.ts` (`base` y manifest PWA)
  - `src/main.tsx` (`BrowserRouter basename`)
  - `src/data/content.ts` (constante `BASE`)

Si el nombre del repo cambia, actualizar esos tres lugares.

## Comandos

```bash
pnpm run dev      # Desarrollo
pnpm run build    # TypeScript + Vite build (output: dist/)
pnpm run lint     # Oxlint
pnpm run deploy   # Build + deploy a gh-pages
```

## Fuentes de datos (verdad oficial)

El contenido del sitio NO se edita directamente en el código sin antes
consultar estas fuentes. Ante cualquier duda, manda la fuente externa:

| Qué | Dónde | URL |
|-----|-------|-----|
| Datos (salas, carta, config) | Google Sheets "dondejuanita" | https://docs.google.com/spreadsheets/d/1yW7lH2ZMKQgTmhJI9NlA1lXZeUslTsEtSIKB-vk3bSI/edit |
| Imágenes | Google Drive, carpeta "dondejuanita" | https://drive.google.com/drive/folders/1wJFpTCHCbQ_K6V5Sbpc7BIqnVvc8CjfO |

IDs para scripts/comandos:

- Spreadsheet ID: `1yW7lH2ZMKQgTmhJI9NlA1lXZeUslTsEtSIKB-vk3bSI`
- Drive folder ID: `1wJFpTCHCbQ_K6V5Sbpc7BIqnVvc8CjfO`

Ambos están compartidos como "cualquiera con el enlace puede ver".

## Escritura en Sheets/Drive (service account)

Para escribir (poblar/editar la hoja, subir imágenes) existe un service
account ya configurado:

- Email: `dondejuanita-bot@dondejuanita-web.iam.gserviceaccount.com` (Editor
  de la hoja y de la carpeta de Drive)
- Clave JSON: `~/.config/gcloud/dondejuanita-sa.json` — NUNCA commitear ni
  imprimir su contenido
- Token con scopes correctos: `TOKEN=$(~/.local/bin/dondejuanita-token)`
  (los tokens por defecto de gcloud NO sirven para Sheets/Drive)
- Proyecto GCP: `dondejuanita-web` (Sheets API + Drive API habilitadas)

También existe el agente local de opencode `.opencode/agent/sheets.md`
(especializado en estas operaciones).

## Estructura de la hoja de cálculo

Cuatro pestañas obligatorias: `salas`, `menu`, `juegos`, `config`.
La primera fila es siempre el encabezado (no se lee como dato).

### Pestaña `salas`

| Columna | Tipo | Notas |
|---------|------|-------|
| id | texto | único, estable |
| nombre | texto | |
| tematica | texto | etiqueta corta |
| descripcion | texto largo | |
| capacidad | número | personas |
| precio_hora | número | en Bs |
| fotos | texto | nombres separados por coma: `selva1.jpg, selva2.jpg` |
| activo | TRUE/FALSE | filas FALSE se omiten del sitio |

### Pestaña `menu`

| Columna | Tipo | Notas |
|---------|------|-------|
| id | texto | único, estable |
| categoria | texto | agrupa la carta; define subcarpeta en Drive |
| nombre | texto | |
| descripcion | texto | |
| precio | número | en Bs; para bebidas con jarra es el precio del vaso |
| precio_jarra | número | OPCIONAL, solo bebidas que se venden por vaso y jarra |
| imagen | texto | nombre de archivo: `arepa.jpg` (vacío si aún no hay foto) |
| activo | TRUE/FALSE | filas FALSE se omiten del sitio |

Categorías actuales: Horneados Típicos, Masacos, Postres, Tortas,
Bebidas Calientes, Bebidas Frías.

### Pestaña `juegos`

Juegos disponibles en el local (se usan a cambio del Carnet de identidad,
sin costo). Página informativa, sin modal ni precios.

| Columna | Tipo | Notas |
|---------|------|-------|
| id | texto | único, estable |
| nombre | texto | |
| imagen | texto | nombre de archivo o URL; se muestra en la card |
| activo | TRUE/FALSE | filas FALSE se omiten del sitio |

### Pestaña `config`

Dos columnas (`clave`, `valor`). Claves válidas:

```
whatsapp_numero          ej: 59100000000  (sin + ni espacios)
whatsapp_mensaje_reserva mensaje prellenado del botón Reservar
horario_lun_vie          ej: 8:00 - 22:00
horario_sab_dom          ej: 9:00 - 23:00
facebook_url
instagram_url
google_maps_url
direccion
```

## Estructura de carpetas en Drive

```
dondejuanita/
├── hero-bg-image.jpg     ← imágenes raíz del landing (hero, highlights,
├── highlight1.jpg           logo, about). Se convierten a .webp local;
├── logo.png                 los nombres NO van en la hoja
├── salas/
│   ├── selva1.jpg        ← nombres = columna `fotos` de la hoja
│   └── ...
├── menu/
│   ├── Horneados Típicos/
│   │   └── arepa.jpg     ← subcarpeta = columna `categoria`
│   ├── Masacos/
│   ├── Postres/
│   ├── Tortas/
│   ├── Bebidas Calientes/
│   └── Bebidas Frías/
└── juegos/
    └── ajedrez.jpeg      ← nombres = columna `imagen` de `juegos`
```

Reglas:

- El nombre del archivo en Drive DEBE coincidir exactamente con lo
  escrito en la hoja (sensible a mayúsculas y acentos).
- Las categorías del menú son también nombres de subcarpeta.

## Dónde vive el código

- **`src/data/content.ts`** — ÚNICO archivo con contenido: exporta
  `salas`, `menu`, `juegos`, `config`, el helper `whatsappLink()` y
  `asset(ruta)` que antepone `/dondejuanita` a rutas locales.
  Cualquier cambio de datos se hace aquí.
- `src/store/useStore.ts` — solo expone salas/menu/juegos vía Zustand
  (no contiene datos).
- Páginas: `/` (Landing), `/salas`, `/menu` (carta, cards abren modal),
  `/juegos` (cards informativos, SIN modal). La ruta vieja `/precios`
  redirige a `/menu`.
- Los textos/imágenes del Landing (hero, about, highlights, horarios/mapa,
  CTA) viven directo en `src/pages/Landing.tsx`; de la hoja solo vienen
  salas, menu, juegos y config.
- Imágenes locales: `public/img/salas/`, `public/img/menu/<Categoria>/`,
  `public/img/juegos/` e imágenes sueltas del landing en `public/img/`
  (`hero-bg.webp`, `highlight-*.webp`, `empanada-landing[-left].webp`).
- Los campos `fotos`/`imagen` aceptan ruta local envuelta con `asset()`
  (ej.: `asset('img/menu/Bebidas Calientes/espresso.webp')`) o URL externa.
- Ya no hay placeholders picsum: todo usa imágenes locales reales; si una
  foto falta se reusa otra existente como fallback.

## Procedimiento de actualización (cuando cambien Sheets o Drive)

1. **Leer la hoja** (funciona sin autenticación, verificado):
   ```bash
   curl -sL "https://docs.google.com/spreadsheets/d/1yW7lH2ZMKQgTmhJI9NlA1lXZeUslTsEtSIKB-vk3bSI/gviz/tq?tqx=out:csv&sheet=salas"
   # repetir con sheet=menu y sheet=config
   ```
   Si una pestaña no existe o está vacía, avisar al usuario antes de
   continuar. Omitir filas con `activo=FALSE`.

2. **Descargar imágenes nuevas o modificadas** desde Drive:
   ```bash
   pip install gdown            # si no está instalado
   gdown --folder "https://drive.google.com/drive/folders/1wJFpTCHCbQ_K6V5Sbpc7BIqnVvc8CjfO" -O /tmp/opencode/drive
   ```
   Archivo individual por ID:
   ```bash
   curl -L "https://drive.google.com/uc?export=download&id=<FILE_ID>" -o <nombre>.jpg
   ```
   Convertir SIEMPRE a `.webp` (calidad 80) antes de copiar:
   ```bash
   ffmpeg -y -i entrada.jpg -quality 80 public/img/<destino>/salida.webp
   # recortes: -vf "crop=iw/2:ih:0:0"  (mitad izquierda)
   ```
   Destinos: `public/img/salas/`, `public/img/menu/<Categoria>/`,
   `public/img/juegos/` o `public/img/` (landing).

3. **Actualizar `src/data/content.ts`**: reflejar datos e imágenes
   (rutas `/img/...`). No tocar interfaces ni estructura sin necesidad.

4. **Verificar**: `pnpm run lint && pnpm run build`. Revisar que no
   queden referencias a imágenes inexistentes en `public/img/`.

5. **Publicar**: commit + push de main y `pnpm run deploy` (rama
   `gh-pages`). El `base` ya está configurado en `/dondejuanita`.

## Convenciones

- Español rioplatense/cruceño en textos de UI ("querés", "visitános").
- Sin comentarios en el código salvo los bloques explicativos ya
  existentes en `content.ts`.
- Precios siempre en Bs (números, sin símbolo en los datos).
- Breakpoint único: móvil ≤768px, web ≥769px (`min-width: 769px`).
- Navegación entre páginas con View Transitions API (`viewTransition`
  prop en los `<Link>`); el modal abre/cierra SIN transición.
  `html { scrollbar-gutter: stable }` evita el salto al bloquear scroll.
- Mapa del landing: iframe oficial de Google (`pb=...`) hardcodeado en
  `Landing.tsx`; el zoom inicial se ajusta con el valor `!1d<span>`
  (mayor = más alejado).
- NO commitear ni deployar sin que se pida explícitamente.
