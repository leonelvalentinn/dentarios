/* eslint-disable react/prop-types */
import { SplideSlide } from '@splidejs/react-splide'
import { ArrowIcon } from '../icons'

export const CardService = ({ id, title, description }) => {
  return (
    <SplideSlide>
      <div
        className='h-full flex flex-col gap-2 max-w-[460px] justify-center p-4 bg-white transition-all group border-b border-gray-400 data-[active=1]:text-white data-[active=1]:rounded-xl data-[active=1]:border-b-transparent data-[active=1]:bg-blue-500 hover:bg-blue-500 hover:text-white hover:rounded-xl hover:border-b-0'
        data-active={id === 0 ? '1' : '0'}
      >
        <span className='flex gap-2'>
          <h4>{title}</h4>
          <ArrowIcon className='w-5 group-data-[active=1]:text-white group-hover:text-white' />
        </span>
        <p className='hidden text-sm group-data-[active=1]:block group-data-[active=1]:text-white group-hover:text-white group-hover:block'>
          {description}
        </p>
      </div>
    </SplideSlide>
  )
}
