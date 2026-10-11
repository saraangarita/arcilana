import { useState } from 'react'
import useDocumentosMeta from '../ganchos/useDocumentosMeta.js'
import { MARCA, linkWhatsApp } from '../datos/config.js'
import BotonWhatsApp from '../componentes/BotonWhatsApp.jsx'

const FAQ = [
  {
    q: '¿Las piezas son resistentes?',
    a: 'Son cerámica esmaltada horneada: resistentes para el uso diario, pero trátalas como lo que son, piezas únicas. Aquí te contamos cómo cuidarlas.',
  },
  {
    q: '¿Hacen piezas personalizadas?',
    a: '¡Sí! Regalos, novias, marcas, eventos. Cuéntanos tu idea por WhatsApp o el formulario y armamos una propuesta.',
  },
  {
    q: '¿Cuánto tarda el envío?',
    a: 'Preparamos tu pedido en 1–3 días hábiles y el envío toma entre 1 y 5 días hábiles según tu ciudad. Coordinamos todo por WhatsApp.',
  },
  {
    q: '¿Cómo pago?',
    a: 'Aceptamos Nequi, Daviplata, transferencia Bancolombia y efectivo contra entrega en Cartagena. Se coordina al confirmar tu pedido.',
  },
]

export default function Contacto() {
  useDocumentosMeta(
    'Contacto — Hablemos',
    'Escríbenos por WhatsApp o correo para pedidos, piezas personalizadas y preguntas. Lun–Vie 9:00–6:00. Cartagena, Colombia.',
  )
  const [enviado, setEnviado] = useState(false)

  const enviar = (e) => {
    e.preventDefault()
    const datos = new FormData(e.target)
    // Honeypot anti-spam: si el campo oculto viene lleno, es un bot
    if (datos.get('empresa')) return

    const mensaje = `Hola Arcilana ✿ soy ${datos.get('nombre')}.\n${datos.get('mensaje')}\n\nMi correo: ${datos.get('correo')}`
    window.open(linkWhatsApp(mensaje), '_blank', 'noopener')
    setEnviado(true)
    e.target.reset()
  }

  return (
    <section className="seccion pagina-contacto">
      <div className="contenedor">
        <div className="cab-seccion reveal columna">
          <div>
            <div className="overline">Contacto</div>
            <h1 className="titulo-pagina">Hablemos…</h1>
          </div>
        </div>

        <div className="contacto-grid">
          <div className="contacto-formulario reveal">
            <h2>Cuéntanos tu idea</h2>
            <p className="suave">
              Para pedidos del catálogo, personalizaciones o solo saludar. Te recomendamos
              WhatsApp: es donde más rápido te respondemos.
            </p>

            {enviado && (
              <div className="aviso-ok">
                ¡Gracias! Abrimos WhatsApp con tu mensaje listo para enviar 💛
              </div>
            )}

            <form className="form-contacto" onSubmit={enviar}>
              {/* Honeypot anti-bots (oculto para humanos) */}
              <input type="text" name="empresa" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="campo">
                <label htmlFor="nombre">Tu nombre *</label>
                <input id="nombre" name="nombre" type="text" required placeholder="¿Cómo te llamas?" />
              </div>
              <div className="campo">
                <label htmlFor="correo">Tu correo *</label>
                <input id="correo" name="correo" type="email" required placeholder="tucorreo@ejemplo.com" />
              </div>
              <div className="campo">
                <label htmlFor="mensaje">Tu mensaje *</label>
                <textarea id="mensaje" name="mensaje" required rows={5} placeholder="Cuéntanos qué buscas: una pieza del catálogo, un pedido especial, un regalo…" />
              </div>
              <button className="btn btn-primario" type="submit">Enviar mensaje</button>
              <p className="mini-nota">
                Se abre WhatsApp con tu mensaje listo. También puedes escribirnos directo a{' '}
                <a href={`mailto:${MARCA.email}`}>{MARCA.email}</a>.
              </p>
            </form>
          </div>

          <div className="contacto-lateral reveal">
            <div className="tarjeta-contacto">
              <h3>Directo y sin vueltas</h3>
              <BotonWhatsApp mensaje="Hola Arcilana ✿">
                WhatsApp {MARCA.whatsappBonito}
              </BotonWhatsApp>
              <p className="suave">{MARCA.ciudad}</p>

              <h4>Horario de atención</h4>
              <div className="horario claro-fondo">
                {MARCA.horario.map((h) => (
                  <div key={h.dias}>
                    <span>{h.dias}</span>
                    <span>{h.horas}</span>
                  </div>
                ))}
              </div>
              <p className="mini-nota">
                Si nos escribes fuera de horario, te respondemos el siguiente día hábil 💛
              </p>
            </div>

            <div className="faq">
              <h3>Preguntas frecuentes</h3>
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
