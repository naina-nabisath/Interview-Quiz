import { ArrowRight, Book, BookMarked, CircleCheck, Clock, CodeXml, Shell, Zap } from 'lucide-react'

function Home() {

  const details = [
    { logo: <Book stroke='#a361ee' />, heading: "5 Questions", des: "Focused practice" },
    { logo: <CodeXml stroke='#a361ee' />, heading: "MERN Focused", des: "Industry-relevent topics" },
    { logo: <Zap stroke='#a361ee' />, heading: "Instant Feedback", des: "Learn from mistakes" },
  ]

  const poster = [
    { logo: <Book stroke='#a361ee' />, heading: "5 Questions", des: "Focused practice" },
    { logo: <Clock stroke='#a361ee' />, heading: "Quick Practice", des: "Short and focused sessions" },
    { logo: <Shell stroke='#a361ee' />, heading: "Track Your Progress", des: "Improve with every attempt" },
  ]

  return (
    <div className="flex justify-between items-center gap-10 py-30 px-30">
      <div>
        <div>
          <h1 className="border-2 px-5 py-2 rounded-2xl text-[#a361ee] font-bold flex w-fit">
            <Zap />
            MERN INTERVIEW QUIZ
          </h1>
        </div>
        <div className='my-3'>
          <h1 className='text-white text-8xl font-bold'>
            Sharpen Your
          </h1>
          <h1 className='bg-linear-to-r from-[#a361ee] to-[#d00cea] bg-clip-text text-transparent text-8xl font-bold'>
            Developer Skills
          </h1>
        </div>
        <div>
          <h1 className='text-gray-500 text-2xl font-bold mx-2'>
            Quick, focused quizzes to help you prepare for your next MERN <br />
            interview. Learn, practice and build confidence one question at a <br />
            time.
          </h1>
        </div>
        <div className='flex justify-center pt-10'>
          {details.map((items) => (
            <div className='text-white m-2 border-2 border-[#352443] bg-[#352443] w-fit p-5 rounded-2xl'>
              {items.logo}
              <h1 className='font-bold '>
                {items.heading}
              </h1>
              <h1 className='text-gray-500'>
                {items.des}
              </h1>
            </div>
          ))}
        </div>
        <div>
          <button className='flex gap-2 text-white border-2 border-[#b30fa8] rounded-2xl p-2 my-5 bg-[#b30fa8] font-bold'>
            Start Quiz
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className=''>
        <div className='border-2 border-[#b30fa8] rounded-2xl p-5 text-white'>
          <div className='flex gap-50 justify-between items-center'>
            <div>
              <h1 className='text-gray-500'>
                YOUR NEXT CHALLENGE
              </h1>
              <h1 className='text-white font-bold text-3xl'>
                MERN Developer
              </h1>
            </div>
            <div className='border-2 border-[#b30fa8] rounded-2xl p-3 bg-[#b30fa8]'>
              <CodeXml />
            </div>
          </div>
          <div>
            <div className='border-2 rounded-2xl border-[#352443] bg-[#352443] p-2 m-3'>
              <div className='flex justify-between'>
              <h1 className='text-gray-500'>
                Quiz Overview
              </h1>
              <h1 className='text-[#a361ee]'>
                Beginner
              </h1>
            </div>
              {poster.map((items, index) => (
                <div key={index} className='p-2 flex gap-3 items-center'>
                  {items.logo}
                  <div>
                    <h1 className='font-bold '>
                      {items.heading}
                    </h1>
                    <h1 className='text-gray-500'>
                      {items.des}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-2 text-green-400'>
            <CircleCheck />
            Ready when you are!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home