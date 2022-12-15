import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { getTeacher, editTeacher } from '../../rest/teacher'

const defaultValues = {
  fullName: '',
  profession: '',
  academicDegree: '',
  phoneNumber: 0
}

function TeacherEdit() {
  const [formValues, setFormValues] = useState(defaultValues)

  const navigate = useNavigate()
  const { id } = useParams()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formValues)
    await editTeacher(id, formValues)
    navigate('/teacher/list')
  }

  const getTeacherToEdit = async () => {
    const teacherToEdit = await getTeacher(id);
    setFormValues(teacherToEdit)
  }

  useEffect(() => {
    getTeacherToEdit()
  }, [])

  return (
    <section>
      <h1>Formulario de registro de un profesor:</h1>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems='center' justify='center' direction='column' spacing={2}>
          <Grid item>
            <TextField
              id='name-input'
              name='fullName'
              label='Nombre y apellido'
              type='text'
              value={formValues.fullName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id='profession-input'
              name='profession'
              label='Profesion'
              type='text'
              value={formValues.profession}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id='academicDegree-input'
              name='academicDegree'
              label='Grado academico'
              type='text'
              value={formValues.academicDegree}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id='phoneNumber-input'
              name='phoneNumber'
              label='Numero de telefono'
              type='number'
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Button variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </Grid>
      </form>
    </section>
  )
}

export default TeacherEdit
