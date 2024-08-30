import { ContactButton } from '../ContactButton'
import HeroImage from '../../assets/images/hero.webp'

export const Hero = () => {
  return (
    <section
      className='w-full max-w-7xl grid grid-cols-1 place-items-center gap-10 py-8 md:grid-cols-2 lg:gap-12 lg:py-0 lg:pb-10 lg:pt-12'
      id='inicio'
    >
      <div className='absolute w-full max-w-[500px] h-[300px] rounded-full bg-gradient-to-br opacity-40 from-[#5454D4]/40 to-[#5454D4]/20 blur-3xl top-0 -left-60 rotate-[20deg] -z-[2] md:top-24 md:h-[400px] lg:from-primaryBlue/30 lg:to-[#7835FD]/30 lg:max-w-[1200px] lg:h-[300px]'></div>
      <article className='flex flex-col gap-6'>
        <h1 className='uppercase text-blue-600 text-3xl font-semibold w-full leading-10 lg:text-4xl lg:leading-[3rem]'>
          Publicidad digital para clínicas dentales
          <span className='text-black'>
            {' '}
            Atrae más pacientes y haz crecer tu negocio
          </span>
        </h1>
        <p className='text-[#13151a]/80'>
          Los pacientes de hoy confían en Google para encontrar sus servicios
          dentales. ¿Tu clínica aparece en la cima? Google Ads asegura que estés
          presente cuando tus futuros pacientes más lo necesitan, convirtiendo
          búsquedas en citas y clics en confianza.
        </p>
        <ContactButton bg='bg-blue-600' />
        <div className='flex flex-col gap-6 relative md:flex-row'>
          <div className='flex gap-4'>
            <h2 className='text-blue-600 text-4xl font-semibold md:text-3xl lg:text-4xl'>
              25K+
            </h2>
            <p className='text-sm text-[#13151a]/80'>
              Clics <br /> Recibidos
            </p>
          </div>
          <div className='flex gap-4'>
            <h2 className='text-blue-600 text-4xl font-semibold md:text-3xl lg:text-4xl'>
              1.09M+
            </h2>
            <p className='text-sm text-[#13151a]/80'>
              Tráfico <br /> Generado
            </p>
          </div>
          <span className='text-xs absolute -bottom-4 left-0 text-[#13151a]/80'>
            *Datos obtenidos en base al mes de Julio
          </span>
        </div>
      </article>
      <article className='w-full grid place-content-end md:place-content-start lg:place-content-end'>
        <img
          src={HeroImage}
          width='1352'
          height='1352'
          alt='Hero Image'
          loading='eager'
          className='w-full max-w-[480px] rounded-b-full rounded-ss-[80rem] rounded-se-[80rem] shadow-xl'
        />
      </article>
    </section>
  )
}
