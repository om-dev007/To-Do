import React from 'react'

const Navbar = ({createList}) => {
  return (
    <div className={`bg-gray-900 rounded-2xl flex justify-between text-white p-5 `}>
        <div className={` `} >
          <h1 className='text-2xl font-bold'>Notes App</h1>
        </div>
        <div>
          <button onClick={createList} className="bg-blue-500 text-white cursor-pointer hover:scale-90 transition-all px-5 py-2 rounded">Add Note</button>
        </div>
      </div>
  )
}

export default Navbar