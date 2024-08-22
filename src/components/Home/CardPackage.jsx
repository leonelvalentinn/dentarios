import { CheckIcon, CrownIcon } from '../icons'

export const CardPackage = ({ name, price, details }) => {
  return (
    <article className='w-full flex flex-col p-4 gap-3 border rounded-xl border-blue-600 group hover:text-white transition hover:bg-blue-600 md:gap-5'>
      <h3 className='text-lg font-semibold flex gap-2'>
        {name}
        <CrownIcon className='w-6 h-6 p-1 rounded-full text-white bg-yellow-500' />
      </h3>
      <ul className='grid md:grid-cols-2'>
        {details.map((el) => (
          <li className='flex gap-2'>
            <CheckIcon className='w-4 h-4 p-[2px] bg-blue-500 rounded-full text-white transition group-hover:text-blue-600 group-hover:bg-white' />
            {el}
          </li>
        ))}
      </ul>
      <div className='w-full flex justify-between items-center'>
        <p className='text-xl text-blue-600 font-semibold transition group-hover:text-white'>
          ${price}
          <span className='text-xs text-lightBlack/80 transition group-hover:text-white'>
            /month
          </span>
        </p>
        <a
          href=''
          className='px-5 py-1 border rounded-full border-blue-500 bg-white text-lightBlack transition hover:scale-105'
          target='_blank'
          rel='noopener noreferrer'
        >
          Get started
        </a>
      </div>
    </article>
  )
}
