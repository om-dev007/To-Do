import Home from "./Components/Home"
import { useState } from "react"

const App = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false) // ye toh input show karne ke liye h 
      const [isNotesAvailable, setIsNotesAvailable] = useState('Please Add Notes..') // ye toh ek condition pe render hone wala text h 
      const [inputVal, setInputVal] = useState([]) // ye toh user ka input ko store karne ke liye h 
      const [toScreen, setToScreen] = useState(false) // ye toh screen par list ko set karne ke liye state banaya hu 
      const [message, setMessage] = useState('This is the reason')
  return (
    <div className={`h-screen p-5 text-center`} >
      <Home isBtnClicked={isBtnClicked} setIsBtnClicked={setIsBtnClicked} isNotesAvailable={isNotesAvailable} setIsNotesAvailable={setIsNotesAvailable} inputVal={inputVal} setInputVal={setInputVal} toScreen={toScreen} setToScreen={setToScreen} message={message} setMessage={setMessage} />
    </div>
  )
}

export default App