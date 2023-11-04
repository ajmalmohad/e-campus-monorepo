import './App.css'
import { Route, Routes } from 'react-router-dom'
import OrganizationDashboard from './pages/OrganizationDashboard'
import NotFound from './pages/NotFound'
import AccessChecker from './components/AccessChecker'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AccessChecker><OrganizationDashboard /></AccessChecker>}/> :
        <Route path='/not-found' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
