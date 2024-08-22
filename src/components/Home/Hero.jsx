import { ContactButton } from '../ContactButton'
import HeroImage from '../../assets/images/hero-ads-1.png'

export const Hero = () => {
  return (
    <section className='w-full max-w-7xl grid grid-cols-1 place-items-center gap-10 py-8 md:grid-cols-2 lg:gap-12 lg:py-0 lg:pb-10 lg:pt-5'>
      <div className='absolute w-full max-w-[500px] h-[300px] rounded-full bg-gradient-to-br opacity-40 from-[#5454D4]/40 to-[#5454D4]/20 blur-3xl top-0 -left-60 rotate-[20deg] -z-[2] md:top-24 md:h-[400px] lg:from-primaryBlue/30 lg:to-[#7835FD]/30 lg:max-w-[1200px] lg:h-[300px]'></div>
      <article className='flex flex-col gap-6'>
        <h1 className='uppercase text-3xl font-semibold w-full leading-10 lg:text-5xl lg:leading-[4rem]'>
          Achieve
          <span className='text-blue-600'> Top Search</span> Rankings with our
          SEO Services
        </h1>
        <p className='text-[#13151a]/80'>
          Los pacientes de hoy confían en Google para encontrar sus servicios
          médicos. ¿Tu clínica aparece en la cima? Google Ads asegura que estés
          presente cuando tus futuros pacientes más lo necesitan, convirtiendo
          búsquedas en citas y clics en confianza.
        </p>
        <ContactButton bg='bg-blue-600' />
        <div className='flex flex-col gap-6 md:flex-row'>
          <div className='flex gap-4'>
            <h2 className='text-blue-600 text-4xl font-semibold md:text-3xl lg:text-4xl'>
              27K+
            </h2>
            <p className='text-sm text-[#13151a]/80'>
              Expertise <br /> Team
            </p>
          </div>
          <div className='flex gap-4'>
            <h2 className='text-blue-600 text-4xl font-semibold md:text-3xl lg:text-4xl'>
              77M+
            </h2>
            <p className='text-sm text-[#13151a]/80'>
              Traffic <br /> Generated
            </p>
          </div>
        </div>
      </article>
      <article className='w-full grid place-content-end md:place-content-start lg:place-content-end'>
        <img
          src={HeroImage}
          width='1200'
          height='1200'
          alt='Hero Image'
          loading='eager'
          className='w-full max-w-[480px] rounded-b-full drop-shadow-xl drop-shadow-blue-300'
        />
      </article>
    </section>
  )
}
