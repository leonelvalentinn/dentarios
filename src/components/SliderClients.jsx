import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import Dentric from '../assets/images/logos/clients/dentric.png'

const optionsSliderReviews = {
  type: 'loop',
  arrows: false,
  perPage: 5,
  perMove: 1,
  pagination: false,
  gap: '25px',
  padding: 0,
  breakpoints: {
    1280: {
      width: 1280,
      perPage: 3,
      focus: 'center',
      autoWidth: true
    },
    1023: {
      perPage: 2,
      autoWidth: true
    },
    767: {
      perPage: 1,
      padding: '3rem',
      focus: 'center',
      autoWidth: true
    },
    375: {
      perPage: 1,
      padding: 0,
      gap: 0,
      focus: 'center',
      autoWidth: true
    }
  }
}

const CLIENTS = [
  {
    name: 'Dentric',
    img: Dentric,
    link: 'https://dentric.com.mx'
  },
  {
    name: 'Dentric',
    img: Dentric,
    link: 'https://dentric.com.mx'
  },
  {
    name: 'Dentric',
    img: Dentric,
    link: 'https://dentric.com.mx'
  },
  {
    name: 'Dentric',
    img: Dentric,
    link: 'https://dentric.com.mx'
  }
]

export const SliderClients = () => {
  return (
    <section className='max-w-6xl mt-8'>
      <h3 className='text-center font-medium text-xl text-lightBlack/80 mb-6 md:text-2xl'>
        Trusted by 120+ clinics around the world
      </h3>
      <Splide aria-label='My Favorite Images' options={optionsSliderReviews}>
        {CLIENTS.map((el, i) => (
          <SplideSlide key={i}>
            <a
              className='grayscale transition hover:grayscale-0'
              href={el.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={el.img} alt={`Logo de ${el.name}`} />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}
