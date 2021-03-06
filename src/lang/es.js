const AboutUsId = 'quienes-somos';
const ServicesId = 'servicios';
const TechId = 'tecnologias';
// const ProjectsId = 'proyectos';
const ContactId = 'contacto';

module.exports = {
  /* SEO */
  meta: {
    title: 'Inicio',
    description:
      'Te llevamos al mundo digital. Desarrolla y potencia tu página web, encuentra soluciones digitales para tu negocio, haz crecer tu marca, marca tendencia con KDA.',
  },
  /* Navbar */
  linkTitle: 'Ir a la sección de',
  links: [
    { name: 'inicio', href: '/es/#' },
    { name: 'quiénes somos', href: `/es/#${AboutUsId}` },
    { name: 'servicios', href: `/es/#${ServicesId}` },
    // { name: 'tecnologías', href: `/es/#${TechId}` },
    // { name: 'proyectos', href: `/es/#${ProjectsId}` },
    { name: 'contáctanos', href: `/es/#${ContactId}` },
  ],

  /* Navbar Language Dropdown */
  languageDropdown: {
    language: 'español',
    otherLanguages: [{ name: 'english', href: '/en/' }],
  },

  /* Hero Section */
  heroImgAlt: 'Oficinas Kaizen',
  heroSubtitle: 'Impulsa tu',
  heroTitle: 'Crecimiento Financiero',
  heroCTAText: 'Saber Más',
  heroCTALink: `/es/#${AboutUsId}`,
  heroCTATitle: 'Saber mas sobre nosotros',
  heroButtonText: 'contáctanos',
  heroButtonLink: `/es/#${ContactId}`,
  /* About Section */
  AboutUsId,
  AboutBannerAlt: "Kaizen's Office",
  AboutTitle: 'Somos',
  AboutSubtitlePrimary: 'KAIZEN',
  AboutSubtitleSecondary: 'CAPITAL',
  AboutFirstParagraph: 'Una empresa de servicios financieros especializada en asesoría, consultoría, gestión y rendimiento de capital.',
  AboutSecondParagraph: 'Proveemos la mejor experiencia en servicios financieros, con la finalidad de ser la primera referencia de confiabilidad para nuestros aliados',
  AboutFirstColTitle: 'Crecimiento continuo de los servicios financieros hacia nuestros aliados.',
  AboutFirstColSubTitle: 'Quality Manegement',
  AboutSecondColTitle: 'Fomentar relaciones de confianza.',
  AboutSecondColSubtitle: 'We Leave A Mark',
  AboutThirdColTitle: 'Brindar seguridad y certidumbre en todas operaciones financieras',
  AboutThirdColSubtitle: 'Goal Oriented',
  AboutFourthColTitle: 'Ofrecer la mejor experiencia de atención para nuestros clientes',
  /* Services Section */
  ServicesId,
  ServicesTitle: 'Servicios',
  ServicesSubtitlePrimary: 'You Only Exist',
  ServicesSubtitleSecondary: 'if You Go Digital',
  DigitalTitle: 'Consultoria en FOREX',
  DigitalInner: ['Asesoramos a clientes en la adquisición de divisas y pagos a proveedores internacionales.'],
  ExpertsTitle: 'Rendimiento de capital<br />(Colocaciones financieras)',
  ExpertsInner: ['Ofrecemos planes de rendimiento de capital ocioso con tasas de interés atractivas.'],
  BrandingTitle: 'Gestión de capital',
  BrandingInner: ['Prestamos servicio de bróker para pagos a proveedores a nivel internacional.'],
  PublicityTitle: 'Levantamientos de<br />deuda corporativa',
  PublicityInner: ['Trabajamos junto a empresas para conseguir liquidez para sus operaciones.'],
  /* Technologies Section */
  TechId,
  WebsitesTitle: 'Tecnologías / Websites',
  WebsitesSubtitlePrimary: 'Creamos, Editamos, Ordenamos, Diseñamos',
  WebsitesSubtitleSecondary: 'Y Publicamos Tu Contenido.',
  WebsitesTitle1: 'SPA',
  WebsitesSubtitle1: 'Single Page Application',
  WebsitesTitle2: 'MPA',
  WebsitesSubtitle2: 'Multiple Page Application',
  WebsitesTitle3: 'CMS',
  WebsitesSubtitle3: 'Content Management System',
  WebsitesTitle4: 'E-Commerce',
  WebsitesSubtitle4: '',
  WebsitesTitle5: 'Mobile Apps',
  WebsitesSubtitle5: '',
  TechnologiesTitle: 'Nuestras tecnologías',
  /* Contact Us Section */
  ContactId,
  FormTitlePrimary: '¿Qué Necesitas?',
  FormTitleSecondary: 'Nosotros Nos Encargamos',
  FormLine1: 'Ponte en contacto con nosotros: ',
  FormContactEmail: 'Hello@kd.agency',
  FormLine2: 'o escríbenos por aquí',
  FormNameField: 'Nombre',
  FormEmailField: 'Correo',
  FormMessageField: 'Mensaje',
  FormPhoneField: 'Número Telefónico',
  FormCTA: 'Enviar',
  FormCTADone: 'Gracias!',
  FormEmailErrorRequired: 'Ingresa tu email!',
  FormEmailErrorWrong: 'Email incorrecto!',
  FormNameErrorRequired: 'Ingresa tu nombre!',
  FormMsgErrorRequired: 'Ingresa tu mensaje!',
  FormPhoneErrorRequired: 'Ingresa tu número telefónico!',
  /* Footer */
  BackToTop: 'Volver al inicio',
  LinkToTop: '/es/#',
};
