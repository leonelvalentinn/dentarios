import { BsGraphUpArrow } from 'react-icons/bs'
import { BsBarChartFill } from 'react-icons/bs'
import { IoInfiniteSharp } from 'react-icons/io5'
import { TbTargetArrow } from 'react-icons/tb'

export const Benefits = () => {
  const BENEFICIOS = [
    {
      id: 1,
      Icon: <BsGraphUpArrow />,
      title: 'Aumentar el trafico',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis neque ex similique quaerat iure, tempore consequuntur vitae itaque veniam!'
    },
    {
      id: 2,
      Icon: <BsBarChartFill />,
      title: 'Mejora tu clasificación',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis neque ex similique quaerat iure, tempore consequuntur vitae itaque veniam!'
    },
    {
      id: 3,
      Icon: <IoInfiniteSharp />,
      title: 'Crecimiento sostenible',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis neque ex similique quaerat iure, tempore consequuntur vitae itaque veniam!'
    },
    {
      id: 4,
      Icon: <TbTargetArrow />,
      title: 'Objetivo de audiencia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis neque ex similique quaerat iure, tempore consequuntur vitae itaque veniam!'
    }
  ]
  return (
    <>
      <div className='benefits my-14'>
        <div className='container-benefits w-full p-5  bg-slate-200 flex flex-col gap-8 md:flex-row md:py-28 '>
          <div className='item-benefits flex justify-center  flex-col  md:w-5/12 '>
            <h2 className='font-semibold text-3xl md:text-5xl'>
              Generar tráfico dirigido y aumenta tus concersiones
            </h2>
            <p className='text-sm md:text-base'>
              Establezca su marca como autoridad y genere confianza con nuestras
              soluciones de SEO comprobadas que aumentan la reputación en línea
              y lo posicionan como líder de la industria.
            </p>
            <a
              href=''
              className='bg-blue-600 block w-max h-max px-5 py-2 rounded-full font-light transition hover:scale-105 text-white mt-2 '
            >
              Leer más
            </a>
          </div>
          <div className='item-benefits grid gap-2 md:w-7/12 md:grid-cols-2  '>
            {BENEFICIOS.map((beneficio, index) => (
              <div
                className='list-benefist p-4 flex flex-col gap-1  hover:bg-blue-600 active:bg-blue-600 hover:text-white '
                key={index}
              >
                <div className='text-2xl md:text-3xl'>{beneficio.Icon}</div>
                <h3 className='font-semibold text-xl md:text-2xl '>
                  {beneficio.title}
                </h3>
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
