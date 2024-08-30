import Doctora from '../../assets/images/pago.png'

export const Pago = () => {
  return (
    <>
      <div className='pago bg-blue-500 z-10 mb-14 w-full px-5 py-9 mt-14 md:max-w-7xl rounded-md md:pb-24 md:mt-10 md:mb-60 relative'>
        <div className='container-pago justify-between md:flex md:absolute md:z-10 bg-blue-500 md:left-0 md:-top-0 md:w-full md:h-80  '>
          <div className='item-pago mb-5 relative  md:-mt-20 md:w-3/6 '>
            <img src={Doctora} alt='' className='imgCall' />
          </div>

          <div className='item-pago md:w-3/6   '>
            <div>
              <h2 className='text-white text-2xl  '>
                Aprovecha la promoción por el Evento Ivoclar
              </h2>
              <p className='text-white text-base md:text-sm my-2'>
                Aparta los paquetes con servicios por el symposium de Ivoclar a
                costos especiales
              </p>
              <h3 className='text-white text-xl md:text-xl'>
                Solo este 30 y 31 de Agosto
              </h3>
            </div>

            <div id='paypal-container-VXYSEUGV36MES' className='md:w-40'></div>
          </div>
        </div>
      </div>
    </>
  )
}
