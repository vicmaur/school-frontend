import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { registerTeacher } from '../../rest/teacher'

const defaultValues = {
  fullName: '',
  profession: '',
  academicDegree: '',
  phoneNumber: 0
}

function TeacherRegister() {
  const [formValues, setFormValues] = useState(defaultValues)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await registerTeacher(formValues)
    navigate('/teacher/list')
  }

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

export default TeacherRegister
