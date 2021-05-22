import './MainLeft.css'
import MainLeftText from './MainLeftText' 
import MainLeftButton from './MainLeftButton' 

export default function MainLeft()  {


    return (
        <div className='main-left'>
            <p className='main-left__title'>Online education for people of all ages</p>
            <MainLeftText />
            <MainLeftButton />
        </div>
    )
}