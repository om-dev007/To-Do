import React from 'react'

const InputSection = ({inputVal, setInputVal, theScreen}) => {

     // ye toh ui h tab show hoga jab isBtnClicked true hoga toh ye wali function uske liye h ki jab jab btn pe click ho tab tab ek input or uske sath save ka btn aa jaye taki user ka input ko store karke ui me show kar sake as a note

    return (
        <div className="flex gap-5">
            <div className="">
                <input value={inputVal} onChange={(e) => {
                    setInputVal(e.target.value) // ye toh input ko set kar dega state me  
                }} className="bg-gray-900 outline-0 border-2 px-5 py-2 text-white rounded border-gray-500" type="text" placeholder="Enter Your Notes..." />
            </div>

            <div>
                {/* ye wali btn ka kaam h ui me list ko show karna and phir input wale section ko remove karna */}
                <button onClick={theScreen} className="bg-blue-500 cursor-pointer hover:scale-105 transition-all text-white px-5 py-2 rounded " >Save Notes</button>
            </div>
        </div>
    )
}

export default InputSection