import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstChallenge from './pages/first-challenge'
import Welcome from './sections/Welcome'
import ThirdChallenge from './pages/third-challenge'
import FourthChallenge from './pages/fourth-challenge'
import FifthChallenge from './pages/fifth-challenge'
import SixthChallenge from './pages/sixth-challenge'
import SeventhChallenge from './pages/seventh-challenge'
import SecondChallenge from './pages/second-challenge'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/first-challenge" element={<FirstChallenge />} />
        <Route path="/second-challenge" element={<SecondChallenge />} />
        <Route path="/third-challenge" element={<ThirdChallenge />} />
        <Route path="/fourth-challenge" element={<FourthChallenge />} />
        <Route path="/fifth-challenge" element={<FifthChallenge />} />
        <Route path="/sixth-challenge" element={<SixthChallenge/>} />
        <Route path="/seventh-challenge" element={<SeventhChallenge />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
