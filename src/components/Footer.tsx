import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-bold">Power Heartstyle</h3>
          <p className="text-sm">Servicios de barbería a domicilio - Ciudad</p>
        </div>
        <div className="mt-4 md:mt-0 md:text-right">
          <p className="text-sm">Tel: +1 829 454 1744</p>
          <p className="text-sm">Dirección: c/María Trinidad Sanchez #1, Brisas del Este de la Charles de Gaulle, 11707</p>
        </div>
      </div>
    </footer>
  )
}
