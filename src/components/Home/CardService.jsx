/* eslint-disable react/prop-types */
import { SplideSlide } from '@splidejs/react-splide'
import { ArrowIcon } from '../icons'

export const CardService = ({ title, description }) => {
  return (
    <SplideSlide>
      <div className='h-full p-4 rounded-xl'>
        <span>
          <h4>{title}</h4>
          <ArrowIcon className='w-5 text-white' />
        </span>
        <p>{description}</p>
      </div>
    </SplideSlide>
  )
}
