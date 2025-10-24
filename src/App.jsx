import './index.css'

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container inner">
          <div className="brand">Maderas Don Miguel</div>
          <nav className="nav">
            <a href="#productos">Productos</a>
            <a href="#calidad">Calidad</a>
            <a href="#historia">Historia</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container wrap">
          <h1>Maderas premium para proyectos exigentes</h1>
          <p>
            Tradición, selección cuidadosa y servicio personalizado. Abastecemos obras y
            proyectos residenciales con maderas de primera, asesoramiento experto y
            logística confiable.
          </p>
          <div className="actions">
            <a className="btn" href="https://wa.me/5493765076743?text=Hola%20Maderas%20Don%20Miguel%2C%20quisiera%20consultar%20por%20maderas." target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
            <a className="btn outline" href="https://www.instagram.com/maderasdonmiguel/" target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="productos">
        <div className="container">
          <h2>Nuestros productos</h2>
          <div className="cards">
            <article className="card">
              <h3>Maderas duras</h3>
              <p>Selección de maderas nobles para mobiliario y terminaciones finas.</p>
            </article>
            <article className="card">
              <h3>Tableros y cortes</h3>
              <p>Tableros a medida y cortes precisos para optimizar tu proyecto.</p>
            </article>
            <article className="card">
              <h3>Insumos y ferretería</h3>
              <p>Complementos, barnices, herrajes y artículos de ferretería de calidad profesional.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="calidad">
        <div className="container">
          <h2>Compromiso de calidad</h2>
          <div className="cards">
            <article className="card">
              <h3>Selección rigurosa</h3>
              <p>Control de origen y humedad para garantizar estabilidad y durabilidad.</p>
            </article>
            <article className="card">
              <h3>Asesoramiento experto</h3>
              <p>Te ayudamos a elegir la mejor madera para cada aplicación.</p>
            </article>
            <article className="card">
              <h3>Logística eficaz</h3>
              <p>Entrega puntual y segura para que tu proyecto no se detenga.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="historia">
        <div className="container">
          <h2>Nuestra historia</h2>
          <p style={{ maxWidth: 800, color: 'var(--muted)' }}>
            Una trayectoria construida en base a la confianza y el respeto por el
            oficio. Crecemos con nuestros clientes y sus proyectos, manteniendo un
            estándar alto en cada pieza que entregamos.
          </p>
        </div>
      </section>

      <section className="section" id="ubicacion">
        <div className="container">
          <h2>Ubicación</h2>
          <p style={{ maxWidth: 800, color: 'var(--muted)' }}>
            Nos encontrás en C. 147 6492, N3300 Posadas, Misiones. Coordinamos retiro y entregas.
          </p>
          <div className="map" style={{ marginTop: 18 }}>
            <iframe
              title="Mapa Maderas Don Miguel"
              src="https://www.google.com/maps?q=C.%20147%206492,%20N3300%20Posadas,%20Misiones&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="actions" style={{ marginTop: 18 }}>
            <a
              className="btn outline"
              href="https://www.google.com/maps/search/?api=1&query=C.%20147%206492,%20N3300%20Posadas,%20Misiones"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contacto">
        <div className="container inner">
          <div>© {new Date().getFullYear()} Maderas Don Miguel</div>
          <div style={{ display: 'flex', gap: 14 }}>
            <a href="https://www.instagram.com/maderasdonmiguel/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/5493765076743?text=Hola%20Maderas%20Don%20Miguel" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  )
}
