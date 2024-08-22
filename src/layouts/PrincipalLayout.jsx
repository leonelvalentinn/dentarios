import { Outlet } from 'react-router-dom'

export const PrincipalLayout = () => {
  return (
    <>
      <p className='text-center text-3xl'>Header</p>
      <main className='w-full flex flex-col justify-center items-center px-4'>
        <Outlet />
      </main>
      <p className='text-center text-3xl'>footer</p>
    </>
  )
}
