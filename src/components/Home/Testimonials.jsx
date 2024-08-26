import { Slide } from '../Slide'
export const Testimonials = () => {
  return (
    <>
      <div className='relative p-8 md:py-36 ' id='testimonios'>
        <div className='grid max-w-5xl gap-8 mx-auto my-4 md:grid-cols-2'>
          <h2 className='text-2xl mb-2 font-semibold md:text-3xl '>
            Qué dicen los clientes de nosotros
          </h2>

          <div className='self-center'>
            <p className='text-primaryDark md:text-lg '>
              En Grupo B&R, nos enorgullecemos de ser más que una inmobiliaria,
              somos un aliado para nuestros clientes en el camino hacia
              encontrar su hogar perfecto.
            </p>
          </div>
        </div>

        <Slide />
      </div>
    </>
  )
}
