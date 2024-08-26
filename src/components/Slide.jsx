import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

export function Slide() {
  const dataTestimonials = [
    {
      id: 1,
      name: 'Juan Recio',
      work: 'Cliente',
      testimonial:
        'Es un excelente servicio, los recomiendo, tienen bastante experincia en el área.Me siento agradecida con ellos.',
      image: './assets/images/profile1.png'
    },
    {
      id: 2,
      name: 'Laura García',
      work: 'Cliente',
      testimonial:
        'Es un excelente servicio, los recomiendo, tienen bastante experincia en el área.Me siento agradecida con ellos.',
      image: '/assets/images/profile2.png'
    },
    {
      id: 3,
      name: 'Lucas Martínez',
      work: 'Cliente',
      testimonial:
        'Es un excelente servicio, los recomiendo, tienen bastante experincia en el área.Me siento agradecida con ellos.',
      image: '/assets/images/profile3.png'
    },
    {
      id: 4,
      name: 'Vicente Calvo',
      work: 'Cliente',
      testimonial:
        'Es un excelente servicio, los recomiendo, tienen bastante experincia en el área.Me siento agradecida con ellos.',
      image: '/assets/images/profile4.png'
    },
    {
      id: 5,
      name: 'Patricia García',
      work: 'Cliente',
      testimonial:
        'Es un excelente servicio, los recomiendo, tienen bastante experincia en el área.Me siento agradecida con ellos.',
      image: '/assets/profile1.png'
    },
    {
      id: 6,
      name: 'Raúl Vidal',
      work: 'Cliente',
      testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
      image: '/assets/profile3.png'
    }
  ]
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
      className='h-[250px] w-full md:max-w-5xl'
    >
      {dataTestimonials.map((datos, index) => (
        <SwiperSlide key={index} className=''>
          <div>
            <img src={datos.image} alt='' />

            <p>{datos.testimonial}</p>

            <h4 className=''> {datos.name} </h4>
            <p className=''> {datos.work}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
