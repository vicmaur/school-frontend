import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import StudentList from './views/student/StudentList'
import StudentRegister from './views/student/StudentRegister'
import StudentEdit from './views/student/StudenEdit'
import TeacherList from './views/teacher/TeacherList'
import TeacherRegister from './views/teacher/TeacherRegister'
import TeacherEdit from './views/teacher/TeacherEdit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/student/list' element={<StudentList />} />
        <Route path='/student/register' element={<StudentRegister />} />
        <Route path='/student/edit/:id' element={<StudentEdit />} />
        <Route path='/teacher/list' element={<TeacherList />} />
        <Route path='/teacher/register' element={<TeacherRegister />} />
        <Route path='/teacher/edit/:id' element={<TeacherEdit />} />
      </Routes>
    </Router>
  )
}

export default App
