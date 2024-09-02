import { BsGraphUpArrow, BsBarChartFill } from 'react-icons/bs'
import { IoInfiniteSharp } from 'react-icons/io5'
import { TbTargetArrow } from 'react-icons/tb'
import { ContactButton } from '../ContactButton'

export const Benefits = () => {
  const BENEFICIOS = [
    {
      id: 1,
      Icon: <BsGraphUpArrow />,
      title: 'Impulsa tu clínica dental con más clientes potenciales',
      description:
        'Conectamos tu clínica dental con pacientes que buscan tus servicios. Con estrategias de marketing exclusivas para el sector odontológico, aumentamos tu visibilidad y te ayudamos a convertir más clientes potenciales en pacientes reales.'
    },
    {
      id: 2,
      Icon: <BsBarChartFill />,
      title: 'Mayor posicionamiento y presencia de tu clínica',
      description:
        'Potenciamos la visibilidad de tu clínica, asegurando que sobresalgas y te posiciones como líder. Con estrategias de marketing digital adaptadas al sector odontológico, te ayudamos a dominar las búsquedas en línea y a fortalecer tu imagen.'
    },
    {
      id: 3,
      Icon: <IoInfiniteSharp />,
      title: 'Contenido atractivo, profesional y estratégico',
      description:
        'Nuestro equipo de expertos desarrolla estrategias de contenido que no solo son visualmente impactantes, sino también diseñadas para atraer y convertir pacientes.'
    },
    {
      id: 4,
      Icon: <TbTargetArrow />,
      title:
        'Soporte de profesionales en el sector dental',
      description:
        'Ofrecemos un apoyo continuo y personalizado para que tu clínica aproveche al máximo nuestras estrategias de marketing digital. Desde la planificación hasta la ejecución.'
    }
  ]
  return (
    <>
      <div className='benefits my-14 w-full max-w-7xl' id='beneficios'>
        <div className='container-benefits w-full p-5 bg-slate-200 text-lightBlack rounded-lg flex flex-col gap-8 md:flex-row md:pt-24 md:pb-24 md:px-10'>
          <div className='item-benefits flex justify-center gap-4 flex-col md:w-5/12'>
            <h2 className='font-semibold text-2xl md:text-3xl'>
              Creamos estrategias digitales, aumentando tus
              pacientes
            </h2>
            <p className='text-sm md:text-base mb-2'>
              Soluciones digitales que aumentan la reputación en
              línea de tu clínica dental posicionándote como líder en la
              industria
            </p>
            <ContactButton bg='bg-blue-600' />
          </div>
          <div className='item-benefits grid gap-2 md:w-7/12 md:grid-cols-2'>
            {BENEFICIOS.map((beneficio, index) => (
              <div
                className='p-4 flex flex-col gap-1 hover:bg-blue-600 active:bg-blue-600 hover:text-white hover:rounded-lg '
                key={index}
              >
                <div className='text-2xl md:text-3xl'>{beneficio.Icon}</div>
                <h3 className='font-semibold text-xl'>{beneficio.title}</h3>
                <p className='text-sm mt-2 text-lightBlack/80 hover:text-white'>
                  {beneficio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
