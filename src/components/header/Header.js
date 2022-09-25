import { AdUnits, History, WorkspacePremium } from '@mui/icons-material'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='header--title'>
           <AdUnits />
            Richey
        </div>
        <div className='header--links'>
            <WorkspacePremium />
            <History />

        </div>

        
    </div>
  )
}

export default Header