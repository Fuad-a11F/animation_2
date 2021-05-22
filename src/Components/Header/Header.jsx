import React from 'react'
import './Header.css'
import search_icon from  "../../images/search.png";
import Login from './Login'
import Registration from './Registration'

export default function Header() {
      let [visible, setVisible] = React.useState(false)
      let [modal, setModal] = React.useState(false)
      let [page, setPage] = React.useState('login')

      function search_show(e) {
            setVisible(true)
      }
      function search_hide(e) {
            setVisible(false)
      }
      return (
            <div className='header__row'>
                  <div className="header__logo">Sqr<span>Learning</span></div>
                  <nav className="header__nav">
                        <ul className='header__nav-body'>
                              <li className='header__item'>
                                    <input className={visible ? 'header__input' : 'header__input _hidden'} type="text" />
                                    <img  className={visible ? 'header__icon' : 'header__icon _hidden'} width='26' height='26' src={search_icon} alt="" />
                                    <span className={visible ? 'header__close' : 'header__close _hidden'} onClick={(e) => search_hide(e)}>X</span>
                              </li>
                              <li className='header__item'><button className={visible ? 'header__link _hidden' : 'header__link '} onClick={(e) => search_show(e)}>Search</button></li>
                              <li className='header__item'><button className='header__link' onClick={() => setModal(true)}>Log in</button></li>
                              <li className='header__item'><button className='header__button button' onClick={() => setModal(true)}>Join Now</button></li>
                        </ul>
                  </nav>
                  <div className='burger'><span></span></div>
                  
                  {page === 'login'  && <Login modal={modal} setPage={setPage} setModal={setModal}/>}
                  {page === 'registration'  && <Registration modal={modal} setPage={setPage} setModal={setModal}/>}
                  

            </div>
      )
}