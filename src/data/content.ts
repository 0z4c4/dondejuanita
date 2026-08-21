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
  precioJarra?: number
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
 * Drive /menu/<categoria>/ (vacía mientras no exista la imagen real).
 * `precioJarra`: precio de jarra, solo Bebidas Frías que lo manejan.
 */
export const menu: MenuItem[] = [
  { id: '1', categoria: 'Horneados Típicos', nombre: 'Arepa', descripcion: '', precio: 11 },
  { id: '2', categoria: 'Horneados Típicos', nombre: 'Cuñapé', descripcion: '', precio: 8 },
  { id: '3', categoria: 'Horneados Típicos', nombre: 'Cuñapé Frito', descripcion: '', precio: 8 },
  { id: '4', categoria: 'Horneados Típicos', nombre: 'Cuñapé con Guayaba', descripcion: '', precio: 9 },
  { id: '5', categoria: 'Horneados Típicos', nombre: 'Cuñapé c/ Maja Blanco', descripcion: '', precio: 9 },
  { id: '6', categoria: 'Horneados Típicos', nombre: 'Empanada Frita de Queso', descripcion: '', precio: 8 },
  { id: '7', categoria: 'Horneados Típicos', nombre: 'Empanada de Arroz', descripcion: '', precio: 8 },
  { id: '8', categoria: 'Horneados Típicos', nombre: 'Empanada de Maíz', descripcion: '', precio: 8 },
  { id: '9', categoria: 'Horneados Típicos', nombre: 'Empanada Tortilla', descripcion: '', precio: 10 },
  { id: '10', categoria: 'Horneados Típicos', nombre: 'Empanada de Pollo', descripcion: '', precio: 13 },
  { id: '11', categoria: 'Horneados Típicos', nombre: 'Empanada de Trigo c/Queso', descripcion: 'Promo: 3 por 20 Bs', precio: 7 },
  { id: '12', categoria: 'Horneados Típicos', nombre: 'Empanada Integral', descripcion: '', precio: 7 },
  { id: '13', categoria: 'Horneados Típicos', nombre: 'Empanada de jamón, queso, choclo', descripcion: '', precio: 10 },
  { id: '14', categoria: 'Horneados Típicos', nombre: 'Pan con queso Casero', descripcion: 'Promo: 4 por 15 Bs', precio: 4 },
  { id: '15', categoria: 'Horneados Típicos', nombre: 'Mini Pizza', descripcion: '', precio: 10 },
  { id: '16', categoria: 'Horneados Típicos', nombre: 'Mollete', descripcion: '', precio: 6 },
  { id: '17', categoria: 'Horneados Típicos', nombre: 'TortiMollete', descripcion: '', precio: 7.5 },
  { id: '18', categoria: 'Horneados Típicos', nombre: 'Torta de Chocolate', descripcion: '', precio: 12 },
  { id: '19', categoria: 'Horneados Típicos', nombre: 'Marraqueta', descripcion: 'Promo: 4 por 15 Bs', precio: 4 },
  { id: '20', categoria: 'Horneados Típicos', nombre: 'Sonso', descripcion: '', precio: 12 },
  { id: '21', categoria: 'Horneados Típicos', nombre: 'Tamal a la olla', descripcion: '', precio: 14 },
  { id: '22', categoria: 'Horneados Típicos', nombre: 'Pastel de choclo', descripcion: '', precio: 13 },
  { id: '23', categoria: 'Masacos', nombre: 'Masaco de plátano maduro con charque', descripcion: '', precio: 14 },
  { id: '24', categoria: 'Masacos', nombre: 'Masaco de plátano verde con charque', descripcion: '', precio: 14 },
  { id: '25', categoria: 'Masacos', nombre: 'Masaco de plátano pintón con queso', descripcion: '', precio: 14 },
  { id: '26', categoria: 'Masacos', nombre: 'Masaco de plátano pintón con Chicharrón', descripcion: '', precio: 14 },
  { id: '27', categoria: 'Masacos', nombre: 'Masaco de yuca con Chicharrón y Charque', descripcion: '', precio: 15 },
  { id: '28', categoria: 'Postres', nombre: 'Gelatina de pata', descripcion: 'Consultar disponibilidad', precio: 9 },
  { id: '29', categoria: 'Postres', nombre: 'Budín con grosella', descripcion: 'Consultar disponibilidad', precio: 8 },
  { id: '30', categoria: 'Postres', nombre: 'Arroz con leche', descripcion: 'Consultar disponibilidad', precio: 9 },
  { id: '31', categoria: 'Postres', nombre: 'Quiero Más', descripcion: 'Consultar disponibilidad', precio: 14 },
  { id: '32', categoria: 'Tortas', nombre: 'Torta para 10 personas', descripcion: 'Sabores: Chocolate - Zanahoria', precio: 175 },
  { id: '33', categoria: 'Tortas', nombre: 'Torta para 20 personas', descripcion: 'Sabores: Chocolate - Zanahoria', precio: 340 },
  { id: '34', categoria: 'Bebidas Calientes', nombre: 'Café clásico', descripcion: '', precio: 16 },
  { id: '35', categoria: 'Bebidas Calientes', nombre: 'Café con Leche', descripcion: '', precio: 18 },
  { id: '36', categoria: 'Bebidas Calientes', nombre: 'Capuccino', descripcion: '', precio: 22 },
  { id: '37', categoria: 'Bebidas Calientes', nombre: 'Chocolate con Leche', descripcion: '', precio: 20 },
  { id: '38', categoria: 'Bebidas Calientes', nombre: 'Té', descripcion: '', precio: 10 },
  { id: '39', categoria: 'Bebidas Calientes', nombre: 'Infusiones', descripcion: '', precio: 10 },
  { id: '40', categoria: 'Bebidas Calientes', nombre: 'Api', descripcion: '', precio: 12 },
  { id: '41', categoria: 'Bebidas Frías', nombre: 'Mocochinchi', descripcion: '', precio: 9, precioJarra: 40 },
  { id: '42', categoria: 'Bebidas Frías', nombre: 'Lima', descripcion: '', precio: 9, precioJarra: 40 },
  { id: '43', categoria: 'Bebidas Frías', nombre: 'Limonada', descripcion: '', precio: 9, precioJarra: 40 },
  { id: '44', categoria: 'Bebidas Frías', nombre: 'Jugo de Estación c/ agua', descripcion: '', precio: 17, precioJarra: 50 },
  { id: '45', categoria: 'Bebidas Frías', nombre: 'Jugo de Estación c/ leche', descripcion: '', precio: 20, precioJarra: 55 },
  { id: '46', categoria: 'Bebidas Frías', nombre: 'Frapé', descripcion: '', precio: 25 },
  { id: '47', categoria: 'Bebidas Frías', nombre: 'Frapuccino', descripcion: '', precio: 25 },
  { id: '48', categoria: 'Bebidas Frías', nombre: 'Iced Latte', descripcion: '', precio: 28 },
  { id: '49', categoria: 'Bebidas Frías', nombre: 'Botella de agua', descripcion: '', precio: 10 },
  { id: '50', categoria: 'Bebidas Frías', nombre: 'Botella de agua c/gas', descripcion: '', precio: 10 },
  { id: '51', categoria: 'Bebidas Frías', nombre: 'Soda personal', descripcion: '', precio: 10 }
]

/**
 * Pestaña `juegos`. Se usan a cambio del Carnet de identidad,
 * sin costo. Cards informativos, sin modal.
 */
export const juegos: string[] = [
  'Yenga',
  'Dominó',
  'Cartas sobre la mesa: versión pareja',
  'Cartas sobre la mesa: versión amigos',
  'Cachos',
  'Amigos de Mierda',
  'Peor es nada',
  'UNO',
  'Qce',
  'Cartas',
  'Tres en raya',
  'Basta!',
  'Ajedrez',
  'Scrable',
  'Ludo',
  'Damas chinas'
]
