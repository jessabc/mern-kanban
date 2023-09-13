import { createContext, useState, useEffect } from "react"
import axios from "axios"
import useAuthContext from "./hooks/useAuthContext"


export const Context = createContext()


export function ContextProvider({children}) {

  // local storage:
  //credit to https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
  //credit to https://upmostly.com/tutorials/how-to-add-local-storage-to-your-react-apps  

  const [boards, setBoards] = useState() 

  const [currentBoardName, setCurrentBoardName] = useState('')
  
  const [currentBoardData, setCurrentBoardData] = useState({})

  const [theme, setTheme] = useState('light')

  const {user} = useAuthContext()
  console.log(user)

  //local storage
  // useEffect(() => {
  //   if(boards) {
  //     localStorage.setItem('boards', JSON.stringify(boards));
  //   // console.log('stored')
  //   }
  // }, [boards]);

  // set the current board
  // useEffect(() => {
  //   setCurrentBoardData(boards?.find(board => board.boardName === currentBoardName))

  //   if(!currentBoardName) {
  //     if(boards) {
  //       setCurrentBoardName(boards[0]?.boardName)
  //     }
  //   }
  // },[boards])
    
  // on first time using app ie nothing in local storage, fetch boards
  // useEffect(() => {
  //   if(!boards) {
  //     fetch("./data.json")
  //       .then(res => res.json())
  //       .then(data => {
  //         setBoards(data.boards)
  //         setCurrentBoardName(data.boards[0]?.name)
  //       })
  //   } else {
  //     setCurrentBoardName(boards[0]?.name)
  //   }
  // }, [])

  // useEffect(() => {

  //   const getBoards = async() => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/api/boards', { 
  //         headers: { 
  //           "Authorization": `Bearer ${user.token}`
  //         }
  //       })
  //       console.log(response.data)
  //       setBoards(response.data)
  //       setCurrentBoardName(response.data[0].boardName)
  //       setCurrentBoardData(response.data[0])
  //     }catch(error) {
  //       console.log(error)
  //     }
  //   }

  //   getBoards()
  // },[])


  return (
      <Context.Provider value={{boards, setBoards, currentBoardName, setCurrentBoardName, currentBoardData, setCurrentBoardData, theme, setTheme}}>
        {children}
      </Context.Provider>
  )
}