import { ArrowCircleRightRounded, ArrowForwardIos } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './hero.scss'

const Hero = () => {
  
 
  return (
    <div className='hero'>
        <div className='hero--title'>
            My Name is 
            <p>
                Okoh-Michael Richey
            </p>

            <Link to="/cv/CV.pdf" target="_blank" className='cv_link' download>
                Download CV
            </Link>
        </div>
        <div className='hero--desc'>
            <div className='hero--desc-header'>
            <ArrowCircleRightRounded />
            Introduction
            </div>
            <div>
                Started Programming for the almost a decade from Html and Css to building enterprise-level applications.I consider myself a self-taught developer learning from Online Bootcamps, Youtube Channels , taking Courses online while also ensuring that my style of programming conform to best practices as expected of a developer. I find programming fun as it allows me to be creative even though i scratch my head a lot (lol)  
            </div>
            <div style={{ marginTop:10 }}>
                I love to whine down with Animes (my favourite being Hunter X Hunter so far), I also enjoy playing chess even though I am not so good at it,
            </div>        
                

        </div>
    </div>
  )
}

export default Hero