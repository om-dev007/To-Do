const InputSection = ({inputVal, setInputVal, theScreen, isEditing}) => {

    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full items-start">
            <div className="w-full sm:w-auto flex-1">
                <input
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="w-full bg-gray-900 outline-0 border-2 px-4 py-2 text-white rounded border-gray-500"
                  type="text"
                  placeholder="Enter Your Notes..."
                />
            </div>

            <div className="w-full sm:w-auto">
                <button onClick={theScreen} className="w-full sm:w-auto bg-blue-500 cursor-pointer hover:scale-105 transition-all text-white px-5 py-2 rounded " >
                  {isEditing ? 'Update Note' : 'Save Notes'}
                </button>
            </div>
        </div>
    )
}

export default InputSection