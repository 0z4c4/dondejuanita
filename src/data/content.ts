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
  whatsapp_numero: '59177624331',
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
    nombre: 'Sala 2D',
    descripcion:
      'Una sala inspirada en el mundo de las ilustraciones, donde cada rincón parece cobrar vida sobre el papel. Líneas, dibujos y detalles en blanco y negro crean una experiencia única, como entrar literalmente en una historieta.',
    capacidad: 8,
    fotos: [
      asset('img/salas/sala2d-1.webp'),
      asset('img/salas/sala2d-2.webp'),
      asset('img/salas/sala2d-3.webp'),
      asset('img/salas/sala2d-4.webp'),
      asset('img/salas/sala2d-5.webp')
    ],
    precioHora: 25,
    tematica: 'Dibujo'
  },
  {
    id: '2',
    nombre: 'Sala Cárcel',
    descripcion:
      'Un espacio inspirado en una antigua celda, con barrotes, cadenas y detalles que recrean una atmósfera de encierro. Una sala diferente y llena de carácter, ideal para vivir una experiencia fuera de lo común.',
    capacidad: 6,
    fotos: [asset('img/salas/salacarcel.webp')],
    precioHora: 20,
    tematica: 'Pisionero'
  },
  {
    id: '3',
    nombre: 'Sala Chelita',
    descripcion:
      'Una sala inspirada en el refinamiento clásico, donde el tiempo parece detenerse entre detalles dorados y la pureza del blanco. Líneas sofisticadas, mantelería delicadamente bordada y una luz cálida crean una experiencia única, como entrar literalmente en un salón real de una época dorada.',
    capacidad: 10,
    fotos: [asset('img/salas/salanose.webp')],
    precioHora: 30,
    tematica: 'Elegancia'
  },
  {
    id: '4',
    nombre: 'Sala Clínica',
    descripcion:
      "Esta sala te transporta a un hospital de campaña donde tú eres el protagonista. El blanco estéril de las paredes y las camas se rompe con una dramática línea de emergencia roja. Prepárate para 'curar' tu hambre bajo la luz quirúrgica, rodeado de radiografías, bastones y equipo auténtico.",
    capacidad: 12,
    fotos: [asset('img/salas/salahospital.webp')],
    precioHora: 28,
    tematica: 'Paciente'
  },
  {
    id: '5',
    nombre: 'Sala Colorinchi',
    descripcion:
      'Una sala inspirada en la alegría y la creatividad, donde cada elemento cuenta una historia de vitalidad y color. El fucsia vibrante, el turquesa eléctrico y el amarillo radiante guían tus sentidos, como si hubieras cruzado la puerta de un mundo de fantasía, un refugio de alegría y bienestar.',
    capacidad: 8,
    fotos: [asset('img/salas/salacolores.webp')],
    precioHora: 22,
    tematica: 'Colores'
  },
  {
    id: '6',
    nombre: 'Sala Profe Maria Esther',
    descripcion:
      'Una sala inspirada en la sabiduría, la nostalgia del aula y el despertar de las grandes ideas. Libros que invitan a explorar, pupitres dispuestos para compartir y un mural con focos de creatividad crean una experiencia única, como entrar literalmente a una clase magistral donde la inspiración y el conocimiento son los ingredientes principales.',
    capacidad: 10,
    fotos: [asset('img/salas/salabiblioteca.webp')],
    precioHora: 50,
    tematica: 'Biblioteca'
  },
  {
    id: '7',
    nombre: 'Romance',
    descripcion:
      'Una sala inspirada en el encanto del amor y la calidez de las grandes historias pasionales. Luces tenues, detalles delicados y una atmósfera íntima y acogedora crean una experiencia única, como entrar literalmente en una escena de una película romántica creada para compartir.',
    capacidad: 10,
    fotos: [asset('img/hero-bg.webp')],
    precioHora: 40,
    tematica: 'Pareja'
  }
]

/**
 * Pestaña `menu`. Columna `imagen`: nombre del archivo en
 * Drive /menu/<categoria>/ (vacía mientras no exista la imagen real).
 * `precioJarra`: precio de jarra, solo Bebidas Frías que lo manejan.
 */
