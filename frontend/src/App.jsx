import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import NotFound from './pages/NotFound'
import AccessChecker from './components/AccessChecker'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AccessChecker access="student"><StudentDashboard /></AccessChecker>}/>
        <Route path='/not-found' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
