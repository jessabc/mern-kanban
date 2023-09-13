import React from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext'
import useLogout from '../../hooks/useLogout'
import Dropdown from './Dropdown'

const User = () => {
  const {user} = useAuthContext()
  const logout = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <div className=' flex justify-between items-center max-w-6xl ml-auto mt-5 mr-10 dark:bg-zinc-800 dark:text-zinc-100'>
   

      {user ? (<div className='  text-sm items-end gap-1 hidden sm:flex'>
        <p className='font-bold  text-slate-900 dark:bg-zinc-800 dark:text-zinc-100 '>{user.email} </p>
        <p className='font-bold  text-pink-00  '>|</p>
        <button onClick={handleClick}className='font-bold  text-slate-900  hover:text-slate-800 dark:bg-zinc-800 dark:text-zinc-100'>Logout</button>
      </div>) :
      
      (<nav className=' gap-4 text-sm hidden sm:flex'>
          <Link to='/login' className='font-bold  text-slate-900 rounded-lg p-3 hover:text-slate-600'>Login</Link>
          <Link to='/signup' className='font-bold bg-slate-800 text-slate-100 rounded-lg p-3 hover:bg-slate-700'>Sign up</Link>
      </nav>)}

      <div className='sm:hidden'>
      <Dropdown handleClick={handleClick}/>
      </div>
        
    </div>
  )
}

export default User