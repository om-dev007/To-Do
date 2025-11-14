const List = ({elem , toScreen, idx, deleteNote}) => {

  return (
    <div key={idx} className="font-bold text-2xl flex gap-5">
        {toScreen ? (
          <div className="bg-gray-900 w-1/2 text-white rounded p-5">
            <h1 className="text-white "> {elem} </h1>
          </div>
        ) : ''}
        <div className="self-center">
            <button onClick={deleteNote} className="bg-blue-500 hover:scale-105 transition-all cursor-pointer text-white px-5 py-2 rounded-2xl">Delete</button>
        </div>
      </div>
  )
}

export default List