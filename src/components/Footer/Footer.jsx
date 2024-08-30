import Logo from '../../assets/images/logo-white.png'
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'

export const Footer = () => {
  const Company = [
    {
      id: 1,
      name: 'Inicio',
      link: '#inicio'
    },
    {
      id: 2,
      name: 'Beneficios',
      link: '#beneficios'
    },
    {
      id: 3,
      name: 'Servicios',
      link: '#servicios'
    },
    {
      id: 4,
      name: 'Academy',
      link: 'https://academy.dentarios.com.mx/'
    },
    {
      id: 5,
      name: 'Testimonios',
      link: '#testimonios'
    }
  ]
  const Features = [
    {
      id: 1,
      name: 'Gestión de redes sociales',
      link: '#servicios'
    },
    {
      id: 2,
      name: 'Posicionamiento ',
      link: '#servicios'
    },
    {
      id: 3,
      name: 'Desarrollo Web',
      link: '#servicios'
    },
    {
      id: 4,
      name: 'Producción de Contenido',
      link: '#servicios'
    },
    {
      id: 4,
      name: 'Publicidad en Google Ads',
      link: '#servicios'
    }
  ]
  const Helps = [
    {
      id: 1,
      name: 'Contacto',
      link: 'https://api.whatsapp.com/send?phone=525575791467'
    },
    {
      id: 2,
      name: 'Paquetes',
      link: '#paquetes'
    }
  ]
  return (
    <>
      <footer className=' bg-blue-100 w-full  h-auto relative m-auto '>
        <div className='container-footer max-w-7xl  flex flex-col justify-start gap-3 w-11/12  m-auto pt-40 md:grid md:grid-cols-4  md:pb-3 md:pt-60 '>
          <div className='item-footer flex flex-col gap-4 '>
            <img src={Logo} alt='' className='max-w-52' />
            <p className='text-gray-400 text-sm'>
              Brindamos soluciones personalizadas adaptadas a las necesidades y
              objetivos únicos de nuestros clientes.
            </p>
            <div className='link-redes-foote flex gap-3'>
              <a href=''>
                <FaFacebook className='text-xl text-gray-500' />
              </a>
              <a href=''>
                <RiInstagramFill className='text-xl text-gray-500' />
              </a>
              <a href=''>
                <FaTiktok className='text-xl text-gray-500' />
              </a>
            </div>
          </div>
          <div className='item-footer md:flex md:flex-col md:items-center'>
            <h4 className='font-semibold text-gray-500 text-sm md:text-base'>
              Menú
            </h4>
            <ul className='menu-footer flex justify-start flex-col md:gap-3'>
              {Company.map((com, index) => (
                <li className='text-sm text-gray-400 font-light' key={index}>
                  <a href={com.link}>{com.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='item-footer md:flex md:flex-col md:items-center'>
            <h4 className='font-semibold text-gray-500 text-sm md:text-base'>
              Servicios
            </h4>
            <ul className='menu-footer flex justify-start flex-col md:gap-3'>
              {Features.map((feature, index) => (
                <li className='text-sm text-gray-400 font-light' key={index}>
                  <a href={feature.link}>{feature.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='item-footer ml-0 md:flex md:flex-col md:items-center'>
            <h4 className='font-semibold text-gray-500 text-sm md:text-base'>
              Ayuda
            </h4>
            <ul className='menu-footer flex justify-start flex-col md:gap-3'>
              {Helps.map((help, index) => (
                <li className='text-sm text-gray-400 font-light' key={index}>
                  <a href={help.link}>{help.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='hr-div bg-neutral-500 max-w-7xl m-auto my-2'></div>
        <div
          className='item md:flex md:flex-row justify-between max-w-7xl
       m-auto p-2 '
        >
          <p className='text-xs text-gray-400 font-light'>
            @2024 Dentarios. Todos los derechos reservados
          </p>
          <div className='terminos flex gap-5'>
            <a href='' className='text-xs text-gray-400 font-light'>
              Política de privacidad
            </a>
            <a href='' className='text-xs text-gray-400 font-light'>
              Terminos y Condiciones
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
