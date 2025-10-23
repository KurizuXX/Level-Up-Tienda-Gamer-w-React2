import { useState } from 'react';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

export default function Registro(){
  const navigate = useNavigate();
  const [form, setForm] = useState({ email:'', password:'', password2:'' });
  const [err, setErr] = useState('');
  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = (e) => {
    e.preventDefault();
    if(form.password !== form.password2){ setErr('Las contraseñas no coinciden'); return; }
    const users = getStored(STORAGE_KEYS.USERS, []);
    if(users.some(u => u.email === form.email)){ setErr('El correo ya está registrado'); return; }
    users.push({ email: form.email, password: form.password });
    setStored(STORAGE_KEYS.USERS, users);
    setStored(STORAGE_KEYS.SESSION, { email: form.email });
    navigate('/');
  };

  return (
    <div className="py-3" style={{maxWidth:480, margin:'0 auto'}}>
      <h2>Registro</h2>
      {err && <div className="alert alert-danger">{err}</div>}
      <form onSubmit={submit} className="vstack gap-3">
        <input className="form-control" name="email" placeholder="Email" type="email" value={form.email} onChange={onChange} required/>
        <input className="form-control" name="password" placeholder="Contraseña" type="password" value={form.password} onChange={onChange} required/>
        <input className="form-control" name="password2" placeholder="Repite tu contraseña" type="password" value={form.password2} onChange={onChange} required/>
        <button className="btn btn-neon">Crear cuenta</button>
      </form>
    </div>
  );
}