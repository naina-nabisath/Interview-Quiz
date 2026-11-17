import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { default as Quiz } from './Components/Quiz.jsx';

function App() {
  return (
    <div className='bg-[#10091b] min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App