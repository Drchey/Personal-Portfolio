import { ArrowForwardIos } from '@mui/icons-material'
import './discuss.scss'


const Discuss = () => {
  return (
    <div className='discuss'>
        <div className='discuss__view_projects'>
            <span>
                 <h3> Check My Projects</h3>
                 <ArrowForwardIos />
            </span>

            <span className='discuss__view__projects__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic provident accusamus nulla aliquid sint nam debitis quaerat vitae autem, molestias doloremque fuga, quam id cupiditate ullam dolorum amet laboriosam.
            </span>

            <span className='talk'>
                Let's Talk
            </span>
           
        </div>
        <div className='discuss__chat'>
        <span>
             <h3> Contact Me Via Email</h3>
                 <ArrowForwardIos />
            </span>

            <span className='discuss__chat__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic provident accusamus nulla aliquid sint nam debitis quaerat vitae autem, molestias doloremque fuga, quam id cupiditate ullam dolorum amet laboriosam.
            </span>

            <span className='talk'>
                Let's Chat
            </span>
           
        </div>
    </div>
  )
}

export default Discuss