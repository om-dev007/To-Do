const List = ({ elem, toScreen, onDelete }) => {

  return (
    <div className="font-bold text-2xl flex gap-5 items-center">
        {toScreen ? (
          <div className="bg-gray-900 w-1/2 text-white rounded p-5">
            {/* fallback: agar elem.text nahi hai to elem ko stringify karke dikhado */}
            <h1 className="text-white "> {elem?.text ?? String(elem)} </h1>
          </div>
        ) : null}
        <div className="self-center">
          <button className="bg-blue-500 cursor-pointer text-white px-5 py-2 rounded-2xl hover:scale-105 transition-all">Edit</button>
        </div>
        <div className="self-center">
            <button onClick={onDelete} className="bg-blue-500 hover:scale-105 transition-all cursor-pointer text-white px-5 py-2 rounded-2xl">Delete</button>
        </div>
      </div>
  )
}

export default List