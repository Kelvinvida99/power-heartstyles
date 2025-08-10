import Hero from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import barberImage from '../assets/images/power-coronel.png'; // 1. Importa la imagen del barbero
import { services } from '../data/servicesData'; // <--- IMPORTA los datos aquí
import type { Service } from '../data/servicesData';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Servicios a Domicilio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s: Service) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* 2. Sección del Barbero Principal */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
          <img
            src={barberImage}
            alt="Power Coronel, barbero principal"
            className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-white"
          />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Power Coronel</h2>
            <p className="text-lg text-gray-600 mt-2">Barbero Profesional, Cantante y Compositor</p>
            <p className="mt-4 text-gray-700">Power combina su pasión por el estilo con su arte, ofreciendo una experiencia única y un servicio de alta calidad en cada corte. Tu look está en manos de un verdadero artista.</p>
          </div>
        </div>
      </section>
    </>
  );
}