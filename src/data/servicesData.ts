import corteClassic from '../assets/images/services/corte-classic.jpeg'
import cortePremium from '../assets/images/services/corte-premium.jpg'
import recorteBarba from '../assets/images/services/recorte-barba.jpg';
import corteNino from '../assets/images/services/corte-nino.jpg';
import tinteCabello from '../assets/images/services/tinte-cabello.jpg';
import tratamientoFacial from '../assets/images/services/tratamiento-facial.jpg';


export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const services: Service[] = [
  {
    id: 'c1',
    title: 'Corte clásico a domicilio',
    description: 'Corte tradicional + asesoría de estilo. Traemos todo el equipo.',
    price: 750,
    image: corteClassic
  },
  {
    id: 'c2',
    title: 'Corte premium + barba',
    description: 'Corte detallado, recorte de barba y perfilado profesional.',
    price: 350,
    image: cortePremium
  },
  {
    id: 'c3',
    title: 'Arreglo de Barba',
    description: 'Recorte, perfilado y afeitado de barba con toallas calientes y aceites.',
    price: 150,
    image: recorteBarba
  },
  {
    id: 'c4',
    title: 'Corte para Niños',
    description: 'Corte de cabello para los más pequeños, con paciencia y estilo.',
    price: 200,
    image: corteNino
  },
  {
    id: 'c5',
    title: 'Tinte de Cabello',
    description: 'Coloración profesional para cubrir canas o cambiar de look.',
    price: 600,
    image: tinteCabello
  },
  {
    id: 'c6',
    title: 'Tratamiento Facial',
    description: 'Limpieza facial profunda, exfoliación y mascarilla para una piel renovada.',
    price: 100,
    image: tratamientoFacial
  }
]
