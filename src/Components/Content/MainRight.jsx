import './MainRight.css'
import Tilt from 'react-tilt'
import picture from '../../images/main_picture.png'

export default function MainRight()  {


    return (
        <div className='main-right'>
            <Tilt className="Tilt" options={{ max : 25 }} >
                <img src={picture} alt="" />
            </Tilt>
        </div>
    )
}