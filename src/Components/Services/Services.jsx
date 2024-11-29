import Title from '../Title/Title'
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { IoColorFilter } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { IoLogoLaravel } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { FaIdCard } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FaShirt } from "react-icons/fa6";
import { FaAdversal } from "react-icons/fa";
import { MdVideoCameraBack } from "react-icons/md";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { MdCampaign } from "react-icons/md";
import { SiCampaignmonitor } from "react-icons/si";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";
import { PiShareNetworkFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { PiPresentationChartFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { FaFileWord } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { RiTaskFill } from "react-icons/ri";
import { FaWindowRestore } from "react-icons/fa";
import { SiElectronbuilder } from "react-icons/si";
import { IoBookmarks } from "react-icons/io5";
import { MdPlayLesson } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RiRadioButtonLine } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { AiFillBook } from "react-icons/ai";
import { ImBookmark } from "react-icons/im";
import { MdSpeakerNotes } from "react-icons/md";
import { IoGitBranch } from "react-icons/io5";
import { FaCodepen } from "react-icons/fa6";
import { TbCodeDots } from "react-icons/tb";
import { RiBrainFill } from "react-icons/ri";
import { FaLevelUpAlt } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import './Services.css'
const Services = () => {
  return (
    <div className="services__container">
        <Title titleEn="Our Services" titleAr="خـــــدمـــــــاتــنــــــــا " />
        <div className='services_content d-flex flex-column justify-content-center align-items-center'>
            <div className='services__details__container'>
                <div className='service__box'>
                        <div className='services__title flex flex-column'>
                            <div><h1 className='titleEnService'>Software Services</h1></div>
                            <div><h2 className='titleArService'>خـدمـــــات بـرمـجــيـــــــة</h2></div>
                        </div>
                    <img className='img__left' src="who__are__we2.png" alt="" />
                </div>
                
                <div className='services__details'>
                    <div className='wrapper'>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Ui / Ux</h2>
                        </div>
                        <div className='field__icons'>
                            <IoLogoFigma />
                            <SiAdobexd />
                            <IoColorFilter />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Front-End</h2>
                        </div>
                        <div className='field__icons'>
                            <RiReactjsLine />
                            <IoLogoVue />
                            <FaAngular />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Back-End</h2>
                        </div>
                        <div className='field__icons'>
                            <RiNodejsLine />
                            <SiDjango />
                            <IoLogoLaravel />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Mobile Apps</h2>
                        </div>
                        <div className='field__icons'>
                            <RiFlutterFill />
                            <TbBrandKotlin />
                            <RiReactjsLine />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Databases</h2>
                        </div>
                        <div className='field__icons'>
                            <TbSql />
                            <BiLogoPostgresql />
                            <SiMongodb />
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            {/* ------------------------------------------- */}
            <img src="blackSlicer.png" alt="" className='right__black' />
            {/* ------------------------------------------- */}
            <div className='services__details__container'>
               
                
                <div className='services__details'>
                    <div className='wrapper'>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Branding</h2>
                        </div>
                        <div className='field__icons'>
                            <SiAdobephotoshop />
                            <SiAdobeillustrator />
                            <SiAdobeindesign />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Visual Identity</h2>
                        </div>
                        <div className='field__icons'>
                            <FaIdCard />
                            <FaBoxArchive />
                            <FaShirt />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Advertising</h2>
                        </div>
                        <div className='field__icons'>
                            <FaAdversal />
                            <MdVideoCameraBack />
                            <PiFlagBannerFoldFill />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Campaign</h2>
                        </div>
                        <div className='field__icons'>
                            <MdCampaign />
                            <SiCampaignmonitor />
                            <SiGooglecampaignmanager360 />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Social Media</h2>
                        </div>
                        <div className='field__icons'>
                            <FaFacebookSquare />
                            <FaSquareInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                    </div>
                </div>

                <div className='service__box'>
                        <div className='services__title2 flex flex-column'>
                            <div><h1 className='titleEnService'>Graphic Design</h1></div>
                            <div><h2 className='titleArService'>التصميم الغرافيكي</h2></div>
                        </div>
                    <img className='img__left' src="who__are__we3.png" alt="" />
                </div>
            </div> 
            {/* ------------------------------------------- */}
            <img src="blackSlicer.png" alt="" />
            {/* ------------------------------------------- */}
            <div className='services__details__container'>
                <div className='service__box'>
                        <div className='services__title flex flex-column'>
                            <div><h1 className='titleEnService'>University projects</h1></div>
                            <div><h2 className='titleArService'>مـــشــــــــاريـــع جـامعـيـة</h2></div>
                        </div>
                    <img className='img__left' src="who__are__we5.png" alt="" />
                </div>
                
                <div className='services__details'>
                    <div className='wrapper'>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Projects</h2>
                        </div>
                        <div className='field__icons'>
                            <FaMobile />
                            <MdWebAsset />
                            <PiShareNetworkFill />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Graduation</h2>
                        </div>
                        <div className='field__icons'>
                            <FaGraduationCap />
                            <PiPresentationChartFill />
                            <FaBook />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Documentation</h2>
                        </div>
                        <div className='field__icons'>
                            <IoDocument />
                            <FaFileWord />
                            <FaFilePowerpoint />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Daily Tasks</h2>
                        </div>
                        <div className='field__icons'>
                            <FaTasks />
                            <SiTask />
                            <RiTaskFill />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Homeworks</h2>
                        </div>
                        <div className='field__icons'>
                            <FaWindowRestore />
                            <SiElectronbuilder />
                            <IoBookmarks />
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            {/* ------------------------------------------- */}
            <img src="blackSlicer.png" alt="" className='right__black' />
            {/* ------------------------------------------- */}
            <div className='services__details__container'>
               
                
                <div className='services__details'>
                    <div className='wrapper'>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Live Courses</h2>
                        </div>
                        <div className='field__icons'>
                            <MdPlayLesson />
                            <PiChalkboardTeacherFill />
                            <RiRadioButtonLine />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Programming</h2>
                        </div>
                        <div className='field__icons'>
                            <FaCode />
                            <SiVisualstudiocode />
                            <FaFileCode />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>IT - Lectures</h2>
                        </div>
                        <div className='field__icons'>
                            <AiFillBook />
                            <ImBookmark />
                            <MdSpeakerNotes />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Algorithms</h2>
                        </div>
                        <div className='field__icons'>
                            <IoGitBranch />
                            <FaCodepen />
                            <TbCodeDots />
                        </div>
                    </div>
                    <div className='parent__field'>
                        <div className='field d-flex'>
                            <div className='ser__cir'></div>
                            <h2 className='ser__name'>Level Up</h2>
                        </div>
                        <div className='field__icons'>
                            <RiBrainFill />
                            <FaLevelUpAlt />
                            <IoMdBriefcase />
                        </div>
                    </div>
                    </div>
                </div>

                <div className='service__box'>
                        <div className='services__title2 flex flex-column'>
                            <div><h1 className='titleEnService'>Educational Courses</h1></div>
                            <div><h2 className='titleArService'>كـورســـــات تـعليـمـيـــة</h2></div>
                        </div>
                    <img className='img__left' src="who__are__we4.png" alt="" />
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Services