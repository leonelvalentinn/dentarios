import { CardPackage } from './CardPackage'

const PLANS = [
  {
    name: 'Bronze Plan',
    details: [
      'Custom dashboard',
      'Up to 10 assets',
      'Usability check',
      '8 hours of consulting',
      'In-depth site analysis',
      'Up to 75 keywords'
    ],
    price: '125'
  },
  {
    name: 'Silver Plan',
    details: [
      'Custom dashboard',
      'Up to 10 assets',
      'Usability check',
      '8 hours of consulting',
      'In-depth site analysis',
      'Up to 75 keywords'
    ],
    price: '250'
  },
  {
    name: 'Gold Plan',
    details: [
      'Custom dashboard',
      'Up to 10 assets',
      'Usability check',
      '8 hours of consulting',
      'In-depth site analysis',
      'Up to 75 keywords'
    ],
    price: '300'
  },
  {
    name: 'Diamond Plan',
    details: [
      'Custom dashboard',
      'Up to 10 assets',
      'Usability check',
      '8 hours of consulting',
      'In-depth site analysis',
      'Up to 75 keywords'
    ],
    price: '450'
  }
]

export const Packages = () => {
  return (
    <section className='w-full flex flex-col items-center gap-4 max-w-5xl'>
      <h2 className='text-2xl font-semibold leading-9'>
        Competitive pricing for High-Quality Services
      </h2>
      <div className='w-full grid gap-4 md:grid-cols-2 md:gap-8'>
        {PLANS.map((plan) => (
          <CardPackage
            price={plan.price}
            details={plan.details}
            name={plan.name}
          />
        ))}
      </div>
    </section>
  )
}
