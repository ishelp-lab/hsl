import { useState, useEffect } from 'react'
import {
  Phone,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react'
import OriginalApp from './App.original.jsx'
import logoIsHelp from './assets/logo-ishelp.png'

function App() {
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    // Check if the URL query parameter 'preview=true' is set, or if local storage has preview mode enabled
    const params = new URLSearchParams(window.location.search)
    if (params.get('preview') === 'true' || localStorage.getItem('hsl-preview') === 'true') {
      setIsPreview(true)
      // Save it to localStorage so the preview persists when navigating/refreshing without the query param
      if (params.get('preview') === 'true') {
        localStorage.setItem('hsl-preview', 'true')
      }
    }
  }, [])

  // If the user wants to leave preview mode, they can do so by passing ?preview=false
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('preview') === 'false') {
      localStorage.removeItem('hsl-preview')
      setIsPreview(false)
    }
  }, [])

  if (isPreview) {
    return <OriginalApp />
  }

  const wppBaseUrl = "https://wa.me/554130329300"
  const getWppLink = (message) => `${wppBaseUrl}?text=${encodeURIComponent(message)}`

  return (
    <div className="m-page-body">
      {/* Background decoration elements */}
      <div className="m-glow-1"></div>
      <div className="m-glow-2"></div>

      {/* Header with Hospital logo */}
      <header className="m-header">
        <div className="m-logo-hsp">
          <img src="/logo.png" alt="Logo Hospital São Lucas" className="m-logo-hsp-img" />
          <div className="m-logo-hsp-text">
            <span className="m-logo-hsp-title">SÃO LUCAS</span>
            <span className="m-logo-hsp-subtitle">HOSPITAL</span>
          </div>
        </div>
      </header>

      {/* Main card */}
      <main className="m-content-container">
        <div className="m-card">
          <div className="m-badge">
            <span className="m-badge-dot"></span>
            Site em Desenvolvimento
          </div>

          <h1 className="m-title">Estamos preparando um novo portal para você</h1>

          <p className="m-description">
            O site oficial do <strong>Hospital São Lucas</strong> está passando por atualizações para oferecer uma experiência digital mais moderna, rápida e completa. Em breve, você terá acesso a um site completo para conhecer nossas especialidades, corpo clínico, exames de imagem, informações sobre nossa infraestrutura e muito mais.
          </p>

          {/* Is Help middle branding */}
          <div className="m-dev-middle">
            <span className="m-dev-middle-text">Site desenvolvido por:</span>
            <a
              href="https://ishelp.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="m-developer-logo-link"
              title="Is Help"
            >
              <img src={logoIsHelp} alt="Logo Is Help" className="m-dev-middle-logo" style={{ height: "50px" }} />
            </a>
          </div>

          <div className="m-actions">
            <a
              href={getWppLink("Olá, gostaria de agendar um atendimento no Hospital São Lucas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="m-btn m-btn-primary"
            >
              <MessageSquare size={18} />
              Falar no WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=R.+Generoso+Marquês,+2022+-+Centro,+Campo+Largo+-+PR,+83601-050"
              target="_blank"
              rel="noopener noreferrer"
              className="m-btn m-btn-secondary"
            >
              <MapPin size={18} />
              Ver Localização
            </a>
          </div>

          <div className="m-contact-bar">
            <a href="tel:+554130329300" className="m-contact-item">
              <Phone className="m-contact-icon" size={16} />
              (41) 3032-9300
            </a>
            <div className="m-contact-item">
              <Clock className="m-contact-icon" size={16} />
              Todos os dias: 08h00 às 18h00
            </div>
            <a
              href="https://maps.google.com/?q=R.+Generoso+Marquês,+2022+-+Centro,+Campo+Largo+-+PR,+83601-050"
              target="_blank"
              rel="noopener noreferrer"
              className="m-contact-item"
            >
              <MapPin className="m-contact-icon" size={16} />
              R. Generoso Marquês, 2022 – Centro, Campo Largo – PR
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="m-footer">
        <p className="m-footer-copyright">
          &copy; {new Date().getFullYear()} Hospital São Lucas. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default App
