const List = ({list, toScreen}) => {
  return (
    <div className="font-bold text-5xl text-red-500">
        {toScreen ? (
          <div className="bg-gray-900 text-white rounded p-5">
            <h1 className="text-white "> {list} </h1>
          </div>
        ) : ''}
      </div>
  )
}

export default List