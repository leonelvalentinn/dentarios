import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const PrincipalLayout = () => {
  return (
    <>
      <Header />
      <main className='w-full flex flex-col justify-center items-center px-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
