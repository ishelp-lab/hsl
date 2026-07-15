import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  MapPin, 
  Clock, 
  FileText, 
  Activity, 
  Heart, 
  Shield, 
  Award, 
  Menu, 
  X, 
  ArrowRight, 
  Stethoscope, 
  MessageSquare,
  ChevronRight,
  Sparkles,
  BookmarkCheck,
  Info,
  Users,
  Newspaper,
  Megaphone,
  Calendar,
  Camera,
  Briefcase,
  HelpCircle
} from 'lucide-react'

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Simple active link detection
      const sections = ['inicio', 'ohospital', 'especialidades', 'pacientes', 'convenios', 'doacoes', 'noticias', 'contato']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const wppBaseUrl = "https://wa.me/554130329300"
  const getWppLink = (message) => `${wppBaseUrl}?text=${encodeURIComponent(message)}`

  const specialties = [
    "Anestesiologia", "Bucomaxilofacial", "Cirurgia Vascular", "Cirurgia Bariátrica",
    "Cirurgia Geral", "Cirurgia Plástica", "Cirurgia Torácica", "Clínica de tratamento da Dor",
    "Clínica Médica", "Ecografia", "Eletroneuromiografia", "Endoscopia Digestiva",
    "Ginecologia", "Infectologia", "Maternidade", "Medicina Intensiva",
    "Nefrologia", "Neurocirurgia", "Obstetrícia", "Oncologia Clínica e Cirúrgica",
    "Ortopedia e Traumatologia", "Pediatria", "Pronto Socorro 24h", "Urologia"
  ]

  const agreements = [
    "Amil", "Fundação Sanepar", "Medsul", "Nossa Saúde", 
    "Paraná Clínicas", "Postal Saúde", "Saúde Caixa", "Unimed", "Voam"
  ]

  return (
    <>
      {/* HEADER / NAVIGATION */}
      <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar">
          <div className="logo-container" onClick={() => handleNavClick('inicio')} style={{ cursor: 'pointer' }}>
            <img src="/logo.png" alt="Logo Hospital São Lucas" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">SÃO LUCAS</span>
              <span className="logo-subtitle">HOSPITAL</span>
            </div>
          </div>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <li><a href="#inicio" className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}>Início</a></li>
              <li><a href="#ohospital" className={`nav-link ${activeSection === 'ohospital' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('ohospital'); }}>O Hospital</a></li>
              <li><a href="#especialidades" className={`nav-link ${activeSection === 'especialidades' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}>Especialidades</a></li>
              <li><a href="#pacientes" className={`nav-link ${activeSection === 'pacientes' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('pacientes'); }}>Pacientes</a></li>
              <li><a href="#convenios" className={`nav-link ${activeSection === 'convenios' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('convenios'); }}>Convênios</a></li>
              <li><a href="#doacoes" className={`nav-link ${activeSection === 'doacoes' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('doacoes'); }}>Doações</a></li>
              <li><a href="#noticias" className={`nav-link ${activeSection === 'noticias' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('noticias'); }}>Notícias</a></li>
              <li><a href="#contato" className={`nav-link ${activeSection === 'contato' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }}>Contato</a></li>
            </ul>
          </nav>

          <div className="navbar-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href={getWppLink("Olá, gostaria de agendar uma consulta/exame no Hospital São Lucas.")} target="_blank" rel="noopener noreferrer" className="nav-btn-wpp">
              <MessageSquare size={16} />
              Falar no WhatsApp
            </a>
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION (INÍCIO) */}
      <div id="inicio" className="hero-wrapper">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-h1">
              <span className="normal">ESTRUTURA COMPLETA</span>
              <span className="highlight">PARA CUIDAR DE VOCÊ.</span>
            </h1>
            <p className="hero-subtitle">
              Conheça nossos destaques e a excelência em atendimento médico.
            </p>
            <a href={getWppLink("Olá, estou no site do Hospital São Lucas e gostaria de agendar um atendimento.")} target="_blank" rel="noopener noreferrer" className="hero-btn">
              Falar com o Hospital
              <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS CARDS (DESTAQUES - INÍCIO) */}
      <div className="quick-access-wrapper">
        <div className="quick-access-grid">
          <a href="#pacientes" onClick={(e) => { e.preventDefault(); handleNavClick('pacientes'); }} className="quick-card">
            <div className="quick-icon-wrapper"><Info size={24} /></div>
            <h3>Orientações para Internação</h3>
            <p>Tudo o que você precisa saber para o seu período de internação e alta.</p>
            <span className="quick-link">Saber mais <ChevronRight size={16} /></span>
          </a>
          <a href="#especialidades" onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }} className="quick-card">
            <div className="quick-icon-wrapper"><Activity size={24} /></div>
            <h3>Nossas Especialidades</h3>
            <p>Corpo clínico completo e serviços diagnósticos de alta tecnologia.</p>
            <span className="quick-link">Ver especialidades <ChevronRight size={16} /></span>
          </a>
          <a href="#ohospital" onClick={(e) => { e.preventDefault(); handleNavClick('ohospital'); }} className="quick-card">
            <div className="quick-icon-wrapper"><Heart size={24} /></div>
            <h3>O Hospital</h3>
            <p>Conheça nossa história, estrutura, missão e valores institucionais.</p>
            <span className="quick-link">Conhecer <ChevronRight size={16} /></span>
          </a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }} className="quick-card">
            <div className="quick-icon-wrapper"><Phone size={24} /></div>
            <h3>Fale Conosco</h3>
            <p>Canais de atendimento, localização, ouvidoria e telefones úteis.</p>
            <span className="quick-link">Contato <ChevronRight size={16} /></span>
          </a>
        </div>
      </div>

      {/* O HOSPITAL SECTION */}
      <section id="ohospital">
        <div className="about-grid">
          <div className="about-text">
            <h2>O Hospital</h2>
            
            <div className="about-bullets" style={{ marginTop: '30px' }}>
              <div className="about-bullet-item">
                <BookmarkCheck className="about-bullet-icon" size={24} style={{ marginTop: '4px' }} />
                <div className="about-bullet-text">
                  <h4>História</h4>
                  <p>Há mais de três décadas, o Hospital São Lucas é referência em saúde, oferecendo atendimento humanizado, segurança clínica e inovação tecnológica.</p>
                </div>
              </div>
              
              <div className="about-bullet-item">
                <Sparkles className="about-bullet-icon" size={24} style={{ marginTop: '4px' }} />
                <div className="about-bullet-text">
                  <h4>Missão, Visão e Valores</h4>
                  <p>Nosso compromisso é com o bem-estar contínuo de cada paciente, centrando nosso atendimento na valorização da vida com ética e excelência.</p>
                </div>
              </div>

              <div className="about-bullet-item">
                <Heart className="about-bullet-icon" size={24} style={{ marginTop: '4px' }} />
                <div className="about-bullet-text">
                  <h4>Estrutura</h4>
                  <p>Instalações projetadas para oferecer o máximo de conforto e tecnologia, incluindo Centro Cirúrgico, UTI e Pronto Atendimento.</p>
                </div>
              </div>

              <div className="about-bullet-item">
                <Users className="about-bullet-icon" size={24} style={{ marginTop: '4px' }} />
                <div className="about-bullet-text">
                  <h4>Gestão / Diretoria</h4>
                  <p>Administração focada em transparência, sustentabilidade e no desenvolvimento constante de nossas equipes.</p>
                </div>
              </div>

              <div className="about-bullet-item">
                <Award className="about-bullet-icon" size={24} style={{ marginTop: '4px' }} />
                <div className="about-bullet-text">
                  <h4>Certificações e Habilitações</h4>
                  <p>Garantia de processos de alta qualidade chancelados por rigorosos órgãos e normas de saúde.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="about-image-container">
            <img src="/about_building.png" alt="Fachada Hospital São Lucas" className="about-image" />
            <div className="about-badge">
              <div className="about-badge-num">30+</div>
              <div className="about-badge-txt">Anos de<br />Tradição</div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES E SERVIÇOS SECTION */}
      <section id="especialidades" className="section-alt">
        <div className="specialties-container">
          <div className="specialties-sidebar">
            <h2>Especialidades e Serviços</h2>
            <p>
              Contamos com um corpo clínico multidisciplinar pronto para realizar consultas eletivas, diagnósticos de imagem, exames avançados e acompanhamentos terapêuticos especializados.
            </p>
            <div className="specialties-cta">
              <h4>Agendamento</h4>
              <p>Fale com nossa equipe de atendimento no WhatsApp para agendar consultas e exames.</p>
              <a href={getWppLink("Olá, gostaria de agendar um atendimento em uma especialidade/serviço no Hospital São Lucas.")} target="_blank" rel="noopener noreferrer" className="nav-btn-wpp" style={{ display: 'inline-flex' }}>
                Agendar Atendimento
              </a>

              <h4 style={{ marginTop: '30px' }}>Lista Completa</h4>
              <p>Conheça todos os nossos exames, serviços e especialidades médicas.</p>
              <Link to="/especialidades" className="nav-btn-wpp" style={{ display: 'inline-flex', background: 'var(--secondary)' }}>
                Ver Todos os Exames
              </Link>
            </div>
          </div>

          <div className="specialties-grid">
            {specialties.slice(0, 8).map((spec, index) => (
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
        </div>
      </section>

      {/* PACIENTES E VISITANTES SECTION */}
      <section id="pacientes">
        <div>
          <div className="section-header">
            <h2>Pacientes e Visitantes</h2>
            <p>Informações e orientações essenciais para garantir conforto, segurança e uma estadia tranquila.</p>
          </div>

          <div className="infra-grid">
            <div className="infra-card">
              <div className="infra-card-body" style={{ padding: '30px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}><Info size={32} /></div>
                <h3>Orientações para Internação e Alta</h3>
                <p style={{ marginTop: '10px' }}>O que trazer, documentos necessários, regras do quarto e instruções detalhadas para o momento de sua alta hospitalar.</p>
              </div>
            </div>
            
            <div className="infra-card">
              <div className="infra-card-body" style={{ padding: '30px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}><Clock size={32} /></div>
                <h3>Horários de Visita</h3>
                <p style={{ marginTop: '10px' }}>Regras de acesso, horários definidos para UTI, Enfermarias e Apartamentos para manter o descanso dos pacientes.</p>
              </div>
            </div>

            <div className="infra-card">
              <div className="infra-card-body" style={{ padding: '30px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}><FileText size={32} /></div>
                <h3>Solicitação de Prontuários</h3>
                <p style={{ marginTop: '10px' }}>Procedimentos e documentações necessárias para a solicitação de cópias de prontuários médicos pelo paciente ou familiar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVÊNIOS SECTION */}
      <section id="convenios" className="section-alt">
        <div className="section-header">
          <h2>Convênios Atendidos</h2>
          <p>Trabalhamos com uma ampla rede credenciada de planos de saúde.</p>
        </div>

        <div className="agreements-grid">
          {agreements.map((name, index) => (
            <div key={index} className="agreement-logo-card">
              <span className="agreement-logo-name">{name}</span>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
            *A cobertura de planos de saúde pode variar por procedimento. Confirme seu credenciamento antes do atendimento.
          </p>
          <a href={getWppLink("Olá, gostaria de verificar se o meu convênio [digite o convênio] cobre o procedimento [digite o procedimento] no Hospital São Lucas.")} target="_blank" rel="noopener noreferrer" className="nav-btn-wpp" style={{ display: 'inline-flex' }}>
            <Shield size={16} style={{ marginRight: '6px' }} />
            Verificar Cobertura
          </a>
        </div>
      </section>

      {/* DOAÇÕES E VOLUNTARIADO SECTION */}
      <section id="doacoes">
        <div>
          <div className="section-header">
            <h2>Doações e Voluntariado</h2>
            <p>Junte-se a nós para transformar a saúde e apoiar quem mais precisa.</p>
          </div>

          <div className="infra-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            <div className="infra-card">
              <div className="infra-card-body" style={{ padding: '40px' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}><Heart size={40} /></div>
                <h3>Doações e Apoio Institucional</h3>
                <p style={{ marginTop: '15px' }}>Saiba como pessoas físicas e empresas podem contribuir para a melhoria de nossa infraestrutura e projetos assistenciais através de doações diretas e parcerias.</p>
                <button className="nav-btn-wpp" style={{ marginTop: '20px', background: 'var(--secondary)' }}>Saiba Como Doar</button>
              </div>
            </div>
            
            <div className="infra-card">
              <div className="infra-card-body" style={{ padding: '40px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}><Users size={40} /></div>
                <h3>Voluntariado</h3>
                <p style={{ marginTop: '15px' }}>Dedique um pouco do seu tempo e talento para levar conforto, alegria e suporte aos nossos pacientes. Conheça nosso programa oficial de voluntariado.</p>
                <button className="nav-btn-wpp" style={{ marginTop: '20px' }}>Seja um Voluntário</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS SECTION */}
      <section id="noticias" className="section-alt">
        <div>
          <div className="section-header">
            <h2>Notícias e Informações</h2>
            <p>Fique por dentro das últimas novidades, eventos e comunicados do Hospital São Lucas.</p>
          </div>

          <div className="quick-access-grid">
            <div className="quick-card">
              <div className="quick-icon-wrapper" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7' }}><Newspaper size={24} /></div>
              <h3>Notícias</h3>
              <p>Acompanhe os avanços médicos, dicas de saúde e inovações da nossa equipe.</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon-wrapper" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7' }}><Megaphone size={24} /></div>
              <h3>Comunicados</h3>
              <p>Avisos importantes sobre funcionamento, serviços e atualizações institucionais.</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon-wrapper" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7' }}><Calendar size={24} /></div>
              <h3>Eventos</h3>
              <p>Palestras, campanhas de saúde e encontros promovidos para a comunidade.</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon-wrapper" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7' }}><Camera size={24} /></div>
              <h3>Imprensa</h3>
              <p>Acesso a materiais de divulgação, releases e contatos para jornalistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO & LOCALIZAÇÃO */}
      <section id="contato">
        <div className="contact-grid">
          <div className="contact-info-block">
            <h2>Contato</h2>
            <p>Estamos prontos para atender você. Utilize nossos canais ou faça-nos uma visita.</p>
            
            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon"><Phone size={20} /></div>
                <div className="contact-method-text">
                  <h4>Fale Conosco (Telefones e E-mails)</h4>
                  <p><a href="tel:+554130329300" style={{ fontWeight: '500' }}>(41) 3032-9300</a><br/>contato@hospitalsaolucas.com.br</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon"><MapPin size={20} /></div>
                <div className="contact-method-text">
                  <h4>Localização</h4>
                  <p>R. Generoso Marquês, 2022 – Centro, Campo Largo – PR, 83601-050</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon"><HelpCircle size={20} /></div>
                <div className="contact-method-text">
                  <h4>Ouvidoria</h4>
                  <p>Para elogios, sugestões ou reclamações, acesse nosso canal exclusivo de ouvidoria.</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon"><Briefcase size={20} /></div>
                <div className="contact-method-text">
                  <h4>Trabalhe Conosco</h4>
                  <p>Faça parte da nossa equipe. Envie seu currículo e acompanhe nossas vagas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              title="Mapa de Localização do Hospital São Lucas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.597654516139!2d-49.53974442469956!3d-25.40555677755866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ddf93c5d63ef1b%3A0x6e9f78328761a296!2sR.%20Generoso%20Marques%2C%202022%20-%20Centro%2C%20Campo%20Largo%20-%20PR%2C%2083601-390!5e0!3m2!1spt-BR!2sbr!4v1721000000000!5m2!1spt-BR!2sbr" 
              className="map-iframe"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href={getWppLink("Olá! Gostaria de tirar uma dúvida no Hospital São Lucas.")} target="_blank" rel="noopener noreferrer" className="wpp-floating" aria-label="Atendimento pelo WhatsApp">
        <MessageSquare size={30} />
      </a>

      {/* FOOTER */}
      <footer className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo-container" style={{ gap: '10px' }}>
              <img src="/logo.png" alt="Logo Hospital São Lucas" className="logo-img" style={{ height: '42px', filter: 'brightness(0) invert(1)' }} />
              <div className="logo-text">
                <span className="logo-title" style={{ fontSize: '1.15rem' }}>SÃO LUCAS</span>
                <span className="logo-subtitle" style={{ fontSize: '0.65rem' }}>HOSPITAL</span>
              </div>
            </div>
            <p>Oferecendo excelência médica e diagnósticos precisos com foco no cuidado humanizado.</p>
          </div>

          <div className="footer-col">
            <h3>Navegação</h3>
            <ul className="footer-links">
              <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}>Início</a></li>
              <li><a href="#ohospital" onClick={(e) => { e.preventDefault(); handleNavClick('ohospital'); }}>O Hospital</a></li>
              <li><a href="#especialidades" onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}>Especialidades e Serviços</a></li>
              <li><a href="#pacientes" onClick={(e) => { e.preventDefault(); handleNavClick('pacientes'); }}>Pacientes e Visitantes</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Institucional</h3>
            <ul className="footer-links">
              <li><a href="#convenios" onClick={(e) => { e.preventDefault(); handleNavClick('convenios'); }}>Convênios</a></li>
              <li><a href="#doacoes" onClick={(e) => { e.preventDefault(); handleNavClick('doacoes'); }}>Doações e Voluntariado</a></li>
              <li><a href="#noticias" onClick={(e) => { e.preventDefault(); handleNavClick('noticias'); }}>Notícias</a></li>
              <li><a href="#contato" onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }}>Contato</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Funcionamento Geral</h3>
            <div className="footer-hours-grid">
              <div className="footer-hours-row">
                <span>Segunda a Sexta</span>
                <span>07:30 - 19:00</span>
              </div>
              <div className="footer-hours-row">
                <span>Sábados</span>
                <span>08:00 - 12:00</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>Pronto Socorro 24h opera continuamente, todos os dias.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Hospital São Lucas. Todos os direitos reservados.</div>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
