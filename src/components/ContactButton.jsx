// eslint-disable-next-line react/prop-types
export const ContactButton = ({ classList, textColor, bg }) => {
  return (
    <a
      className={`inline-block w-max h-max px-5 py-2 rounded-full font-light transition hover:scale-105 ${classList} ${textColor || 'text-white'} ${bg || 'bg-violet-600'}`}
      href='https://api.whatsapp.com/send?phone=525575791467'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Ir al WhatsApp de Inspiración Creativa'
    >
      Contacto
    </a>
  )
}
