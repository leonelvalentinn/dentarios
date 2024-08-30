import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import Dentric from '../assets/images/logos/clients/logo-dentric.webp'
import Sonrix from '../assets/images/logos/clients/sonrix.png'
import Baquero from '../assets/images/logos/clients/logo_elizabeth.png'
import Georgie from '../assets/images/logos/clients/georgie.png'
import OrthoDentic from '../assets/images/logos/clients/logo_ortodenthic.png'
import Santident from '../assets/images/logos/clients/santident.webp'
import Econodent from '../assets/images/logos/clients/econodent.png'
import Urban from '../assets/images/logos/clients/urban.png'
import CM from '../assets/images/logos/clients/cym.png'
import Juarez from '../assets/images/logos/clients/logo-juarez.webp'
import Mor from '../assets/images/logos/clients/mor.svg'
import Arte from '../assets/images/logos/clients/artedental.png'
import Biodontiq from '../assets/images/logos/clients/biodontiq-logo.webp'
import Valley from '../assets/images/logos/clients/logo_valley.png'
import Galaxia from '../assets/images/logos/clients/logo-galaxia.webp'
import ARMONISA from '../assets/images/logos/clients/logo-armonisa.webp'
import Dentista from '../assets/images/logos/clients/logo-dr-dentista.webp'
import Esencia from '../assets/images/logos/clients/logo-esencia.webp'
import Cabo from '../assets/images/logos/clients/cabo.png'
import Sky from '../assets/images/logos/clients/sky.png'
import ViaaDent from '../assets/images/logos/clients/viaa.png'
import Nucleodonto from '../assets/images/logos/clients/nucleo.png'
import CliniKDent from '../assets/images/logos/clients/clinik.png'
import Prevenkids from '../assets/images/logos/clients/preven.png'

const optionsSliderReviews = {
  type: 'loop',
  arrows: false,
  autoplay: true,
  interval: 700,
  pauseOnHover: true,
  perPage: 6,
  perMove: 1,
  pagination: false,
  gap: '25px',
  padding: 0,
  breakpoints: {
    1280: {
      width: '1000px',
      perPage: 3,
      focus: 'center',
      padding: '1rem',
      autoWidth: true,
    },
    1023: {
      perPage: 4,
      autoWidth: true,
      padding: '1rem',
      focus: 'center',
      gap: 0,
    },
    767: {
      perPage: 1,
      padding: '1rem',
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
    name: 'Dental Sonrix',
    img: Sonrix,
    link: 'https://dentalsonrix.com.mx'
  },
  {
    name: 'Odontología Elizabeth Baquero',
    img: Baquero,
    link: 'https://odontologiaelizabethbaquero.com'
  },
  {
    name: 'Georgie Dent',
    img: Georgie,
    link: 'https://www.clinicageorgiedent.com'
  },
  {
    name: 'OrthoDentic',
    img: OrthoDentic,
    link: 'https://clinicadentalorthodentic.com'
  },
  {
    name: 'Santident',
    img: Santident,
    link: 'https://clinicasantident.mx'
  },
  {
    name: 'econodent',
    img: Econodent,
    link: 'https://econodent.dentarios.com.mx'
  },
  {
    name: 'Urban Sonríe',
    img: Urban,
    link: 'https://urban-sonrie.dentarios.com.mx'
  },
  {
    name: 'C&M',
    img: CM,
    link: 'https://cymconsultoriodental.dentarios.com.mx'
  },
  {
    name: 'Clínica Dental Juárez',
    img: Juarez,
    link: 'https://clinicadentaljuarez.dentarios.com.mx'
  },
  {
    name: 'mör Centro Dental',
    img: Mor,
    link: 'https://morcentrodental.com'
  },
  {
    name: 'Arte Dental Condesa',
    img: Arte,
    link: 'https://artedentalcondesa.com'
  },
  {
    name: 'Biodontiq',
    img: Biodontiq,
    link: 'https://biodontiq.com.mx'
  },
  {
    name: 'Dental Valley',
    img: Valley,
    link: 'https://dentalvalley.com.mx'
  },
  {
    name: 'Dental Urban',
    img: Urban,
    link: 'https://dentalurban.com.mx'
  },
  {
    name: 'Galaxia Dental',
    img: Galaxia,
    link: ''
  },
  {
    name: 'ARMONISA',
    img: ARMONISA,
    link: ''
  },
  {
    name: 'Dr. Dentista',
    img: Dentista,
    link: ''
  },
  {
    name: 'Esencia Dental',
    img: Esencia,
    link: ''
  },
  {
    name: 'Dental Cabo Baja',
    img: Cabo,
    link: ''
  },
  {
    name: 'Sky Dental',
    img: Sky,
    link: ''
  },
  {
    name: 'ViaaDent',
    img: ViaaDent,
    link: ''
  },
  {
    name: 'Nucleodonto',
    img: Nucleodonto,
    link: ''
  },
  {
    name: 'CliniKDent',
    img: CliniKDent,
    link: ''
  },
  {
    name: 'Prevenkids',
    img: Prevenkids,
    link: ''
  }
]

export const SliderClients = () => {
  return (
    <section className='max-w-6xl mt-8'>
      <h3 className='text-center font-medium text-xl text-lightBlack/80 mb-6 md:text-2xl'>
        Con la confianza de más de 120 clínicas en México y Colombia
      </h3>
      <Splide aria-label='My Favorite Images' options={optionsSliderReviews}>
        {CLIENTS.map((el, i) => (
          <SplideSlide key={i} className='h-20'>
            <a
              className='grayscale h-full transition hover:grayscale-0'
              href={el.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={el.img} className='w-full max-w-48 h-full object-contain' alt={`Logo de ${el.name}`} />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}
