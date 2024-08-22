import { Splide } from '@splidejs/react-splide'
import HeroImage from '../../assets/images/services-woman.png'
import { CardService } from './CardService'
import '@splidejs/react-splide/css/core'
import { useEffect, useRef, useState } from 'react'

const optionsSliderReviews = {
  direction: 'ttb',
  wheel: true,
  type: 'loop',
  releaseWheel: true,
  arrows: false,
  pagination: false,
  height: '500px',
  perPage: 4,
  heightRatio: 0.5
}

const SERVICES = [
  {
    id: 0,
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  },
  {
    id: 1,
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  },
  {
    id: 2,
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  },
  {
    id: 3,
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
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
    <section className='w-full max-w-5xl flex flex-col justify-center items-center my-10 gap-4 md:my-20'>
      <div className='grid gap-4 md:grid-cols-2 md:gap-10'>
        <h2 className='text-2xl font-semibold leading-9'>
          Customized Solutions to Your Business Goals
        </h2>
        <p className='text-lightBlack/80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
          soluta amet modi nostrum libero laudantium eius laborum incidunt
          aliquid!
        </p>
      </div>
      <div className='mt-10 md:grid md:grid-cols-2 '>
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
