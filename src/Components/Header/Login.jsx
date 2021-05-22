import './Login_Registration.css'
import Modal from '../Modal/Modal'

export default function Login({children, modal, setModal, setPage}) {
    
    return (
        <Modal modal={modal} setModal={setModal}>
            <p className='login__title'>Sign in</p>
            <div className="login__input"><input type="text" placeholder='Email'/></div>
            <div className="login__input"><input type="text" placeholder='Password'/></div>
            <div className='login__flex'>
                <input className='login__check' type="checkbox" id='login'/>
                <label htmlFor="login">Remember me</label>
                <button className='login__button button'>Sign in</button>
            </div>
            <p>Don't you have an account? <button className='login__create' onClick={() => setPage('registration')}>Sign up</button></p>
        </Modal>
    )
}