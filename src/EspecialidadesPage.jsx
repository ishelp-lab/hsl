import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope, ArrowLeft } from 'lucide-react'

function EspecialidadesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const specialties = [
    "Anestesiologia", "Bucomaxilofacial", "Cirurgia Vascular", "Cirurgia Bariátrica",
    "Cirurgia Geral", "Cirurgia Plástica", "Cirurgia Torácica", "Clínica de tratamento da Dor",
    "Clínica Médica", "Ecografia", "Eletroneuromiografia", "Endoscopia Digestiva",
    "Ginecologia", "Infectologia", "Maternidade", "Medicina Intensiva",
    "Nefrologia", "Neurocirurgia", "Obstetrícia", "Oncologia Clínica e Cirúrgica",
    "Ortopedia e Traumatologia", "Pediatria", "Pronto Socorro 24h", "Urologia"
  ]

  return (
    <>
      <header className="header-wrapper scrolled">
        <div className="navbar">
          <Link to="/" className="logo-container" style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Logo Hospital São Lucas" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">SÃO LUCAS</span>
              <span className="logo-subtitle">HOSPITAL</span>
            </div>
          </Link>
          <div className="navbar-actions">
            <Link to="/" className="nav-btn-wpp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Voltar ao Início
            </Link>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-light)' }}>
        <div className="section-header">
          <h2>Todas as Especialidades e Serviços</h2>
          <p>Confira a lista completa de exames e atendimentos oferecidos pelo Hospital São Lucas.</p>
        </div>
        
        <div className="specialties-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          {specialties.map((spec, index) => (
            <div key={index} className="specialty-item" style={{ padding: '15px' }}>
              <div className="specialty-icon-wrapper" style={{ width: '32px', height: '32px' }}>
                <Stethoscope size={16} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>{spec}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-wrapper">
        <div className="footer-bottom" style={{ borderTop: 'none' }}>
          <div>
            &copy; {new Date().getFullYear()} Hospital São Lucas. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  )
}

export default EspecialidadesPage
