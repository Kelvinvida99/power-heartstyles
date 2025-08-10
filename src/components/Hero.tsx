import heroImage from '../assets/images/hero-background.jpg'; // 1. Importa tu imagen

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }} // 2. Aplica la imagen como fondo
    >
      <div className="bg-black/50">
        <div className="container mx-auto px-4 py-28 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Power Heartstyle</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Tu estilo en casa — cortes, barbas y grooming profesional a domicilio.</p>
          <a href="https://wa.link/xikl2h" className="inline-block mt-8 px-8 py-3 bg-white text-black rounded font-semibold">Reservar a Domicilio</a>
        </div>
      </div>
    </section>
  )
}
