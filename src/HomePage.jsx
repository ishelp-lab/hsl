import { useState, useEffect } from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Calendar, 
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
  BookmarkCheck
} from 'lucide-react'

function App() {
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
      const sections = ['inicio', 'sobre', 'exames', 'especialidades', 'infraestrutura', 'convenios', 'contato']
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

  // Base phone and messages
  const wppBaseUrl = "https://wa.me/554130329300"
  const getWppLink = (message) => `${wppBaseUrl}?text=${encodeURIComponent(message)}`

  const exams = [
    {
      id: 1,
      title: "Ressonância Magnética",
      badge: "Alta Tecnologia",
      desc: "Imagens de alta definição diagnóstica com o máximo conforto e rapidez.",
      wppMsg: "Olá, gostaria de agendar uma Ressonância Magnética no Hospital São Lucas."
    },
    {
      id: 2,
      title: "Tomografia Computadorizada",
      badge: "Multislice",
      desc: "Reconstruções tridimensionais precisas e com baixa dose de radiação.",
      wppMsg: "Olá, gostaria de agendar uma Tomografia Computadorizada no Hospital São Lucas."
    },
    {
      id: 3,
      title: "Mamografia Digital",
      badge: "Prevenção",
      desc: "Exame fundamental para a saúde da mulher, com alta resolução e sensibilidade.",
      wppMsg: "Olá, gostaria de agendar uma Mamografia Digital no Hospital São Lucas."
    },
    {
      id: 4,
      title: "Ultrassonografia",
      badge: "Geral e Doppler",
      desc: "Avaliação em tempo real de órgãos e tecidos, conduzida por especialistas dedicados.",
      wppMsg: "Olá, gostaria de agendar uma Ultrassonografia no Hospital São Lucas."
    },
    {
      id: 5,
      title: "Raio-X Digital",
      badge: "Diagnóstico Rápido",
      desc: "Imagens digitais imediatas enviadas diretamente para o seu médico, sem esperas.",
      wppMsg: "Olá, gostaria de realizar um Raio-X Digital no Hospital São Lucas."
    },
    {
      id: 6,
      title: "Doppler Transcraniano",
      badge: "Neurologia",
      desc: "Exame não invasivo para avaliação do fluxo sanguíneo cerebral de forma precisa.",
      wppMsg: "Olá, gostaria de agendar um Doppler Transcraniano no Hospital São Lucas."
    },
    {
      id: 7,
      title: "Eletroneuromiografia",
      badge: "Exame Especializado",
      desc: "Diagnóstico preciso de lesões no sistema nervoso periférico e muscular.",
      wppMsg: "Olá, gostaria de agendar uma Eletroneuromiografia no Hospital São Lucas."
    },
    {
      id: 8,
      title: "Exames Cardiológicos",
      badge: "Saúde do Coração",
      desc: "Eletrocardiograma (ECG), MAPA e Holter 24h para monitoramento cardíaco completo.",
      wppMsg: "Olá, gostaria de agendar Exames Cardiológicos no Hospital São Lucas."
    }
  ]

  const specialties = [
    { name: "Cardiologia", desc: "Prevenção, diagnóstico e tratamento das doenças do coração." },
    { name: "Ortopedia & Traumatologia", desc: "Cuidado especializado para ossos, articulações e lesões esportivas." },
    { name: "Ginecologia & Obstetrícia", desc: "Acompanhamento completo da saúde feminina e pré-natal humanizado." },
    { name: "Pediatria", desc: "Cuidado e carinho no atendimento à saúde das crianças e bebês." },
    { name: "Clínico Geral", desc: "Atendimento primário integral, check-ups e orientação especializada." },
    { name: "Neurologia", desc: "Tratamento de distúrbios do sistema nervoso e do cérebro." },
    { name: "Endocrinologia", desc: "Tratamento de distúrbios hormonais, diabetes e metabolismo." },
    { name: "Dermatologia", desc: "Diagnóstico e tratamento de patologias da pele, cabelos e unhas." }
  ]

  const infra = [
    {
      title: "Centro Cirúrgico Moderno",
      img: "https://images.unsplash.com/photo-1584515901367-f134706503ba?auto=format&fit=crop&q=80&w=800",
      desc: "Salas equipadas com tecnologia de ponta para cirurgias de alta complexidade com total segurança."
    },
    {
      title: "UTI Adulto e Neonatal",
      img: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800",
      desc: "Monitoramento contínuo 24 horas por equipe multidisciplinar altamente qualificada para cuidados intensivos."
    },
    {
      title: "Pronto Atendimento 24h",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      desc: "Estrutura pronta para emergências e urgências com triagem ágil e equipe médica sempre presencial."
    }
  ]

  const agreements = [
    "Unimed", "Cassi", "SulAmérica", "Bradesco Saúde", "Amil", 
    "Dr. Exame", "Sanepar", "Copel", "Medprev", "Particular & SUS"
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
              <li>
                <a 
                  href="#inicio" 
                  className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#exames" 
                  className={`nav-link ${activeSection === 'exames' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('exames'); }}
                >
                  Exames
                </a>
              </li>
              <li>
                <a 
                  href="#especialidades" 
                  className={`nav-link ${activeSection === 'especialidades' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a 
                  href="#infraestrutura" 
                  className={`nav-link ${activeSection === 'infraestrutura' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('infraestrutura'); }}
                >
                  Estrutura
                </a>
              </li>
              <li>
                <a 
                  href="#convenios" 
                  className={`nav-link ${activeSection === 'convenios' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('convenios'); }}
                >
                  Convênios
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className={`nav-link ${activeSection === 'contato' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }}
                >
                  Contato
                </a>
              </li>
              {/* Mobile button */}
              {mobileMenuOpen && (
                <li style={{ marginTop: '10px' }}>
                  <a 
                    href={getWppLink("Olá, gostaria de falar com o atendimento do Hospital São Lucas.")}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-btn-wpp"
                    style={{ justifyContent: 'center' }}
                  >
                    <MessageSquare size={16} />
                    Falar no WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="navbar-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a 
              href={getWppLink("Olá, gostaria de agendar uma consulta/exame no Hospital São Lucas.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-btn-wpp"
            >
              <MessageSquare size={16} />
              Falar no WhatsApp
            </a>
            
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <div id="inicio" className="hero-wrapper">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-h1">
              <span className="normal">ESTRUTURA COMPLETA</span>
              <span className="highlight">PARA CUIDAR DE VOCÊ.</span>
            </h1>
            <p className="hero-subtitle">
              Tecnologia, conforto e equipe qualificada em um só lugar!
            </p>
            <a 
              href={getWppLink("Olá, estou no site do Hospital São Lucas e gostaria de agendar um atendimento.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Falar com o Hospital
              <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS CARDS */}
      <div className="quick-access-wrapper">
        <div className="quick-access-grid">
          <a 
            href={getWppLink("Olá! Preciso de atendimento médico urgente. Como funciona o Pronto Atendimento 24h?")}
            target="_blank" 
            rel="noopener noreferrer" 
            className="quick-card"
          >
            <div className="quick-icon-wrapper">
              <Clock size={24} />
            </div>
            <h3>Pronto Atendimento 24h</h3>
            <p>Atendimento de urgência e emergência clínico e pediátrico a qualquer hora do dia ou da noite.</p>
            <span className="quick-link">
              Ver mais <ChevronRight size={16} />
            </span>
          </a>

          <a 
            href={getWppLink("Olá! Gostaria de agendar uma consulta médica. Quais são os horários disponíveis?")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="quick-card"
          >
            <div className="quick-icon-wrapper">
              <Calendar size={24} />
            </div>
            <h3>Agendar Consulta</h3>
            <p>Agende sua consulta eletiva com médicos especialistas com praticidade diretamente pelo WhatsApp.</p>
            <span className="quick-link">
              Agendar agora <ChevronRight size={16} />
            </span>
          </a>

          <a 
            href={getWppLink("Olá! Gostaria de agendar um exame de imagem no Hospital São Lucas.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="quick-card"
          >
            <div className="quick-icon-wrapper">
              <Activity size={24} />
            </div>
            <h3>Agendar Exame</h3>
            <p>Realize seus exames de ressonância, tomografia, raio-x, ultrassom e mais, com agilidade.</p>
            <span className="quick-link">
              Agendar exame <ChevronRight size={16} />
            </span>
          </a>

          <a 
            href={getWppLink("Olá! Gostaria de saber como ter acesso aos resultados dos meus exames feitos no hospital.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="quick-card"
          >
            <div className="quick-icon-wrapper">
              <FileText size={24} />
            </div>
            <h3>Resultados de Exames</h3>
            <p>Retire ou consulte os resultados dos seus exames de imagem e laboratoriais de forma prática.</p>
            <span className="quick-link">
              Consultar resultados <ChevronRight size={16} />
            </span>
          </a>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section id="sobre">
        <div className="about-grid">
          <div className="about-text">
            <h2>Sobre o Hospital São Lucas</h2>
            <p>
              Há mais de três décadas, o **Hospital São Lucas** é referência em saúde, oferecendo atendimento humanizado, segurança clínica e inovação tecnológica. Nossos serviços englobam diagnósticos precisos por imagem, consultas de rotina em múltiplas especialidades e suporte a emergências de alta complexidade.
            </p>
            <p>
              Nosso compromisso é com o bem-estar contínuo de cada paciente. Com uma equipe médica qualificada e instalações projetadas para oferecer o máximo de conforto, proporcionamos um atendimento integrado e centrado na vida.
            </p>
            
            <div className="about-bullets">
              <div className="about-bullet-item">
                <BookmarkCheck className="about-bullet-icon" size={20} />
                <div className="about-bullet-text">
                  <h4>Corpo Clínico Renomado</h4>
                  <p>Médicos altamente qualificados em constante atualização científica.</p>
                </div>
              </div>
              
              <div className="about-bullet-item">
                <Sparkles className="about-bullet-icon" size={20} />
                <div className="about-bullet-text">
                  <h4>Tecnologia de Imagem Avançada</h4>
                  <p>Equipamentos modernos que geram diagnósticos mais detalhados e rápidos.</p>
                </div>
              </div>
            </div>

            <a 
              href={getWppLink("Olá! Gostaria de conhecer melhor os serviços do Hospital São Lucas.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-btn-wpp"
              style={{ display: 'inline-flex', marginTop: '10px' }}
            >
              Falar Conosco
            </a>
          </div>

          <div className="about-image-container">
            <img src="/about_building.png" alt="Fachada Hospital São Lucas" className="about-image" />
            <div className="about-badge">
              <div className="about-badge-num">30+</div>
              <div className="about-badge-txt">Anos de Tradição<br />e Excelência</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMS SECTION */}
      <section id="exames" className="section-alt">
        <div>
          <div className="section-header">
            <h2>Nossos Exames</h2>
            <p>Estrutura diagnóstica completa por imagem e cardiologia com tecnologia de última geração.</p>
          </div>

          <div className="exams-grid">
            {exams.map((exam) => (
              <div key={exam.id} className="exam-card">
                <div className="exam-header">
                  <div className="exam-icon">
                    <Activity size={22} />
                  </div>
                  <span className="exam-title-badge">{exam.badge}</span>
                </div>
                <h3>{exam.title}</h3>
                <p>{exam.desc}</p>
                <a 
                  href={getWppLink(exam.wppMsg)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="exam-btn"
                >
                  <MessageSquare size={14} />
                  Agendar Exame
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES SECTION */}
      <section id="especialidades">
        <div className="specialties-container">
          <div className="specialties-sidebar">
            <h2>Especialidades Médicas</h2>
            <p>
              Contamos com um corpo clínico multidisciplinar pronto para realizar consultas eletivas preventivas e acompanhamentos terapêuticos especializados.
            </p>
            <div className="specialties-cta">
              <h4>Precisa de outra especialidade?</h4>
              <p>Fale com nossa equipe de atendimento no WhatsApp para consultar toda a lista de profissionais credenciados.</p>
              <a 
                href={getWppLink("Olá, gostaria de saber se o Hospital São Lucas atende a especialidade de: [Digite a especialidade aqui].")}
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-btn-wpp"
                style={{ display: 'inline-flex' }}
              >
                Consultar Especialidades
              </a>
            </div>
          </div>

          <div className="specialties-grid">
            {specialties.map((spec, index) => (
              <div key={index} className="specialty-item">
                <div className="specialty-icon-wrapper">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <h3>{spec.name}</h3>
                  <p>{spec.desc}</p>
                  <a 
                    href={getWppLink(`Olá, gostaria de agendar uma consulta na especialidade de ${spec.name} no Hospital São Lucas.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}
                  >
                    Agendar <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE / DIFFERENTIALS */}
      <section id="infraestrutura" className="section-alt">
        <div>
          <div className="section-header">
            <h2>Infraestrutura e Tecnologia</h2>
            <p>Ambientes planejados sob rigorosos padrões hospitalares para garantir conforto, segurança e humanização.</p>
          </div>

          <div className="infra-grid">
            {infra.map((item, index) => (
              <div key={index} className="infra-card">
                <div className="infra-img-wrapper">
                  <img src={item.img} alt={item.title} className="infra-img" />
                </div>
                <div className="infra-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGREEMENTS SECTION */}
      <section id="convenios">
        <div className="section-header">
          <h2>Convênios Atendidos</h2>
          <p>Trabalhamos com uma ampla rede credenciada de planos de saúde, além de convênios corporativos e atendimentos particulares.</p>
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
            *A cobertura de planos de saúde pode variar por exame e consulta. Confirme seu credenciamento antes do atendimento.
          </p>
          <a 
            href={getWppLink("Olá, gostaria de verificar se o meu convênio [digite o convênio] cobre o procedimento [digite o procedimento] no Hospital São Lucas.")}
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-btn-wpp"
            style={{ display: 'inline-flex' }}
          >
            <Shield size={16} style={{ marginRight: '6px' }} />
            Verificar Cobertura
          </a>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section id="contato">
        <div className="contact-grid">
          <div className="contact-info-block">
            <h2>Fale Conosco</h2>
            <p>Estamos prontos para atender você. Entre em contato pelos nossos canais oficiais ou faça uma visita.</p>
            
            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-method-text">
                  <h4>Telefone e WhatsApp</h4>
                  <p><a href="tel:+554130329300" style={{ fontWeight: '500' }}>(41) 3032-9300</a></p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-text">
                  <h4>Endereço</h4>
                  <p>R. Generoso Marquês, 2022 – Centro, Campo Largo – PR, 83601-050</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <Clock size={20} />
                </div>
                <div className="contact-method-text">
                  <h4>Horário de Atendimento</h4>
                  <p>
                    Todos os dias:<br />
                    08h00 às 18h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-container">
            {/* Real embedded Google Map centered near Campo Largo */}
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
      <a 
        href={getWppLink("Olá! Gostaria de tirar uma dúvida sobre exames ou consultas no Hospital São Lucas.")}
        target="_blank" 
        rel="noopener noreferrer" 
        className="wpp-floating"
        aria-label="Atendimento pelo WhatsApp"
      >
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
            <p>
              Oferecendo excelência médica e diagnósticos precisos por imagem com foco no cuidado humanizado de cada paciente.
            </p>
          </div>

          <div className="footer-col">
            <h3>Links Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}>Início</a></li>
              <li><a href="#sobre" onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }}>Sobre Nós</a></li>
              <li><a href="#exames" onClick={(e) => { e.preventDefault(); handleNavClick('exames'); }}>Nossos Exames</a></li>
              <li><a href="#especialidades" onClick={(e) => { e.preventDefault(); handleNavClick('especialidades'); }}>Especialidades</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Institucional</h3>
            <ul className="footer-links">
              <li><a href="#infraestrutura" onClick={(e) => { e.preventDefault(); handleNavClick('infraestrutura'); }}>Estrutura</a></li>
              <li><a href="#convenios" onClick={(e) => { e.preventDefault(); handleNavClick('convenios'); }}>Convênios</a></li>
              <li><a href="#contato" onClick={(e) => { e.preventDefault(); handleNavClick('contato'); }}>Fale Conosco</a></li>
              <li><a href={getWppLink("Olá, gostaria de falar com a administração do Hospital São Lucas.")} target="_blank" rel="noopener noreferrer">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Funcionamento</h3>
            <div className="footer-hours-grid">
              <div className="footer-hours-row">
                <span>Segunda a Sexta</span>
                <span>07:30 - 19:00</span>
              </div>
              <div className="footer-hours-row">
                <span>Sábados</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="footer-hours-row" style={{ border: 'none' }}>
                <span>Domingos</span>
                <span>Fechado</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>Pronto Atendimento 24h opera continuamente.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Hospital São Lucas. Todos os direitos reservados.
          </div>
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

export default App
