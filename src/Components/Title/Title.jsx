import './Title.css'
const Title = ({titleEn , titleAr , fcolor}) => {
  return (
    <div className='title__container flex flex-column'>
        <div><h1 className='titleEn'  style={{ color: fcolor ? fcolor : 'var(--textColor)' }}>{titleEn}</h1></div>
        <div><h2 className='titleAr'>{titleAr}</h2></div>
    </div>
  )
}

export default Title