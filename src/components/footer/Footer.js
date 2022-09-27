import { EmailOutlined, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
       <span>
            Thanks For Scrolling !!
        </span> 
        <div className='contact_links' >
            <EmailOutlined  className='icons'
                onClick={() => window.location = 'mailto:richeymikelo@gmail.com'}
            />
            
            <a href="https://wa.me/2348025970609" className='icons' target="_blank"
                    rel="noopener noreferrer">
                <WhatsApp />
            </a>
            <a href="https://github.com/Drchey" className='icons' target="_blank"
                    rel="noopener noreferrer">
                <GitHub />
            </a>

            <a href="https://www.linkedin.com/in/richey-okoh-michael-a25302184/" className='icons' target="_blank"
                    rel="noopener noreferrer">
                <LinkedIn />
            </a>
        </div>
    </div>
  )
}

export default Footer