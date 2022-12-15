import axios from 'axios'

const getTeachers = async () => {
  try {
    const teachers = await axios.get('http://localhost:3000/teachers')
    return teachers.data
  } catch (error) {
    return error
  }
}

const getTeacher = async (id) => {
  try {
    const teacher = await axios.get(`http://localhost:3000/teachers/${id}`)
    return teacher.data
  } catch (error) {
    return error
  }
}

const registerTeacher = async (newTeacher) => {
  try {
    const teacher = await axios.post('http://localhost:3000/teachers', newTeacher)
    return teacher.data
  } catch (error) {
    return error
  }
}

const editTeacher = async (teacherId, modifiedTeacher) => {
  try {
    const teacher = await axios.put(`http://localhost:3000/teachers/${teacherId}`, modifiedTeacher)
    return teacher.data
  } catch (error) {
    return error
  }
}

const deleteTeacher = async (teacherId) => {
  try {
    await axios.delete(`http://localhost:3000/teachers/${teacherId}`)
  } catch (error) {
    return error
  }
}

export { getTeachers, getTeacher, registerTeacher, editTeacher, deleteTeacher }
