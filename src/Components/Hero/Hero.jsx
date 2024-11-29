import './Hero.css'
import Image from 'react-bootstrap/Image';

const Hero = () => {
  return (
    <div className='hero__container'>
        <div className='hero__content'>
          <div className='hero__title'>
          <h1 className='hero__title1'>We Adopt Creativity</h1>
          <h1 className='hero__title2'>نحـــــــن نـتـبـنــى الإبـــداع</h1>
          </div>

          <Image src="Hero.png" className='hero_img' />
        </div>
    </div>
  )
}

export default Hero