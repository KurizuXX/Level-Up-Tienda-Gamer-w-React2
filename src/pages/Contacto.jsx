import { useState } from 'react';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';

export default function Contacto(){
  const [form, setForm] = useState({ nombre:'', email:'', mensaje:'' });
  const [ok, setOk] = useState(false);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = (e) => {
    e.preventDefault();
    // Validación mínima
    if(!form.nombre.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.mensaje.trim()) return;
    const list = getStored(STORAGE_KEYS.CONTACT, []);
    list.push({ ...form, date: new Date().toISOString() });
    setStored(STORAGE_KEYS.CONTACT, list);
    setOk(true);
    setForm({ nombre:'', email:'', mensaje:'' });
  };

  return (
    <div className="py-3">
      <h2>Contacto</h2>
      {ok && <div className="alert alert-success">Mensaje enviado (simulado). ¡Gracias!</div>}
      <form onSubmit={submit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input className="form-control" name="nombre" value={form.nombre} onChange={onChange} required/>
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" name="email" type="email" value={form.email} onChange={onChange} required/>
        </div>
        <div className="col-12">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" name="mensaje" value={form.mensaje} onChange={onChange} required></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-neon">Enviar</button>
        </div>
      </form>
    </div>
  );
}