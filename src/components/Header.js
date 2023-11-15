
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaSignInAlt,FaUser,FaSignOutAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'
export default function Header() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user}=useSelector((state)=>state.auth)

  const onLogout=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
  <header className='header'>
    <div className='logo'>
        <Link to="/">AOS Yapılacaklar</Link>
    </div>
    <ul>
        {user ? (
          <>
            <li>
              <span>Merhaba {user.displayName} </span>
            </li>
            <li>
              <button onClick={onLogout} className='btn'>Çıkış<FaSignOutAlt/></button>
            </li>
            </>
        ):(
        <>
        <li>
            <Link to="/login"><FaSignInAlt/>Giris</Link>
        </li>

        <li>
            <Link to="/register"><FaUser/>Üye Ol</Link>
        </li>

        </>
        )}
    </ul>
  </header>
  )
}
