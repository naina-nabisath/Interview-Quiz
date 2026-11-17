import React from 'react'

function Quiz() {
  return (
    <div>
      <nav>
        <div className="flex flex-col sm:flex-row justify-between p-2 border-b border-[#b30fa8]">
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-[#b30fa8]">
              MERN <span className="text-white">
                QUIZ
              </span>
            </h1>
          </div>
          <div className="border-2 border-[#b30fa8] rounded-2xl w-fit h-fit p-1 mr-6">
            <h1 className="text-white">
              10:00
            </h1>
          </div>
        </div>
      </nav>
      
      <div>
        <h1 className='text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sint exercitationem debitis qui quos obcaecati optio magni perspiciatis atque delectus quas ipsum error, mollitia harum dolorum, molestias asperiores dolore? Adipisci.
        </h1>
      </div>
      <div className='flex gap-5 text-white p-5'>
        <div className='w-2/3 border-2 p-2'>
          <div className='text-2xl font-bold m-5'>
            Q1. MERN Stands for
          </div>
          <div className='flex flex-col gap-5'>
            <div className='border-2 p-2 rounded-2xl'>
              <span className='border-r-2 pr-2'>
                <input type="radio" />
              </span>
              <span className='pl-2'>
                Mechanical, Eager, Radio, Narrow
              </span>
            </div>
            <div className='border-2 p-2 rounded-2xl'>
              <span className='border-r-2 pr-2'>
                <input type="radio" />
              </span>
              <span className='pl-2'>
                Mechanical, Eager, Radio, Narrow
              </span>
            </div>
            <div className='border-2 p-2 rounded-2xl'>
              <span className='border-r-2 pr-2'>
                <input type="radio" />
              </span>
              <span className='pl-2'>
                Mechanical, Eager, Radio, Narrow
              </span>
            </div>
            <div className='border-2 p-2 rounded-2xl'>
              <span className='border-r-2 pr-2 '>
                <input type="radio" />
              </span>
              <span className='pl-2'>
                Mechanical, Eager, Radio, Narrow
              </span>
            </div>
          </div>
        </div>


        <div className='w-1/3 border-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat, nam, fugiat eveniet eaque officiis animi illo ea, quaerat mollitia voluptate. Facilis alias sapiente dolorem voluptate enim quos, et cum.
        </div>
      </div>
    </div>
  )
}

export default Quiz
