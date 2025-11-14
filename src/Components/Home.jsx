import Navbar from './Navbar'
import List from './List'
import InputSection from './InputSection'
import { useState, useEffect, useRef } from 'react'

const Home = ({ isBtnClicked, setIsBtnClicked, isNotesAvailable, setIsNotesAvailable, inputVal, setInputVal, toScreen, setToScreen, setMessage }) => {

    // load initial from localStorage and normalize old formats (strings -> {id, text})
    const [list, setList] = useState(() => {
        try {
            const raw = localStorage.getItem('notes_app_list')
            if (!raw) return []
            const parsed = JSON.parse(raw)
            return parsed.map((item, idx) => {
                if (typeof item === 'string') return { id: Date.now() + idx, text: item }
                if (item && typeof item === 'object') {
                    return {
                        id: item.id ?? (Date.now() + idx),
                        text: (typeof item.text !== 'undefined') ? item.text : String(item)
                    }
                }
                return { id: Date.now() + idx, text: String(item) }
            })
        } catch {
            return []
        }
    })
    const [error, setError] = useState('')
    const errorTimerRef = useRef(null)

    // if there are notes on mount, show them
    useEffect(() => {
        if (list.length > 0) setToScreen(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // run once on mount

    // persist to localStorage
    useEffect(() => {
        try {
            localStorage.setItem('notes_app_list', JSON.stringify(list))
        } catch {}
    }, [list])

    // show input field
    const navBtnClicked = () => {
        setIsBtnClicked(true)
        setIsNotesAvailable('Your notes..')
    }

    // delete by id (immutable)
    const deleteNote = (idToRemove) => {
        setList(prev => prev.filter(item => item.id !== idToRemove))
    }

    // save note (validate + add with unique id)
    const theScreen = () => {
        const text = (inputVal || '').trim()
        if (!text) {
            // show temporary error
            setError('Please enter a note before saving.')
            if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
            errorTimerRef.current = setTimeout(() => setError(''), 3000)
            return
        }

        const newNote = { id: Date.now() + Math.floor(Math.random() * 1000), text }
        setList(prev => [newNote, ...prev])
        setMessage('Note added')
        setInputVal('')
        setToScreen(true)
        setIsBtnClicked(false)
    }

    // cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
        }
    }, [])

    return (
        <div>
            <Navbar createList={navBtnClicked} />
            <div className='font-semibold text-2xl p-5'>
                {isBtnClicked ? <InputSection setInputVal={setInputVal} inputVal={inputVal} theScreen={theScreen} /> : isNotesAvailable}
            </div>

            {error && <div className="text-red-500 font-medium p-2">{error}</div>}

            <div className='flex flex-col gap-5'>
                {list.length > 0 ? list.map((elem) => {
                    return (
                        <List key={elem.id} elem={elem} toScreen={toScreen} onDelete={() => deleteNote(elem.id)} />
                    )
                }) : 'Please Add a note'}
            </div>
        </div>
    )
}

export default Home