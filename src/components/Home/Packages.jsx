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
    name: 'Facebook',
    details: [
      'Configuración y optimización de Hasta 3 Campañas',
      'Diseño de Promocionales',
      'Edición de Video',
      'Posteos en Página de Facebook',
      'Segmentación a Clientes Potenciales',
      'Medición, Análisis, y Entrega de Métricas Mensuales'
    ],
    price: '250'
  },
  {
    name: 'Paquete Plus',
    details: [
      'Publicidad en Facebook',
      'Campañas de Posicionamiento en Google',
      'Todo lo incluido en el paquete Facebook',
      'Todo lo incluido en el paquete Google'
    ],
    price: '300'
  },
  {
    name: 'Paquete Premium',
    details: [
      'Publicidad en Facebook',
      'Publicidad en Instagram',
      'Campañas de Posicionamiento en Google',
      'Todo lo incluido en el paquete Facebook',
      'Todo lo incluido en el paquete Instagram'
    ],
    price: '450'
  }
]

export const Packages = () => {
  return (
    <section className='w-full flex flex-col items-center gap-4 max-w-5xl'>
      <h2 className='text-2xl font-semibold leading-9'>
        Competitive pricing for High-Quality Services
      </h2>
      <div className='w-full grid gap-4 md:grid-cols-2 md:gap-8'>
        {PLANS.map((plan, i) => (
          <CardPackage
            key={i}
            details={plan.details}
            name={plan.name}
          />
        ))}
      </div>
    </section>
  )
}
