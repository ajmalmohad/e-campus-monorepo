import './App.css'
import { Route, Routes } from 'react-router-dom'
import OrganizationDashboard from './pages/OrganizationDashboard'
import NotFound from './pages/NotFound'
import AccessChecker from './components/AccessChecker'
import Templated from './components/Templated'
import Profile from './pages/Profile'
import CreateForm from './pages/CreateForm'
import ViewApplications from './pages/ViewApplications'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AccessChecker><Templated><OrganizationDashboard /></Templated></AccessChecker>}/>
        <Route path='/create-job' element={<AccessChecker><Templated><CreateForm /></Templated></AccessChecker>}/>
        <Route path='/profile' element={<AccessChecker><Templated><Profile /></Templated></AccessChecker>}/>
        <Route path='/view-applications/:jobId' element={<AccessChecker><Templated><ViewApplications /></Templated></AccessChecker>}/>
        <Route path='/not-found' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
