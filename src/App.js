import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import StudentList from './views/student/StudentList'
import StudentRegister from './views/student/StudentRegister'
import StudentEdit from './views/student/StudenEdit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/student/list' element={<StudentList />} />
        <Route path='/student/register' element={<StudentRegister />} />
        <Route path='/student/edit/:id' element={<StudentEdit />} />
      </Routes>
    </Router>
  )
}

export default App
