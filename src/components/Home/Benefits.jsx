import { BsGraphUpArrow } from 'react-icons/bs'
import { BsBarChartFill } from 'react-icons/bs'
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
        'En Dentarios, conectamos tu clínica dental con pacientes que buscan activamente tus servicios. Con estrategias de marketing exclusivas para el sector odontológico, aumentamos tu visibilidad y te ayudamos a convertir más clientes potenciales en pacientes reales.'
    },
    {
      id: 2,
      Icon: <BsBarChartFill />,
      title: 'Mayor posicionamiento y presencia de tu clínica',
      description:
        'En Dentarios, potenciamos la visibilidad de tu clínica dental, asegurando que sobresalgas y te posiciones como líder. Con estrategias de marketing digital adaptadas específicamente para el sector odontológico, te ayudamos a dominar las búsquedas en línea y a fortalecer tu imagen. Atrae más pacientes y establece tu clínica como la referencia de confianza en el ámbito dental.'
    },
    {
      id: 3,
      Icon: <IoInfiniteSharp />,
      title: 'Contenido atractivo, profesional y estratégico',
      description:
        ' Nuestro equipo de expertos desarrolla estrategias de contenido que no solo son visualmente impactantes, sino también diseñadas para atraer y convertir pacientes.  Cada diseño y contenido multimedia es cuidadosamente elaborado para reforzar la imagen profesional de tu clínica y maximizar tu presencia en el mercado odontológico.'
    },
    {
      id: 4,
      Icon: <TbTargetArrow />,
      title:
        'Apoyo y soporte de profesionales especializados en el sector dental',
      description:
        'Contamos con un equipo de expertos que entienden a fondo las necesidades y desafíos del sector odontológico. Ofrecemos un apoyo continuo y personalizado para que tu clínica aproveche al máximo nuestras estrategias de marketing digital. Desde la planificación hasta la ejecución, nuestros profesionales especializados están a tu lado.'
    }
  ]
  return (
    <>
      <div className='benefits my-14 w-full max-w-7xl' id='beneficios'>
        <div className='container-benefits w-full p-5  bg-slate-200 flex flex-col gap-8 md:flex-row md:pt-24 md:pb-24 md:px-10  '>
          <div className='item-benefits flex justify-center  flex-col  md:w-5/12 '>
            <h2 className='font-semibold text-3xl md:text-5xl'>
              Genera tráfico y aumenta tus conversiones
            </h2>
            <p className='text-sm md:text-base mb-2'>
              Establezca su clínica o consultorio dental y genere confianza con
              nuestras soluciones comprobadas que aumentan la reputación en
              línea y lo posicionan como líder de la industria.
            </p>
            <ContactButton bg='bg-blue-600' />
          </div>
          <div className='item-benefits grid gap-2 md:w-7/12 md:grid-cols-2  '>
            {BENEFICIOS.map((beneficio, index) => (
              <div
                className='list-benefist p-4 flex flex-col gap-1  hover:bg-blue-600 active:bg-blue-600 hover:text-white hover:rounded-lg '
                key={index}
              >
                <div className='text-2xl md:text-3xl'>{beneficio.Icon}</div>
                <h3 className='font-semibold text-xl  '>{beneficio.title}</h3>
                <p className='text-sm text-justify  '>
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
