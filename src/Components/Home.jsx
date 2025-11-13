import Navbar from './Navbar'
import List from './List'
import InputSection from './InputSection'
import { useState } from 'react'

const Home = ({isBtnClicked, setIsBtnClicked, isNotesAvailable, setIsNotesAvailable, inputVal, setInputVal, toScreen, setToScreen, setMessage }) => {

    const [list, setList] = useState([])

    // ye function toh sirf input ko display karane ke liye h jab bhi user click karega navbar ke btn par usko ek input field dikhega
    const navBtnClicked = () => {
        setIsBtnClicked(true)
        setIsNotesAvailable('Please Add Your Notes..')
    }

    // ye wala function toh sirf input show karne ke liye h jab navbar ka btn click ho tab
    const theScreen = () => {
        setList((prev) => [inputVal, ...prev])
        console.log(list);
        setMessage('Nhi hua kaam')
        setInputVal('')
        setToScreen(true) 
        setIsBtnClicked(false)
    }
    return (
        <div>
            <Navbar createList={navBtnClicked} />
            <div className='font-semibold text-2xl p-5'>
                {isBtnClicked ? <InputSection setInputVal={setInputVal} inputVal={inputVal} theScreen={theScreen} /> : isNotesAvailable}
            </div>
            <div className='flex flex-col gap-5'>
                {list.length>0 ? list.map((elem, idx) => {
                    return (
                        <List key={idx} elem={elem} toScreen={toScreen}  />
                    )
                }) : 'Please Add Notes' }
            </div>
            {/* <List list={list} toScreen={toScreen}  /> */}
        </div>
    )
}

export default Home