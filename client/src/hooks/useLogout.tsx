import useAuthContext from './useAuthContext'


const useLogout = () => {

    const {dispatch: authDispatch} = useAuthContext()
    // const {dispatch: notesDispatch} = useNotesContext()

    const logout = () => {
      authDispatch({type: 'LOGOUT'})
      // notesDispatch({type: 'SET_NOTES', payload: null})
      localStorage.removeItem('user');
    }

  return logout
}

export default useLogout