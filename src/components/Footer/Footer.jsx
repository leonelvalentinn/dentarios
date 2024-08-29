import Logo from '../../assets/images/logo-white.png'
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'

export const Footer = () => {
  const Company = [
    {
      id: 1,
      name: 'Inicio',
      link: 'https://dentric.com.mx'
    },
    {
      id: 2,
      name: 'Nosotros',
      link: 'https://dentric.com.mx'
    },
    {
      id: 3,
      name: 'Beneficios',
      link: 'https://dentric.com.mx'
    },
    {
      id: 4,
      name: 'Servicios',
      link: 'https://dentric.com.mx'
    }
  ]
  const Features = [
    {
      id: 1,
      name: 'Seo Audits',
      link: 'https://dentric.com.mx'
    },
    {
      id: 2,
      name: 'Data Tracking',
      link: 'https://dentric.com.mx'
    },
    {
      id: 3,
      name: 'Research',
      link: 'https://dentric.com.mx'
    },
    {
      id: 4,
      name: 'Optimazion',
      link: 'https://dentric.com.mx'
    }
  ]
  const Helps = [
    {
      id: 1,
      name: 'Contacto',
      link: 'https://dentric.com.mx'
    },
    {
      id: 2,
      name: 'Faqs',
      link: 'https://dentric.com.mx'
    },
    {
      id: 3,
      name: 'Customer Service',
      link: 'https://dentric.com.mx'
    }
  ]
  return (
    <>
      <footer className=' bg-blue-100 w-full  h-auto relative m-auto '>
        <div className='container-footer max-w-7xl  flex flex-col justify-start gap-3 w-11/12  m-auto pt-40 md:grid md:grid-cols-4 md:justify-items-end md:pb-3 md:pt-60 '>
          <div className='item-footer flex flex-col gap-4 '>
            <img src={Logo} alt='' className='max-w-52' />
            <p className='text-gray-400 text-sm'>
              We provide customized SEO solutions tailored to the unique needs
              ands goals our clients
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
          <div className='item-footer'>
            <h4 className='font-semibold text-gray-500 text-sm md:text-base'>
              Company
            </h4>
            <ul className='menu-footer flex justify-start flex-col md:gap-3'>
              {Company.map((com, index) => (
                <li className='text-sm text-gray-400 font-light' key={index}>
                  <a href={com.link}>{com.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='item-footer'>
            <h4 className='font-semibold text-gray-500 text-sm md:text-base'>
              Features
            </h4>
            <ul className='menu-footer flex justify-start flex-col md:gap-3'>
              {Features.map((feature, index) => (
                <li className='text-sm text-gray-400 font-light' key={index}>
                  <a href={feature.link}>{feature.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='item-footer'>
            <h4 className='font-semibold text-gray-500 text-sm md:text-base'>
              Help
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
              Privacy Policy
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
