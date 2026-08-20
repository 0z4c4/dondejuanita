/**
 * ============================================================
 *  FUENTE ÚNICA DE DATOS DEL SITIO
 * ============================================================
 *
 * Este archivo es el único lugar donde vive el contenido de la
 * web. NO editar a mano sin antes consultar las fuentes externas,
 * que son la verdad oficial:
 *
 *   DATOS (salas, carta, configuración):
 *     Google Sheets "dondejuanita"
 *     https://docs.google.com/spreadsheets/d/1yW7lH2ZMKQgTmhJI9NlA1lXZeUslTsEtSIKB-vk3bSI/edit
 *     Pestañas: salas | menu | config
 *
 *   IMÁGENES:
 *     Google Drive, carpeta raíz "dondejuanita"
 *     https://drive.google.com/drive/folders/1wJFpTCHCbQ_K6V5Sbpc7BIqnVvc8CjfO
 *     Estructura: /salas/*.jpg  y  /menu/<Categoría>/*.jpg
 *     Los nombres de archivo en Drive deben coincidir con los
 *     indicados en las columnas fotos/imagen de la hoja.
 *
 * Al cambiar datos en Sheets o Drive, actualizar este archivo y
 * copiar las imágenes a public/img/. Ver AGENTS.md para el
 * procedimiento completo paso a paso.
 * ============================================================
 */

export interface Sala {
  id: string
  nombre: string
  descripcion: string
  capacidad: number
  fotos: string[]
  precioHora: number
  tematica: string
}

const BASE = '/dondejuanita'

export const asset = (ruta: string) => `${BASE}/${ruta}`

export interface MenuItem {
  id: string
  nombre: string
  descripcion: string
  precio: number
  categoria: string
  imagen?: string
}

/**
 * Pestaña `config` de la hoja: filas clave | valor.
 * Las claves de este objeto coinciden 1:1 con la columna `clave`.
 */
export const config = {
  whatsapp_numero: '59100000000',
  whatsapp_mensaje_reserva: 'Hola! Quiero reservar una sala',
  horario_lun_vie: '8:00 - 22:00',
  horario_sab_dom: '9:00 - 23:00',
  facebook_url:
    'https://www.facebook.com/people/Donde-Juanita/61577993212410/',
  instagram_url: 'https://maps.app.goo.gl/fssERCgqBXe7TCGW8',
  google_maps_url: 'https://maps.app.goo.gl/rsVQ8tGMJEo4781i7',
}

export const whatsappLink = (mensaje: string = config.whatsapp_mensaje_reserva) =>
  `https://wa.me/${config.whatsapp_numero}?text=${encodeURIComponent(mensaje)}`

/**
 * Pestaña `salas`. Columna `fotos`: nombres separados por coma,
 * correspondientes a archivos en Drive /salas/ (o URLs mientras
 * no existan las imágenes reales).
 */
export const salas: Sala[] = [
  {
    id: '1',
    nombre: 'Sala Selva',
    descripcion:
      'Rodeada de vegetación tropical y sonidos de la naturaleza. Ideal para relajarse con un café mientras escuchás el canto de las aves. Decorada con plantas tropicales, madera natural y una fuente de agua que crea un ambiente sereno y refrescante.',
    capacidad: 8,
    fotos: [
      'https://picsum.photos/seed/selva1/800/500',
      'https://picsum.photos/seed/selva2/800/500',
      'https://picsum.photos/seed/selva3/800/500'
    ],
    precioHora: 25,
    tematica: 'Naturaleza'
  },
  {
    id: '2',
    nombre: 'Sala Libros',
    descripcion:
      'Una biblioteca acogedora con estanterías de piso a techo. Perfecta para leer, estudiar o conversar entre el aroma del café y las páginas. Iluminación cálida, sillones de tela y el silencio interrumpido solo por el sonido de las hojas.',
    capacidad: 6,
    fotos: [
      'https://picsum.photos/seed/libros1/800/500',
      'https://picsum.photos/seed/libros2/800/500',
      'https://picsum.photos/seed/libros3/800/500'
    ],
    precioHora: 20,
    tematica: 'Literatura'
  },
  {
    id: '3',
    nombre: 'Sala Fuego',
    descripcion:
      'Chimenea, luces cálidas y muebles de cuero. El ambiente perfecto para noches frías de Santa Cruz con un chocolate caliente. Maderas oscuras, telas suaves y una chimenea real que calienta el alma.',
    capacidad: 10,
    fotos: [
      'https://picsum.photos/seed/fuego1/800/500',
      'https://picsum.photos/seed/fuego2/800/500',
      'https://picsum.photos/seed/fuego3/800/500'
    ],
    precioHora: 30,
    tematica: 'Acogedora'
  },
  {
    id: '4',
    nombre: 'Sala Música',
    descripcion:
      'Vinilos, instrumentos y buena música. Una sala donde el café se acompaña con ritmo y nostalgia. Paredes decoradas con discos de vinilo, una b acústica colgada y parlantes con selección de jazz y bossa nova.',
    capacidad: 12,
    fotos: [
      'https://picsum.photos/seed/musica1/800/500',
      'https://picsum.photos/seed/musica2/800/500',
      'https://picsum.photos/seed/musica3/800/500'
    ],
    precioHora: 28,
    tematica: 'Música'
  },
  {
    id: '5',
    nombre: 'Sala Jardín',
    descripcion:
      'Un espacio interior con plantas, luz natural y una fuente. Frescura y calma en el corazón de la ciudad. Paredes de vidrio, techos altos y cascada de enredaderas que crean un oasis urbano.',
    capacidad: 8,
    fotos: [
      'https://picsum.photos/seed/jardin1/800/500',
      'https://picsum.photos/seed/jardin2/800/500',
      'https://picsum.photos/seed/jardin3/800/500'
    ],
    precioHora: 22,
    tematica: 'Naturaleza'
  }
]

