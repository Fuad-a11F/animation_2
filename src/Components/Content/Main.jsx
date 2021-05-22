import './Main.css'
import MainRight from './MainRight' 
import MainLeft from './MainLeft' 

export default function Main()  {


    return (
        <div className='main__row'>

            <MainLeft  />
            
            <MainRight />

        </div>
    )
}