import { ArrowRight, Book, CircleCheck, Clock, CodeXml, Shell, Zap } from 'lucide-react'

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
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-10 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className='w-full lg:w-3/5'>
        <div>
          <h1 className="border-2 px-5 py-2 rounded-2xl text-[#a361ee] font-bold flex w-fit">
            <Zap />
            MERN INTERVIEW QUIZ
          </h1>
        </div>
        <div className='my-3'>
          <h1 className='text-white text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            Sharpen Your
          </h1>
          <h1 className='bg-linear-to-r from-[#a361ee] to-[#d00cea] bg-clip-text text-transparent text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            Developer Skills
          </h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-base sm:text-lg md:text-xl font-bold mx-2 leading-relaxed">
            Quick, focused quizzes to help you prepare for your next MERN
            interview. Learn, practice and build confidence one question at a
            time.
          </h1>
        </div>
        <div className='flex flex-wrap sm:flex-row justify-center pt-10'>
          {details.map((items, index) => (
            <div key={index} className='text-white border-2 border-[#352443] bg-[#352443] w-full sm:flex-1 sm:min-w-40 p-4 m-2 rounded-2xl'>
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
      <div className='py-5 sm:py-9 lg:py-13 w-full lg:w-2/5'>
        <div className='border-2 border-[#b30fa8] rounded-2xl p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-gray-500 text-sm sm:text-base md:text-lg'>
                YOUR NEXT CHALLENGE
              </h1>
              <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                MERN Developer
              </h1>
            </div>
            <div className='border-2 border-[#b30fa8] rounded-2xl p-3 bg-[#b30fa8]'>
              <CodeXml />
            </div>
          </div>
          <div>
            <div className='border-2 rounded-2xl border-[#352443] bg-[#352443] p-2 m-3'>
              <div className='flex flex-col sm:flex-row justify-between'>
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