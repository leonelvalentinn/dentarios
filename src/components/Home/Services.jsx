import { Splide } from '@splidejs/react-splide'
import HeroImage from '../../assets/images/services-woman.png'
import { CardService } from './CardService'
import '@splidejs/react-splide/css/core'
import { useEffect, useRef } from 'react'

const optionsSliderReviews = {
  direction: 'ttb',
  wheel: true,
  type: 'loop',
  releaseWheel: true,
  arrows: true,
  perMove: 1,
  pagination: false,
  height: '500px',
  perPage: 4,
  heightRatio: 0.5,
  classes: {
    arrows: 'absolute -right-20 flex gap-4 flex-col z-10 -top-2',
    arrow:
      'rounded-full bg-white fill-blue-600 border border-blue-600 p-2 transition hover:bg-blue-600 hover:fill-white',
    prev: '-rotate-90',
    next: 'rotate-90'
  },
  breakpoints: {
    767: {
      arrows: false
    }
  }
}

const SERVICES = [
  {
    id: 0,
    title: 'Diseño de Promocionales',
    description:
      'Creamos materiales atractivos que conecten con tus pacientes.'
  },
  {
    id: 1,
    title: 'Contenido en tus Páginas',
    description:
      'Optimizamos tu contenido para atraer y retener a tus visitantes.'
  },
  {
    id: 2,
    title: 'Edición de Video',
    description:
      'Videos impactantes para promocionar tus servicios dentales.'
  },
  {
    id: 3,
    title: 'Configuración y Optimización de Campañas',
    description:
      'Maximizamos el alcance y la efectividad de tus campañas publicitarias.'
  },
  {
    id: 4,
    title: 'Sitio Web',
    description:
      'Diseñamos sitios web profesionales y fáciles de usar para tu clínica.'
  },
  {
    id: 5,
    title: 'Google My Business',
    description:
      'Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.'
  }
]

export const Services = () => {
  const splideRef = useRef(null)

  useEffect(() => {
    const splide = splideRef.current.splide

    splide.on('active', function (slide) {
      const slideActive = slide.slide.querySelector('div')
      slideActive.classList.add('active')
      slideActive.setAttribute('data-active', '1')
    })

    splide.on('inactive', function (slide) {
      const slideActive = slide.slide.querySelector('div')
      slideActive.classList.remove('active')
      slideActive.removeAttribute('data-active')
    })
  }, [])

  return (
    <section className='w-full max-w-5xl flex flex-col justify-center items-center my-10 gap-4 md:mb-20 md:mt-4'>
      <div className='grid gap-4 md:grid-cols-2 md:gap-10'>
        <h2 className='text-2xl font-semibold leading-9'>
          Soluciones Personalizadas para Impulsar Tu Clínica Dental
        </h2>
        <p className='text-lightBlack/80'>
          Campañas en Google ADS, publicidad en redes sociales y más, diseñadas para atraer nuevos pacientes y fortalecer tu clínica. ¡Lleva tu práctica al siguiente nivel con nosotros!
        </p>
      </div>
      <div className='max-w-4xl mt-10 md:grid md:grid-cols-2 '>
        <article className=''>
          <Splide
            ref={splideRef}
            aria-label='My Favorite Images'
            options={optionsSliderReviews}
          >
            {SERVICES.map((el, i) => (
              <CardService
                key={i}
                title={el.title}
                description={el.description}
                id={el.id}
              />
            ))}
          </Splide>
        </article>
        <article className='w-full grid place-content-end md:place-content-start lg:place-content-end'>
          <img
            src={HeroImage}
            width='1200'
            height='1200'
            alt='Hero Image'
            loading='eager'
            className='w-full max-w-[300px] rounded-full bg-blue-300'
          />
        </article>
      </div>
    </section>
  )
}
