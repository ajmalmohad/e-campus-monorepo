import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import NotFound from './pages/NotFound'
import AccessChecker from './components/AccessChecker'
import Templated from './components/Templated'
import Placements from './pages/Placements'
import Profile from './pages/Profile'
import ApplyJob from './pages/ApplyJob'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AccessChecker><Templated><StudentDashboard /></Templated></AccessChecker>}/>
        <Route path='/apply-job/:job' element={<AccessChecker><Templated><ApplyJob /></Templated></AccessChecker>}/>
        <Route path='/placements' element={<AccessChecker><Templated><Placements /></Templated></AccessChecker>}/>
        <Route path='/profile' element={<AccessChecker><Templated><Profile /></Templated></AccessChecker>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
