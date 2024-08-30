import ImgCall from '../assets/images/img-call.webp'
import { ContactButton } from './ContactButton'
import { MdOutlineAutoAwesome } from 'react-icons/md'

export const CallToAction = () => {
  return (
    <>
      <section className='call-to-action bg-blue-500 z-10 -mb-32 w-full px-5 py-9 mt-14 md:max-w-7xl rounded-md md:pb-24 md:mt-32 md:-mb-0 relative '>
        <div className='container-call-to-action justify-between md:flex md:absolute md:z-10 bg-blue-500 md:left-0 md:-top-0 md:w-full md:h-80  '>
          <div className='item-call-action mb-5 relative md:w-6/12 md:-mt-20 '>
            <img src={ImgCall} alt='' className='imgCall  ' />
          </div>
          <div className='item-call-action md:w-6/12 flex flex-col justify-center p-7'>
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
