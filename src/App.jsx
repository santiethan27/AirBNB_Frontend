import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes> */}
    </>
  )
}

export default App
