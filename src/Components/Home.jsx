import Navbar from './Navbar'
import List from './List'
import InputSection from './InputSection'
import { useState, useEffect, useRef } from 'react'

const Home = ({ isBtnClicked, setIsBtnClicked, isNotesAvailable, setIsNotesAvailable, inputVal, setInputVal, toScreen, setToScreen, setMessage }) => {

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
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        if (list.length > 0) setToScreen(true)
    }, []) 

    useEffect(() => {
        try {
            localStorage.setItem('notes_app_list', JSON.stringify(list))
        } catch (error) {
            console.error('Failed to save notes to localStorage:', error)
        }
    }, [list])

    const navBtnClicked = () => {
        setIsBtnClicked(true)
        setIsNotesAvailable('Your notes..')
        setEditId(null) 
    }

    const deleteNote = (idToRemove) => {
        setList(prev => prev.filter(item => item.id !== idToRemove))
        if (editId === idToRemove) {
            setEditId(null)
            setInputVal('')
            setIsBtnClicked(false)
        }
    }

    const startEdit = (note) => {
        setEditId(note.id)
        setInputVal(note.text)
        setIsBtnClicked(true)
        setToScreen(true)
        setIsNotesAvailable('Editing note...')
    }

    const theScreen = () => {
        const text = (inputVal || '').trim()
        if (!text) {
            setError('Please enter a note before saving.')
            if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
            errorTimerRef.current = setTimeout(() => setError(''), 3000)
            return
        }

        if (editId) {
            setList(prev => prev.map(item => item.id === editId ? { ...item, text } : item))
            setMessage('Note updated')
            setEditId(null)
        } else {
            const newNote = { id: Date.now() + Math.floor(Math.random() * 1000), text }
            setList(prev => [newNote, ...prev])
            setMessage('Note added')
        }

        setInputVal('')
        setToScreen(true)
        setIsBtnClicked(false)
    }

    useEffect(() => {
        return () => {
            if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
        }
    }, [])

    return (
        <div className="space-y-4">
            <Navbar createList={navBtnClicked} />
            <div className='font-semibold text-2xl p-2'>
                {isBtnClicked
                  ? <InputSection setInputVal={setInputVal} inputVal={inputVal} theScreen={theScreen} isEditing={!!editId} />
                  : (list.length > 0 ? 'Your notes..' : isNotesAvailable)
                }
            </div>

            {error && <div className="text-red-500 font-medium p-2">{error}</div>}

            <div className='flex flex-col gap-4'>
                {list.length > 0 ? list.map((elem) => {
                    return (
                        <List
                          key={elem.id}
                          elem={elem}
                          toScreen={toScreen}
                          onDelete={() => deleteNote(elem.id)}
                          onEdit={() => startEdit(elem)}
                        />
                    )
                }) : <div className="text-gray-600">Please Add a note</div>}
            </div>
        </div>
    )
}

export default Home