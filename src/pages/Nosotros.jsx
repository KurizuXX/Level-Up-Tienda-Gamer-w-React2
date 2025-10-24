// src/pages/Nosotros.jsx
import { FaRocket, FaShieldAlt, FaTruck, FaHeadset, FaStar, FaUsers, FaAward, FaGamepad } from "react-icons/fa"

export default function Nosotros(){
  return (
    <div className="py-4 nosotros-page">
      {/* HERO */}
      <section className="p-4 p-md-5 neon-border rounded-3 text-center mb-4">
        <h1 className="display-6 neon-text mb-2">Level-up Gamer</h1>
        <p className="lead text-secondary mb-0">
          Somos una tienda de productos <span className="neon-text">gamers</span>, hecha por gamers para <span className="neon-text">gamers</span>
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mb-5">
        <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col">
            <div className="card h-100 text-center p-3">
              <FaRocket size={28} className="mb-2 text-info" />
              <h5 className="mb-1">Rendimiento</h5>
              <p className="text-secondary small mb-0">Equipos y periféricos probados para frames estables y latencia mínima.</p>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center p-3">
              <FaShieldAlt size={28} className="mb-2 text-info" />
              <h5 className="mb-1">Confianza</h5>
              <p className="text-secondary small mb-0">Garantía directa y soporte posventa real —sin bots que te mareen.</p>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center p-3">
              <FaTruck size={28} className="mb-2 text-info" />
              <h5 className="mb-1">Envíos</h5>
              <p className="text-secondary small mb-0">Despachos a todo Chile con embalaje seguro y seguimiento.</p>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center p-3">
              <FaHeadset size={28} className="mb-2 text-info" />
              <h5 className="mb-1">Soporte Pro</h5>
              <p className="text-secondary small mb-0">Te ayudamos a elegir y a configurar tu setup sin dolores de cabeza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA + VALORES */}
      <section className="mb-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="card h-100 p-4">
              <h4 className="mb-2 neon-text">Nuestra historia</h4>
              <p className="text-secondary">
                Nacimos en 2020 como un pequeño laboratorio de entusiastas. Empezamos armando PCs de alto
                rendimiento para amigos y streamers locales. Hoy curamos un catálogo completo de periféricos,
                consolas y juegos, manteniendo el espíritu original: pruebas reales, asesoría honesta y estética
                <em> cyber-neón</em>.
              </p>
              <ul className="text-secondary small mb-0">
                <li>Todos los productos pasan por un checklist propio (latencia, build quality y confort).</li>
                <li>Preferimos marcas con buen soporte y repuestos disponibles.</li>
                <li>Publicamos guías de setup y mantenimiento para alargar la vida útil de tu equipo.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card h-100 p-4">
              <h4 className="mb-3">Lo que nos mueve</h4>
              <div className="vstack gap-3">
                <div className="d-flex align-items-start gap-3">
                  <FaStar className="text-info mt-1" />
                  <div>
                    <strong>Calidad real</strong>
                    <p className="text-secondary small mb-0">No vendemos humo: especificaciones transparentes y benchmarks claros.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <FaUsers className="text-info mt-1" />
                  <div>
                    <strong>Comunidad primero</strong>
                    <p className="text-secondary small mb-0">Escuchamos feedback y mejoramos el catálogo con ustedes.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <FaAward className="text-info mt-1" />
                  <div>
                    <strong>Curaduría</strong>
                    <p className="text-secondary small mb-0">Seleccionamos cada producto. Menos ruido, más aciertos.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <FaGamepad className="text-info mt-1" />
                  <div>
                    <strong>Diversión</strong>
                    <p className="text-secondary small mb-0">El gaming es para disfrutar: luces, mods y personalidad en tu setup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mb-5">
        <div className="row g-3 text-center">
          {[
            {label: "Clientes felices", value: "15.000+"},
            {label: "Setups armados", value: "3.200+"},
            {label: "Garantías resueltas", value: "99%"},
            {label: "productos recomendados", value: "500+"},
          ].map((s, i)=>(
            <div key={i} className="col-6 col-md-3">
              <div className="card h-100 p-3">
                <div className="display-6 neon-text">{s.value}</div>
                <div className="text-secondary small">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section className="mb-5">
        <h4 className="mb-3">Conoce al equipo</h4>
        <div className="row g-3 row-cols-1 row-cols-md-3">
          {[
            {name:"Cris", role:"dev", img:"https://i.pinimg.com/236x/a2/22/a8/a222a8d2895edcf2972bc4176d1d08e9.jpg"},
            {name:"Basty", role:"dev", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePtdfJnzseKBGyFD3oXDSgjg01HrbrH3LcA&s"},
            {name:"William", role:"dev", img:"https://i.pinimg.com/236x/5c/58/55/5c5855cb5186daa9d424f8189ed00dc2.jpg"},
          ].map((p)=>(
            <div className="col" key={p.name}>
              <div className="card h-100 text-center p-3">
                <img src={p.img} className="rounded mb-3" alt={p.name} style={{width:110,height:110,objectFit:'cover',margin:'0 auto'}}/>
                <strong className="mb-1">{p.name}</strong>
                <div className="text-secondary small">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-5">
        <h4 className="mb-3">Preguntas frecuentes</h4>
        <div className="accordion" id="faq">
          <div className="accordion-item bg-dark text-light border-info">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                ¿Cuánto demora el envío?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faq">
              <div className="accordion-body text-secondary">
                Habitualmente 24–72h hábiles según tu región. Te enviamos tracking y soporte por cualquier eventualidad.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-light border-info mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                ¿Qué pasa si un producto falla?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faq">
              <div className="accordion-body text-secondary">
                Cubrimos garantía según fabricante y ofrecemos diagnóstico rápido. Si corresponde cambio, gestionamos el reemplazo sin rodeos.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-light border-info mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                ¿Arman PCs a medida?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faq">
              <div className="accordion-body text-secondary">
                ¡Sí! Escríbenos por <a className="link-neon" href="mailto:contacto@levelup.cl">contacto@levelup.cl</a> y te proponemos una configuración ajustada a tu presupuesto y juegos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="p-4 p-md-5 rounded-3 neon-border">
          <h4 className="neon-text mb-2">¿List@ para subir de nivel?</h4>
          <p className="text-secondary mb-3">Explora nuestras categorías o pregúntanos por el setup ideal para ti.</p>
          <a href="/categorias" className="btn btn-neon me-2">Ver categorías</a>
          <a href="/contacto" className="btn btn-outline-info">Hablar con soporte</a>
        </div>
      </section>
    </div>
  )
}
