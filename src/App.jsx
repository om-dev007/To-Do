import Home from "./Components/Home"
import { useState } from "react"

const App = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false) 
  const [isNotesAvailable, setIsNotesAvailable] = useState('No notes Found') 
  const [inputVal, setInputVal] = useState('') 
  const [toScreen, setToScreen] = useState(false) 
  const [message, setMessage] = useState('This is the reason')

  return (
    <div className={`min-h-screen p-4 bg-gray-50`} >
      <div className="max-w-3xl mx-auto">
        <Home
          isBtnClicked={isBtnClicked}
          setIsBtnClicked={setIsBtnClicked}
          isNotesAvailable={isNotesAvailable}
          setIsNotesAvailable={setIsNotesAvailable}
          inputVal={inputVal}
          setInputVal={setInputVal}
          toScreen={toScreen}
          setToScreen={setToScreen}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  )
}

export default App