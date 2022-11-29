import axios from 'axios'

const getStudents = async () => {
  try {
    const students = await axios.get('http://localhost:3000/students')
    return students.data
  } catch (error) {
    return error
  }
}

const getStudent = async (id) => {
  try {
    const student = await axios.get(`http://localhost:3000/students/${id}`)
    return student.data
  } catch (error) {
    return error
  }
}

const registerStudent = async (newStudent) => {
  try {
    const student = await axios.post('http://localhost:3000/students', newStudent)
    return student.data
  } catch (error) {
    return error
  }
}

const editStudent = async (studentId, modifiedStudent) => {
  try {
    const student = await axios.put(`http://localhost:3000/students/${studentId}`, modifiedStudent)
    return student.data
  } catch (error) {
    return error
  }
}

const deleteStudent = async (studentId) => {
  try {
    await axios.delete(`http://localhost:3000/students/${studentId}`)
  } catch (error) {
    return error
  }
}

export { getStudents, getStudent, registerStudent, editStudent, deleteStudent }
