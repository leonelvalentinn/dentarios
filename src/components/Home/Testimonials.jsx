import { Slide } from './Slide'

export const Testimonials = () => {
  return (
    <>
      <div
        className='relative w-full mb-12 mt-6 p-5 md:pt-6 md:pb-16 md:mb-16 md:max-w-7xl bg-gradient-to-tr from-slate-200 to-slate-100 '
        id='testimonios'
      >
        <div className='grid max-w-5xl gap-8 mx-auto my-4 md:grid-cols-1 md:px-28'>
          <h2 className='text-2xl mb-2 font-semibold md:text-5xl '>
            Escucha lo que nuestros clientes satisfechos tienen que decir.
          </h2>
        </div>

        <Slide />
      </div>
    </>
  )
}
