import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Prototype1 from './prototypes/prototype-1/Prototype1'
import Prototype2 from './prototypes/prototype-2/Prototype2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prototype-1/*" element={<Prototype1 />} />
      <Route path="/prototype-2/*" element={<Prototype2 />} />
    </Routes>
  )
}

export default App