export const menu: MenuItem[] = [
  { id: '1', categoria: 'Horneados Típicos', nombre: 'Arepa', descripcion: '', precio: 11, imagen: asset('img/highlight-horneados.webp') },
  { id: '2', categoria: 'Horneados Típicos', nombre: 'Cuñapé', descripcion: '', precio: 8, imagen: asset('img/highlight-horneados.webp') },
  { id: '3', categoria: 'Horneados Típicos', nombre: 'Cuñapé Frito', descripcion: '', precio: 8, imagen: asset('img/highlight-horneados.webp') },
  { id: '4', categoria: 'Horneados Típicos', nombre: 'Cuñapé con Guayaba', descripcion: '', precio: 9, imagen: asset('img/highlight-horneados.webp') },
  { id: '5', categoria: 'Horneados Típicos', nombre: 'Cuñapé c/ Maja Blanco', descripcion: '', precio: 9, imagen: asset('img/highlight-horneados.webp') },
  { id: '6', categoria: 'Horneados Típicos', nombre: 'Empanada Frita de Queso', descripcion: '', precio: 8, imagen: asset('img/highlight-horneados.webp') },
  { id: '7', categoria: 'Horneados Típicos', nombre: 'Empanada de Arroz', descripcion: '', precio: 8, imagen: asset('img/highlight-horneados.webp') },
  { id: '8', categoria: 'Horneados Típicos', nombre: 'Empanada de Maíz', descripcion: '', precio: 8, imagen: asset('img/highlight-horneados.webp') },
  { id: '9', categoria: 'Horneados Típicos', nombre: 'Empanada Tortilla', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '10', categoria: 'Horneados Típicos', nombre: 'Empanada de Pollo', descripcion: '', precio: 13, imagen: asset('img/highlight-horneados.webp') },
  { id: '11', categoria: 'Horneados Típicos', nombre: 'Empanada de Trigo c/Queso', descripcion: 'Promo: 3 por 20 Bs', precio: 7, imagen: asset('img/highlight-horneados.webp') },
  { id: '12', categoria: 'Horneados Típicos', nombre: 'Empanada Integral', descripcion: '', precio: 7, imagen: asset('img/highlight-horneados.webp') },
  { id: '13', categoria: 'Horneados Típicos', nombre: 'Empanada de jamón, queso, choclo', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '14', categoria: 'Horneados Típicos', nombre: 'Pan con queso Casero', descripcion: 'Promo: 4 por 15 Bs', precio: 4, imagen: asset('img/highlight-horneados.webp') },
  { id: '15', categoria: 'Horneados Típicos', nombre: 'Mini Pizza', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '16', categoria: 'Horneados Típicos', nombre: 'Mollete', descripcion: '', precio: 6, imagen: asset('img/highlight-horneados.webp') },
  { id: '17', categoria: 'Horneados Típicos', nombre: 'TortiMollete', descripcion: '', precio: 7.5, imagen: asset('img/highlight-horneados.webp') },
  { id: '18', categoria: 'Horneados Típicos', nombre: 'Torta de Chocolate', descripcion: '', precio: 12, imagen: asset('img/highlight-horneados.webp') },
  { id: '19', categoria: 'Horneados Típicos', nombre: 'Marraqueta', descripcion: 'Promo: 4 por 15 Bs', precio: 4, imagen: asset('img/highlight-horneados.webp') },
  { id: '20', categoria: 'Horneados Típicos', nombre: 'Sonso', descripcion: '', precio: 12, imagen: asset('img/highlight-horneados.webp') },
  { id: '21', categoria: 'Horneados Típicos', nombre: 'Tamal a la olla', descripcion: '', precio: 14, imagen: asset('img/highlight-horneados.webp') },
  { id: '22', categoria: 'Horneados Típicos', nombre: 'Pastel de choclo', descripcion: '', precio: 13, imagen: asset('img/highlight-horneados.webp') },
  { id: '23', categoria: 'Masacos', nombre: 'Masaco de plátano maduro con charque', descripcion: '', precio: 14, imagen: asset('img/highlight-horneados.webp') },
  { id: '24', categoria: 'Masacos', nombre: 'Masaco de plátano verde con charque', descripcion: '', precio: 14, imagen: asset('img/highlight-horneados.webp') },
  { id: '25', categoria: 'Masacos', nombre: 'Masaco de plátano pintón con queso', descripcion: '', precio: 14, imagen: asset('img/highlight-horneados.webp') },
  { id: '26', categoria: 'Masacos', nombre: 'Masaco de plátano pintón con Chicharrón', descripcion: '', precio: 14, imagen: asset('img/highlight-horneados.webp') },
  { id: '27', categoria: 'Masacos', nombre: 'Masaco de yuca con Chicharrón y Charque', descripcion: '', precio: 15, imagen: asset('img/highlight-horneados.webp') },
  { id: '28', categoria: 'Postres', nombre: 'Gelatina de pata', descripcion: 'Consultar disponibilidad', precio: 9, imagen: asset('img/highlight-horneados.webp') },
  { id: '29', categoria: 'Postres', nombre: 'Budín con grosella', descripcion: 'Consultar disponibilidad', precio: 8, imagen: asset('img/highlight-horneados.webp') },
  { id: '30', categoria: 'Postres', nombre: 'Arroz con leche', descripcion: 'Consultar disponibilidad', precio: 9, imagen: asset('img/highlight-horneados.webp') },
  { id: '31', categoria: 'Postres', nombre: 'Quiero Más', descripcion: 'Consultar disponibilidad', precio: 14, imagen: asset('img/highlight-horneados.webp') },
  { id: '32', categoria: 'Tortas', nombre: 'Torta para 10 personas', descripcion: 'Sabores: Chocolate - Zanahoria', precio: 175, imagen: asset('img/highlight-horneados.webp') },
  { id: '33', categoria: 'Tortas', nombre: 'Torta para 20 personas', descripcion: 'Sabores: Chocolate - Zanahoria', precio: 340, imagen: asset('img/highlight-horneados.webp') },
  { id: '34', categoria: 'Bebidas Calientes', nombre: 'Café clásico', descripcion: '', precio: 16, imagen: asset('img/highlight-horneados.webp') },
  { id: '35', categoria: 'Bebidas Calientes', nombre: 'Café con Leche', descripcion: '', precio: 18, imagen: asset('img/highlight-horneados.webp') },
  { id: '36', categoria: 'Bebidas Calientes', nombre: 'Capuccino', descripcion: '', precio: 22, imagen: asset('img/highlight-horneados.webp') },
  { id: '37', categoria: 'Bebidas Calientes', nombre: 'Chocolate con Leche', descripcion: '', precio: 20, imagen: asset('img/highlight-horneados.webp') },
  { id: '38', categoria: 'Bebidas Calientes', nombre: 'Té', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '39', categoria: 'Bebidas Calientes', nombre: 'Infusiones', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '40', categoria: 'Bebidas Calientes', nombre: 'Api', descripcion: '', precio: 12, imagen: asset('img/highlight-horneados.webp') },
  { id: '41', categoria: 'Bebidas Frías', nombre: 'Mocochinchi', descripcion: '', precio: 9, precioJarra: 40, imagen: asset('img/highlight-horneados.webp') },
  { id: '42', categoria: 'Bebidas Frías', nombre: 'Lima', descripcion: '', precio: 9, precioJarra: 40, imagen: asset('img/highlight-horneados.webp') },
  { id: '43', categoria: 'Bebidas Frías', nombre: 'Limonada', descripcion: '', precio: 9, precioJarra: 40, imagen: asset('img/highlight-horneados.webp') },
  { id: '44', categoria: 'Bebidas Frías', nombre: 'Jugo de Estación c/ agua', descripcion: '', precio: 17, precioJarra: 50, imagen: asset('img/highlight-horneados.webp') },
  { id: '45', categoria: 'Bebidas Frías', nombre: 'Jugo de Estación c/ leche', descripcion: '', precio: 20, precioJarra: 55, imagen: asset('img/highlight-horneados.webp') },
  { id: '46', categoria: 'Bebidas Frías', nombre: 'Frapé', descripcion: '', precio: 25, imagen: asset('img/highlight-horneados.webp') },
  { id: '47', categoria: 'Bebidas Frías', nombre: 'Frapuccino', descripcion: '', precio: 25, imagen: asset('img/highlight-horneados.webp') },
  { id: '48', categoria: 'Bebidas Frías', nombre: 'Iced Latte', descripcion: '', precio: 28, imagen: asset('img/highlight-horneados.webp') },
  { id: '49', categoria: 'Bebidas Frías', nombre: 'Botella de agua', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '50', categoria: 'Bebidas Frías', nombre: 'Botella de agua c/gas', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') },
  { id: '51', categoria: 'Bebidas Frías', nombre: 'Soda personal', descripcion: '', precio: 10, imagen: asset('img/highlight-horneados.webp') }
]

/**
 * Pestaña `juegos`. Se usan a cambio del Carnet de identidad,
 * sin costo. Cards informativos, sin modal.
 */
export interface Juego {
  id: string
  nombre: string
  imagen: string
}

export const juegos: Juego[] = [
  { id: '1', nombre: 'Yenga', imagen: asset('img/juegos/yenga.webp') },
  { id: '2', nombre: 'Dominó', imagen: asset('img/juegos/domino.webp') },
  { id: '3', nombre: 'Cartas sobre la mesa: versión pareja', imagen: asset('img/juegos/cartas.webp') },
  { id: '4', nombre: 'Cartas sobre la mesa: versión amigos', imagen: asset('img/juegos/cartas.webp') },
  { id: '5', nombre: 'Cachos', imagen: asset('img/juegos/cacho.webp') },
  { id: '6', nombre: 'Amigos de Mierda', imagen: asset('img/juegos/cartas.webp') },
  { id: '7', nombre: 'Peor es nada', imagen: asset('img/juegos/cartas.webp') },
  { id: '8', nombre: 'UNO', imagen: asset('img/juegos/uno.webp') },
  { id: '9', nombre: 'Qce', imagen: asset('img/juegos/cartas.webp') },
  { id: '10', nombre: 'Cartas', imagen: asset('img/juegos/cartas.webp') },
  { id: '11', nombre: 'Tres en raya', imagen: asset('img/juegos/cartas.webp') },
  { id: '12', nombre: 'Basta!', imagen: asset('img/juegos/cartas.webp') },
  { id: '13', nombre: 'Ajedrez', imagen: asset('img/juegos/ajedrez.webp') },
  { id: '14', nombre: 'Scrable', imagen: asset('img/juegos/scrable.webp') },
  { id: '15', nombre: 'Ludo', imagen: asset('img/juegos/cartas.webp') },
  { id: '16', nombre: 'Damas chinas', imagen: asset('img/juegos/damas.webp') }
]
