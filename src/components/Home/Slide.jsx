import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { dataTestimonials } from './Testimonials.data'
import { GiRoundStar } from 'react-icons/gi'

import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

export function Slide() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='h-[250px] w-full md:max-w-6xl'
    >
      {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
        <SwiperSlide key={id} className='my-5 cursor-pointer md:px-10'>
          <div className='calificaciones flex'>
            <GiRoundStar className='text-yellow-500' />{' '}
            <GiRoundStar className='text-yellow-500' />{' '}
            <GiRoundStar className='text-yellow-500' />{' '}
            <GiRoundStar className='text-yellow-500' />
            <GiRoundStar className='text-yellow-500' />
          </div>

          <div className='my-5 text-sm'>{testimonial}</div>
          <div className='flex'>
            <div className='flex items-center gap-4'>
              <img src={image} alt='' className='w-12 h-12' />
              <div>
                <h4 className='text-center text-sm'>{name}</h4>
                <p className='text-primaryDark text-xs'>{work}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
