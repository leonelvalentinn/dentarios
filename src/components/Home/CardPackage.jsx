/* eslint-disable react/prop-types */
import { CheckIcon, CrownIcon } from '../icons'

// eslint-disable-next-line react/prop-types
export const CardPackage = ({ name, details }) => {
  return (
    <article className='w-full flex flex-col p-4 gap-3 border rounded-xl border-blue-600 group hover:text-white transition hover:bg-blue-600 md:gap-5'>
      <h3 className='text-lg font-semibold flex gap-2'>
        {name}
        <CrownIcon className='w-6 h-6 p-1 rounded-full text-white bg-yellow-500' />
      </h3>
      <ul className='grid gap-2 md:grid-cols-2'>
        {details.map((el, i) => (
          <li className='flex gap-2 w-full' key={i}>
            <CheckIcon className='w-4 h-4 p-[2px] mt-1 bg-blue-500 rounded-full text-white transition group-hover:text-blue-600 group-hover:bg-white' />
            <p className='w-11/12'>{el}</p>
          </li>
        ))}
      </ul>
      <div className='w-full flex justify-between items-center'>
        <a
          href='https://api.whatsapp.com/send?phone=525575791467'
          className='px-5 py-1 border rounded-full border-blue-500 bg-white text-lightBlack transition hover:scale-105'
          target='_blank'
          rel='noopener noreferrer'
        >
          Contáctanos
        </a>
      </div>
    </article>
  )
}
