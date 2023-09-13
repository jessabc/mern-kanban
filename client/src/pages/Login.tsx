import React, { useState } from 'react'
import useLogin from '../hooks/useLogin'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {loading, error, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(email, password)
    }

  return (
    <div className='flex mt-10 justify-center  '>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-1'>
            <h3 className='text-center font-bold text-lg'>Login</h3>
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-slate-100 rounded-sm outline-1 outline-pink-500 p-2'/>

            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='bg-slate-100 rounded-sm outline-1 outline-pink-500 p-2'/>

            <button disabled={loading} className='font-bold bg-slate-800 text-slate-100 rounded-lg p-3 hover:bg-slate-700 my-2'>Login</button>
            
            {error && <p  className='text-pink-500'>{error}</p>}

        </form>
    </div>
  )
}

export default Login