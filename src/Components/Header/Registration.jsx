import './Login_Registration.css'
import Modal from '../Modal/Modal'


export default function Registration({children, modal, setModal, setPage}) {
    
    return (
        <Modal modal={modal} setModal={setModal}>
            <p className='login__title'>Sign up</p>
            <div className="login__input"><input type="text" placeholder='Name'/></div>
            <div className="login__input"><input type="text" placeholder='Last  name'/></div>
            <div className="login__input"><input type="text" placeholder='Number'/></div>
            <div className="login__input"><input type="text" placeholder='Email'/></div>
            <div className="login__input"><input type="text" placeholder='Password'/></div>
            <button className='registration__button button'>Sign in</button>
            <p>Don you have an account? <button className='login__create' onClick={() =>  setPage('login')}>Sign in</button></p>
        </Modal>
    )
}