/**
 * Pestaña `menu`. Columna `imagen`: nombre del archivo en
 * Drive /menu/<categoria>/ (o URL mientras no exista la imagen real).
 */
export const menu: MenuItem[] = [
  { id: '1', nombre: 'Café Espresso', descripcion: 'Nuestro café estrella, fuerte y aromático. Extracción perfecta con granularity media-alta.', precio: 12, categoria: 'Bebidas Calientes', imagen: 'https://picsum.photos/seed/espresso/400/300' },
  { id: '2', nombre: 'Capuchino', descripcion: 'Espresso con espuma de leche cremosa, decorado con arte latte.', precio: 18, categoria: 'Bebidas Calientes', imagen: 'https://picsum.photos/seed/capuchino/400/300' },
  { id: '3', nombre: 'Café con Leche', descripcion: 'Clásico y reconfortante. Proporción perfecta de café y leche al vapor.', precio: 14, categoria: 'Bebidas Calientes', imagen: 'https://picsum.photos/seed/cafeleche/400/300' },
  { id: '4', nombre: 'Chocolate Caliente', descripcion: 'Chocolate belga derretido con crema batida y un toque de canela.', precio: 20, categoria: 'Bebidas Calientes', imagen: 'https://picsum.photos/seed/chocolate/400/300' },
  { id: '5', nombre: 'Té de la Casa', descripcion: 'Selección de tés importados: earl grey, verde jazmín, chái especiado.', precio: 15, categoria: 'Bebidas Calientes', imagen: 'https://picsum.photos/seed/te/400/300' },
  { id: '6', nombre: 'Smoothie Tropical', descripcion: 'Mango, maracuyá y leche de coco. Refrescante y lleno de vitaminas.', precio: 22, categoria: 'Bebidas Frías', imagen: 'https://picsum.photos/seed/smoothie/400/300' },
  { id: '7', nombre: 'Cold Brew', descripcion: 'Café frío de extracción lenta 24 horas. Suave, naturalmente dulce.', precio: 20, categoria: 'Bebidas Frías', imagen: 'https://picsum.photos/seed/coldbrew/400/300' },
  { id: '8', nombre: 'Limonada de Coco', descripcion: 'Fresca y tropical. Limón real con leche de coco y hielo.', precio: 16, categoria: 'Bebidas Frías', imagen: 'https://picsum.photos/seed/limonada/400/300' },
  { id: '9', nombre: 'Croissant de Jamón y Queso', descripcion: 'Hojaldrado recién horneado con jamón premium y queso gratinado.', precio: 18, categoria: 'Comida', imagen: 'https://picsum.photos/seed/croissant/400/300' },
  { id: '10', nombre: 'Tostada Avocado', descripcion: 'Aguacate, tomate cherry y semillas sobre pan artesanal integral.', precio: 25, categoria: 'Comida', imagen: 'https://picsum.photos/seed/avocado/400/300' },
  { id: '11', nombre: 'Brownie de Chocolate', descripcion: 'Denso, oscuro y adictivo. Con nueces y un toque de sal marina.', precio: 15, categoria: 'Postres', imagen: 'https://picsum.photos/seed/brownie/400/300' },
  { id: '12', nombre: 'Tiramisú', descripcion: 'El clásico italiano con toque cruceño. Café, mascarpone y cacao.', precio: 20, categoria: 'Postres', imagen: 'https://picsum.photos/seed/tiramisu/400/300' }
]
