import '@justinribeiro/lite-youtube'

// eslint-disable-next-line react/prop-types
export const LiteYoutube = ({ className }) => {
  return (
    <div className={className}>
      <lite-youtube style={{ borderRadius: '10px' }} videoid="b_ckU0y-1kE"></lite-youtube>
    </div>
  )
}
