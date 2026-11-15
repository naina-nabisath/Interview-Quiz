// import React from 'react'

function Nav() {
  return (
    <div className="flex justify-between p-5 border-b border-[#b30fa8]">
        <div>
            <h1 className="font-bold text-4xl text-[#b30fa8]">
                MERN <span className="text-white">
                    QUIZ
                </span>
            </h1>
        </div>
        <div className="border-2 border-[#b30fa8] rounded-2xl w-fit p-2">
            <h1 className="text-white">
                Practice Now
            </h1>
        </div>
    </div>
  )
}

export default Nav