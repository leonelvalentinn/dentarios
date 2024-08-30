import { CardPackage } from './CardPackage'

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
      className='w-full flex flex-col items-center gap-4 max-w-5xl'
      id='paquetes'
    >
      <h2 className='text-2xl font-semibold leading-9'>
        Precios competitivos para servicios de alta calidad
      </h2>
      <div className='w-full grid gap-4 md:grid-cols-2 md:gap-8'>
        {PLANS.map((plan, i) => (
          <CardPackage key={i} details={plan.details} name={plan.name} />
        ))}
      </div>
    </section>
  )
}
