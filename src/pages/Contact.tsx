import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router-dom'

type FormState = {
  name: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  service: string;
};

export default function Contact(){
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const preService = params.get('service') || ''

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    service: preService
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setForm((prev: FormState) => ({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    const subject = `Reserva - Power Heartstyle: ${form.service}`
    const body = `Nombre: ${form.name}\nTeléfono: ${form.phone}\nDirección: ${form.address}\nFecha: ${form.date}\nHora: ${form.time}\nServicio: ${form.service}`
    window.location.href = `mailto:tuemail@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="container mx-auto px-4 py-12" id="reservar">
      <h2 className="text-2xl font-bold mb-6">Reservar a Domicilio</h2>
      <form onSubmit={handleSubmit} className="max-w-xl bg-white p-6 rounded shadow">
        <label className="block mb-3">
          <span className="text-sm">Nombre</span>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border rounded px-3 py-2"/>
        </label>
        <label className="block mb-3">
          <span className="text-sm">Teléfono</span>
          <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 block w-full border rounded px-3 py-2"/>
        </label>
        <label className="block mb-3">
          <span className="text-sm">Dirección</span>
          <input name="address" value={form.address} onChange={handleChange} required className="mt-1 block w-full border rounded px-3 py-2"/>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label>
            <span className="text-sm">Fecha</span>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2"/>
          </label>
          <label>
            <span className="text-sm">Hora</span>
            <input type="time" name="time" value={form.time} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2"/>
          </label>
        </div>
        <label className="block mt-3">
          <span className="text-sm">Servicio</span>
          <input name="service" value={form.service} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2"/>
        </label>
        <button type="submit" className="mt-4 px-5 py-2 bg-black text-white rounded">Enviar Reserva</button>
      </form>
    </section>
  )
}
