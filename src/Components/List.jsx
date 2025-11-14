const List = ({ elem, toScreen, onDelete, onEdit }) => {

  return (
    <div className="font-bold text-lg flex flex-col md:flex-row gap-3 md:gap-5 items-start md:items-center bg-white shadow rounded p-3">
        {toScreen ? (
          <div className="bg-gray-900 w-full md:w-1/2 text-white rounded p-3">
            <h1 className="text-white break-words">{elem?.text ?? String(elem)}</h1>
          </div>
        ) : null}

        <div className="flex gap-3 mt-2 md:mt-0 ml-0 md:ml-auto">
          <button onClick={onEdit} className="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded hover:scale-105 transition-all">Edit</button>
          <button onClick={onDelete} className="bg-red-500 hover:scale-105 transition-all cursor-pointer text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
  )
}

export default List