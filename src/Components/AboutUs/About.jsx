import Title from '../Title/Title';
import './About.css'
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div>
       <div className="about__container d-flex flex-column align-items-center ">
          <Title titleEn="About Us" titleAr="مـــن نحـــــن" fcolor="white"/>
          <img src="decor1.png" className="decoration1" />
          <img src="decor2.png" className="decoration2" />
          <img src="decor4.png" className="decoration3" />
          <img src="decor5.png" className="decoration4" />
          <div className="about__text d-flex flex-column justify-content-center align-items-center">
            <p className='about__text1'><span className='about__text1_span'>Software & Media Agency</span> where innovation meets imagination! We are a dynamic software agency dedicated to transforming ideas into digital realities. Our mission is to empower businesses through cutting-edge technology and creative solutions that drive success in an ever-evolving digital landscape.</p>
            <img src="blackSlicer.png" alt="" />
            <p className='about__text2'><span className='about__text2_span'>وكالة برمجيات و ميديا</span> حيث يلتقي الابتكار بالخيال! نحن وكالة برمجيات ديناميكية مكرسة لتحويل الأفكار إلى واقع رقمي مهمتنا هي تمكين الشركات من خلال التكنولوجيا المتطورة والحلول الإبداعية التي تدفع نحو النجاح بمشهد رقمي يتطور باستمرار </p>
          </div>
       </div>
    </div>
  )
}

export default About

{/* <div className="about__content flex flex-column">
<Image className="about__bg__desktop" src="About_Bg.png" fluid />
<Image className="about__bg__mobile" src="About_Bg_Mobile.png" fluid />
<Title titleEn="About Us" titleAr="مـــن نحـــــن" className="about__title"/>
<div className='about__us'>
    <p className="about__text1">Software & Media Agency where innovation meets imagination! We are a dynamic software agency dedicated to transforming ideas into digital realities. Our mission is to empower businesses through cutting-edge technology and creative solutions that drive success in an ever-evolving digital landscape.</p>
    <p className="about__text1">وكالة برمجيات و ميديا حيث يلتقي الابتكار بالخيال! نحن وكالة برمجيات ديناميكية مكرسة لتحويل الأفكار إلى واقع رقمي. مهمتنا هي تمكين الشركات من خلال التكنولوجيا المتطورة والحلول الإبداعية التي تدفع نحو النجاح بمشهد رقمي يتطور باستمرار.</p>
</div>
</div> */}
