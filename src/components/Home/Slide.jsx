import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { dataTestimonials } from './Testimonials.data'
import { GiRoundStar } from 'react-icons/gi'
import { FaQuoteLeft } from 'react-icons/fa'

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
      className='h-[330px] w-full md:max-w-6xl'
    >
      {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
        <SwiperSlide
          key={id}
          className='my-5 cursor-pointer md:px-10 relative bg-slate-50 p-3 rounded-md'
        >
          <FaQuoteLeft className='absolute right-7 top-0  text-3xl md:text-4xl text-slate-300 ' />

          <div className='calificaciones flex'>
            <GiRoundStar className='text-yellow-500 text-xl' />{' '}
            <GiRoundStar className='text-yellow-500 text-xl' />{' '}
            <GiRoundStar className='text-yellow-500 text-xl' />{' '}
            <GiRoundStar className='text-yellow-500 text-xl' />
            <GiRoundStar className='text-yellow-500 text-xl' />
          </div>

          <div className='my-5 text-sm text-justify'>{testimonial}</div>
          <div className='flex'>
            <div className='flex items-center gap-4'>
              <img src={image} alt='' className='w-12 h-12' />
              <div>
                <h4 className='text-center text-sm font-semibold'>{name}</h4>
                <p className='text-primaryDark text-xs'>{work}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
