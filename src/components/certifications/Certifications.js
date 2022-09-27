import { ArrowCircleRightRounded } from '@mui/icons-material'
import Certs from '../certs/Certs'
import './certifications.scss'
const Certifications = () => {
  return (
    <div className='certifications'>
        <div className='cert-header'>
            <ArrowCircleRightRounded />
            Certifications
        </div>

        <div className='certs'>
            <Certs type="uni" />
            <Certs type="freecode" />
            <Certs type="freecodecamp" />
            <Certs type="google" />
        </div>
        

    </div>
  )
}

export default Certifications