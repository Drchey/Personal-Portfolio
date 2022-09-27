import { AdUnits } from '@mui/icons-material'
import './header.scss'

const Header = ({title}) => {
  return (
    <div className='header'>
        <div className='header--title'>
           <AdUnits />
            Richey | {title}
        </div>
       

        
    </div>
  )
}

export default Header