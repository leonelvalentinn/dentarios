import { CardPackage } from './CardPackage'
// import Paquete1 from '../../assets/images/promos/paquete-google.webp'
// import Paquete2 from '../../assets/images/promos/paquete-premium.webp'
// import Paquete3 from '../../assets/images/promos/paquete-platino.webp'
// import Paquete4 from '../../assets/images/promos/paquete-diamante.webp'
import Paquete1 from '../../assets/images/promos/banners-paquete-google.png'
import Paquete2 from '../../assets/images/promos/banners-paquete-premium.png'
import Paquete3 from '../../assets/images/promos/banners-paquete-platino.png'
import Paquete4 from '../../assets/images/promos/banners-paquete-diamante.png'


const PLANS = [
  {
    name: 'Google Ads',
    details: [
      'Configuración y Optimización de Campaña',
      'Diseño de Promocionales',
      'Google Mi Negocio',
      'Tu Clínica en Primeros Lugares',
      'Tráfico Calificado a tu Sitio Web',
      'Presencia Ante Personas'
    ],
    price: '125'
  },
  {
    name: 'Paquete Premium Redes Sociales',
    details: [
      'Una Red Social: Facebook, Instagram o TikTok',
      'Configuración y optimización de Hasta 3 Campañas',
      'Diseño de Promocionales y Edición de Video',
      'Contenido Orgánico',
      'Campañas de Inbox, WhatsApp y Tráfico a la Web',
      'Medición, Análisis, y Entrega de Métricas Mensuales'
    ],
    price: '250'
  },
  {
    name: 'Paquete Platino Redes Sociales',
    details: [
      'Dos Redes Sociales: Facebook, Instagram o Google',
      'Configuración y optimización de Hasta 3 Campañas',
      'Diseño de Promocionales y Edición de Video',
      'Contenido Orgánico',
      'Campañas de Inbox, WhatsApp y Tráfico a la Web',
      'Medición, Análisis, y Entrega de Métricas Mensuales'
    ],
    price: '300'
  },
  {
    name: 'Paquete Diamante Redes Sociales',
    details: [
      'Tres Redes Sociales: Facebook, Instagram, Google o TikTok',
      'Configuración y optimización de Hasta 3 Campañas',
      'Diseño de Promocionales y Edición de Video',
      'Contenido Orgánico',
      'Campañas de Inbox, WhatsApp y Tráfico a la Web',
      'Medición, Análisis, y Entrega de Métricas Mensuales'
    ],
    price: '450'
  }
]

export const Packages = () => {
  return (
    <section
      className='w-full flex flex-col items-center gap-4 max-w-6xl'
      id='paquetes'
    >
      <h2 className='text-2xl font-semibold leading-9'>
        Precios competitivos para servicios de alta calidad
      </h2>
      <div className='w-full grid gap-4 md:grid-cols-2'>
        <a title='Solicitar más información' href='https://api.whatsapp.com/send?phone=525575791467' target='_blank' rel='noopener noreferrer'>
          <img src={Paquete1} alt='Banner del paquete de Google' className='w-full transition hover:scale-105' />
        </a>
        <a title='Solicitar más información' href='https://api.whatsapp.com/send?phone=525575791467' target='_blank' rel='noopener noreferrer'>
          <img src={Paquete2} alt='Banner del paquete Premium' className='w-full transition hover:scale-105' />
        </a>
        <a title='Solicitar más información' href='https://api.whatsapp.com/send?phone=525575791467' target='_blank' rel='noopener noreferrer'>
          <img src={Paquete3} alt='Banner del paquete Platino' className='w-full transition hover:scale-105' />
        </a>
        <a title='Solicitar más información' href='https://api.whatsapp.com/send?phone=525575791467' target='_blank' rel='noopener noreferrer'>
          <img src={Paquete4} alt='Banner del paquete Diamante' className='w-full transition hover:scale-105' />
        </a>
      </div>
    </section>
  )
}
