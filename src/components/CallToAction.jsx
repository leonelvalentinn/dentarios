import ImgCall from '../assets/images/img-call.png'
import { ContactButton } from './ContactButton'
import { MdOutlineAutoAwesome } from 'react-icons/md'

export const CallToAction = () => {
  return (
    <>
      <section className='call-to-action w-full bg-blue-500 px-5 py-9 mt-16 md:max-w-7xl rounded-md md:pb-24 md:mt-40 '>
        <div className='container-call-to-action md:flex justify-between  '>
          <div className='item-call-action mb-5 relative md:w-6/12'>
            <div className='container-img'>
              <img src={ImgCall} alt='' className='imgCall ' />
            </div>
          </div>
          <div className='item-call-action md:w-6/12 relative'>
            <MdOutlineAutoAwesome className='text-white text-2xl md:text-4xl' />
            <h2 className='text-white text-2xl md:text-3xl'>
              Comienza tu viaje SEO con Dentarios
            </h2>
            <p className='text-white text-sm md:text-base my-2'>
              Le permite conectar una búsqueda mejorada y maximizar su impacto
              en línea
            </p>
            <ContactButton bg='bg-white' textColor='text-black' />
          </div>
        </div>
      </section>
    </>
  )
}
