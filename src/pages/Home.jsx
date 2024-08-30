import { CallToAction } from '../components/CallToAction'
import { Benefits } from '../components/Home/Benefits'
import { Hero } from '../components/Home/Hero'
import { Packages } from '../components/Home/Packages'
import { Pago } from '../components/Home/Pago'
import { Services } from '../components/Home/Services'
import { Testimonials } from '../components/Home/Testimonials'
import { SliderClients } from '../components/SliderClients'

export const Home = () => {
  return (
    <>
      <Hero />
      <SliderClients />
      <Benefits />
      <Services />
      <Testimonials />
      <Pago />
      <Packages />
      <CallToAction />
    </>
  )
}
