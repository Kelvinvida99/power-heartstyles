

interface Service {
  image: string;
  title: string;
  description: string;
  price: number;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-lg shadow p-4">
      <img src={service.image} alt={service.title} className="w-full h-44 object-cover rounded"/>
      <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{service.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold">DOP$ {service.price}</span>
        <a href={`https://wa.link/xikl2h`} className="px-3 py-1 bg-black text-white rounded">Reservar</a>
      </div>
    </article>
  )
}
