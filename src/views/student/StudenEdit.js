import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { getStudent, editStudent } from '../../rest/student'

const defaultValues = {
  fullName: '',
  age: 0,
  phoneNumber: 0,
  address: ''
}

function StudentEdit() {
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
    await editStudent(id, formValues)
    navigate('/student/list')
  }

  const getStudentToEdit = async () => {
    const studentToEdit = await getStudent(id);
    console.log(studentToEdit);
    setFormValues(studentToEdit)
  }

  useEffect(() => {
    getStudentToEdit()
  }, [])

  return (
    <section>
      <h1>Formulario de registro de un estudiante:</h1>
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
              id='age-input'
              name='age'
              label='Age'
              type='number'
              value={formValues.age}
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
          <Grid item>
            <TextField
              id='name-input'
              name='address'
              label='Direccion'
              type='text'
              value={formValues.address}
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

export default StudentEdit
