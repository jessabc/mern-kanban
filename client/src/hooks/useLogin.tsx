import { useState } from 'react'
import axios from 'axios'
import useAuthContext from '../hooks/useAuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { dispatch} = useAuthContext()
  
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/login', {email, password})

            dispatch({type: 'LOGIN', payload: response.data})

            localStorage.setItem('user', JSON.stringify(response.data))
        }catch(error) {
            setError(error.response.data.error)        
        }
    }

    return {loading, error, login}
}

export default useLogin