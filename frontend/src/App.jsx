import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import OrganizationDashboard from './pages/OrganizationDashboard'
import NotFound from './pages/NotFound'
import AccessChecker from './components/AccessChecker'
import { config } from '../settings'

function App() {

  return (
    <>
      <Routes>
        {
          config.access == "student" ?
            <Route path='/' element={<AccessChecker access="student"><StudentDashboard /></AccessChecker>}/> :
            <Route path='/' element={<AccessChecker access="organization"><OrganizationDashboard /></AccessChecker>}/> 
        }
        <Route path='/not-found' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
