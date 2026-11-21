import React from 'react'

function Quiz() {

  const quiz = [
    {
      question: "MERN stands for?",
      options: [
        "Mechanical, Eager, Radio, Narrow",
        "MongoDB, Express, Redux, Node",
        "MongoDB, Express, React, Node",
        "MySQL, Express, React, Next"
      ],
      answer: 2
    }
  ];
  return (
    <div>
      <nav>
        <div className="flex flex-col sm:flex-row justify-between p-2">
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

      <div className='flex flex-wrap flex-col sm:flex-row justify-between items-center sm:justify-between m-5'>
        <div className='w-2/3'>
          <h1 className='text-[#d411f2] font-bold'>
            TECHNICAL ASSESSMENT
          </h1>
          <h1 className='text-white font-bold text-3xl py-5'>
            Test Your Knowledge
          </h1>
          <h1 className='text-white'>
            Choose the correct answer for each question.
          </h1>
        </div>
        <div className='border-2 flex h-fit items-center font-bold'>
          <div className='w-1/3 text-white border-2 border-[#292333] bg-[#292333] rounded-2xl h-fit w-fit p-3 text-center'>
            <h1>
              Question
            </h1>
            <div>
              1/5
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-white m-3'>
          Your Progress
        </h1>
        <div className="w-100% bg-white rounded-full h-2 m-3">
          <div className="bg-[#d411f2] h-2 rounded-full w-[45%]"></div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-5 text-white p-5'>
        <div className='w-2/3 p-2 border-2 rounded-2xl'>
          <div className='border-2 border-[#b30fa8] font-bold w-fit p-2 rounded-2xl m-3 bg-[#b30fa8]'>
            Question 1
          </div>
          {quiz.map((item, index) => (
           <div key={index}>
              <h1 className="text-3xl font-bold m-1 mb-3">
                {item.question}
              </h1>
              <div className="flex flex-col gap-5">
                {item.options.map((opt, optIndex) => (
                  <label
                    key={optIndex}
                    className="border-2 p-3 rounded-2xl cursor-pointer hover:border-[#d411f2]"
                  >
                    <input
                      type="radio" color='#b30fa8'
                      name={`question-${index}`}
                      value={opt}
                    />
                    <span className="pl-3">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='w-1/3 border-2 rounded-2xl h-fill text-white p-5 flex flex-col gap-6'>
          <h1 className='font-bold text-3xl'>
            Question Palette
          </h1>
          <h1 className=''>
            Track your answers
          </h1>
          <div className=''>
            <span className='border-2 border-[#292333] bg-[#292333] rounded-2xl p-3 text-center '>
              1
            </span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <h1>
              Answered
            </h1>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <h1>
              Not Answered
            </h1>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <h1>
              Check
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
