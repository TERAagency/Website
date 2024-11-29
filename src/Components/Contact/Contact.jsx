import './Contact.css'
import Title from '../Title/Title'

const Contact = () => {
  return (
    <div className="contact__container">
        <Title titleEn="Let's Talk" titleAr="تــواصــــل معنــــــا" />
        <div className="contact__content d-flex justify-content-center align-items-center gap-5 mt-5 mb-5">
         
          <a href="https://www.facebook.com/profile.php?id=61569294281325" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png" alt="" />
          </a>
          
          <a href="mailto:teraagecny.sy@gmail.com">
              <img src="gmail.png" alt="" />
          </a>
          
      
          <a href="https://github.com/TERAagency" target="_blank" rel="noopener noreferrer">
              <img className='github' src="github.png" alt="" />
          </a>
      </div>
    </div>
  )
}

export default Contact