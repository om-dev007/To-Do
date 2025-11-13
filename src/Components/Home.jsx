import React, { useState } from 'react'
import Navbar from './Navbar'
import List from './List'


const Home = () => {
    const [isBtnClicked, setIsBtnClicked] = useState(false) // ye toh input show karne ke liye h 
    const [isNotesAvailable, setIsNotesAvailable] = useState('Please Add Notes..') // ye toh ek condition pe render hone wala text h 
    const [inputVal, setInputVal] = useState([]) // ye toh user ka input ko store karne ke liye h 
    const [toScreen, setToScreen] = useState(false) // ye toh screen par list ko set karne ke liye state banaya hu 
    const [list, setList] = useState('')

    const createList = () => {
        setIsBtnClicked(true)
        setIsNotesAvailable('Please Add Your Notes..')
    }

    // ye wala function toh sirf input show karne ke liye h jab navbar ka btn click ho tab
    const theScreen = () => {
        setList((prevList) => prevList)
        setInputVal([])
        setToScreen(true)
        setIsBtnClicked(false)
    }

    // ye toh ui h tab show hoga jab isBtnClicked true hoga toh ye wali function uske liye h ki jab jab btn pe click ho tab tab ek input or uske sath save ka btn aa jaye taki user ka input ko store karke ui me show kar sake as a note
    const inputSec = (
        <>
            <div className="flex gap-5">
                <div className="">
                    <input value={inputVal} onChange={(e) => {
                        setInputVal(e.target.value) // ye toh input ko set kar dega state me  
                    }} className="bg-gray-900 outline-0 border-2 px-5 py-2 text-white rounded border-gray-500" type="text" placeholder="Enter Your Notes..." />
                </div>
                <div>
                    {/* // ye wali btn ka kaam h ui me show karna and phir input wale section ko remove karna  */}
                    <button onClick={theScreen} className="bg-blue-500 cursor-pointer hover:scale-105 transition-all text-white px-5 py-2 rounded " >Save Notes</button>
                </div>
            </div>
        </>
    )
    return (
        <div>
            <Navbar createList={createList} />
            <div className='font-semibold text-2xl p-5'>
                {isBtnClicked ? inputSec : isNotesAvailable}
            </div>
            <List tolist={list} toScreen={toScreen} />
        </div>
    )
}

export default Home