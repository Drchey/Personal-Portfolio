import { WorkspacePremium } from '@mui/icons-material'
import './cert.scss'



const Certs = ({type}) => {

 let data

 switch (type) {
    case "uni":
        data={
            title:"BSC BED Computer Science",
            years:"2015 - 2019"
        }
    break;

    case "freecode":
        data={
            title:"Responsive Web Design",
            years:"Issued July 2020"
        }
        break;
    case "freecodecamp":
        data={
            title:"JavaScript & Data Algorithms",
            years:"Issued August 2020"
        }
        break;
    case "google":
        data={
            title:"Google IT Professional Certification",
            years:"Issued December 2020"
        }
        break;
   
 
    default:
        break;
 }
  return (
    <div className='cert'>
        <div className='cert-title'>
            {data.title}
        </div>
        <div className="cert-banner">
            <span>
                <WorkspacePremium />
            </span>
            <span>
                {data.years}
            </span>
        </div>
    </div>
  )
}

export default Certs