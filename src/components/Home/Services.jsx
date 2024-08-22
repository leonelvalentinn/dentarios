import { Splide } from '@splidejs/react-splide'
import HeroImage from '../../assets/images/hero-ads.png'
import { CardService } from './CardService'
import '@splidejs/react-splide/css/core'

const optionsSliderReviews = {
  direction: 'ttb',
  wheel: true,
  releaseWheel: true,
  arrows: false,
  pagination: false,
  height: '150px'
}

const SERVICES = [
  {
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  },
  {
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  },
  {
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  },
  {
    title: 'Off-Page',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellendus!'
  }
]

export const Services = () => {
  return (
    <section className='w-full max-w-7xl flex flex-col justify-center items-center my-10 gap-4'>
      <div className='grid gap-4'>
        <h2 className='text-2xl font-semibold leading-9'>
          Customized Solutions to Your Business Goals
        </h2>
        <p className='text-lightBlack/80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
          soluta amet modi nostrum libero laudantium eius laborum incidunt
          aliquid!
        </p>
      </div>
      <div className=''>
        <article className=''>
          <Splide
            aria-label='My Favorite Images'
            options={optionsSliderReviews}
          >
            {SERVICES.map((el, i) => (
              <CardService
                key={i}
                title={el.title}
                description={el.description}
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
            className='w-full max-w-[480px]'
          />
        </article>
      </div>
    </section>
  )
}
