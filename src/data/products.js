// Importar imágenes como módulos para que Vite las procese correctamente
import imgCatan from '../assets/images/producto_catan.jpg';
import imgCarcassonne from '../assets/images/producto carcassonne.jpg';
import imgControlXbox from '../assets/images/producto controlxbox.jpg';
import imgHyperx from '../assets/images/producto hyperx cloud 2.jpg';
import imgPS5 from '../assets/images/producto playstation 5.png';
import imgPcAsus from '../assets/images/producto pc gamer asus.jpg';
import imgSecretlab from '../assets/images/producto secretlab titan.jpg';
import imgLogitechG502 from '../assets/images/producto logitech g502 hero.jpg';
import imgRazerGoliathus from '../assets/images/producto mousepad razer goliathus.jpg';
import imgPolera from '../assets/images/producto polera.png';

export const CATEGORIES = [
    {id:'juegos', name:'Juegos de Mesa'},
    {id:'accesorios', name:'Accesorios'},
    {id:'consolas', name:'Consolas'},
    {id:'computadores', name:'PC Gamers'},
    {id:'sillas', name:'Sillas Gamer'},
    {id:'mouse', name:'Mouse'},
    {id:'mousepad', name:'Mousepad'},
    {id:'poleras', name:'Poleras Personalizadas'},
    {id:'polerones', name:'Polerones Gamers Personalizados'}
];

export const PRODUCTS = [
    {
        id: 1,
        name: 'Catan',
        price: 29990,
        category: 'juegos',
        img: imgCatan,
        desc: 'Clásico de estrategia para 3-4 jugadores.'
    },
    {
        id: 2,
        name: 'Carcassonne',
        price: 24990,
        category: 'juegos',
        img: imgCarcassonne,
        desc: 'Colocación de losetas. 2-5 jugadores.'
    },
    {
        id: 3,
        name: 'Control Xbox Series X',
        price: 59990,
        category: 'accesorios',
        img: imgControlXbox,
        desc: 'Ergonomía y botones mapeables.'
    },
    {
        id: 4,
        name: 'HyperX Cloud II',
        price: 79990,
        category: 'accesorios',
        img: imgHyperx,
        desc: 'Sonido envolvente con micrófono desmontable.'
    },
    {
        id: 5,
        name: 'PlayStation 5',
        price: 549990,
        category: 'consolas',
        img: imgPS5,
        desc: 'Nueva generación de Sony.',
        featured: true
    },
    {
        id: 6,
        name: 'PC Gamer ASUS ROG Strix',
        price: 1299990,
        category: 'computadores',
        img: imgPcAsus,
        desc: 'Rendimiento alto para juegos exigentes.',
        featured: true
    },
    {
        id: 7,
        name: 'Secretlab Titan',
        price: 349990,
        category: 'sillas',
        img: imgSecretlab,
        desc: 'Soporte ergonómico y ajustes finos.',
        featured: true
    },
    {
        id: 8,
        name: 'Logitech G502 HERO',
        price: 49990,
        category: 'mouse',
        img: imgLogitechG502,
        desc: 'Sensor de alta precisión y botones programables.'
    },
    {
        id: 9,
        name: 'Razer Goliathus Extended Chroma',
        price: 29990,
        category: 'mousepad',
        img: imgRazerGoliathus,
        desc: 'Superficie amplia con RGB.'
    },
    {
        id: 10,
        name: 'Polera Level-Up Personalizada',
        price: 14990,
        category: 'poleras',
        img: imgPolera,
        desc: 'Personaliza con tu gamer tag.'
    }
];

export function getById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

export function getByCategory(catId) {
  return PRODUCTS.filter(p => p.category === catId);
}

export function getOffers() {
  return PRODUCTS.filter(p => p.discount && p.discount > 0);
}

export function getFeatured() {
  return PRODUCTS.filter(p => p.featured);
}