import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'

export default function Register() {
    const navigate=useNavigate();
    const dispatch=useDispatch(); 

    const {user,isLoading,isSuccess,isError,message}=useSelector((state)=>state.auth)

    const [formData,setFormData] = useState({
        email:'',
        parola:'',
        kullaniciAd:'',
        parolaKontrol:''
    })

    const {email,parola,kullaniciAd,parolaKontrol} = formData;

    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value 
        }))
    }

    const onSubmit=(e)=> {
        e.preventDefault();

        if(parola!==parolaKontrol){
            toast.warning("Parolalar Eşleşmedi")
        }else{
            const userData={
                email,
                parola,
                kullaniciAd
            }

            dispatch(register(userData))
        }
    }

    useEffect(()=>{

        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    },[user,isError,isSuccess,message,navigate,dispatch])

    if(isLoading){
        return <Spinner/>
    }

  return (
    <div>
        <section className='heading'>
        <h1>
            Üyelik Oluştur
        </h1>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
            <input type='text' className='form-control' id='kullanicAd' name='kullaniciAd' value={kullaniciAd} placeholder='Kullanıcı Adı Giriniz' onChange={onChange}/>
        </div>
        <div className='form-group'>
            <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Emailinizi Giriniz' onChange={onChange}/>
        </div>
        <div className='form-group'>
            <input type='password' className='form-control' id='parola' name='parola' value={parola} placeholder='Parolanızı Giriniz' onChange={onChange}/>
        </div>
        <div className='form-group'>
            <input type='password' className='form-control' id='parolaKontrol' name='parolaKontrol' value={parolaKontrol} placeholder='Parolanızı Tekrar  Giriniz' onChange={onChange}/>
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-block'>
                Üye Ol
            </button>
        </div>
        </form>
    </section>
    </div>
  )
}
