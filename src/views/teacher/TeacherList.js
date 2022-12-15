import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTeachers, deleteTeacher } from '../../rest/teacher'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { Delete } from '@mui/icons-material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import './TeacherList.css'

function TeacherList() {
  const [students, setTeachers] = useState([])
  const [teacherIdToDelete, setTeacherIdToDelete] = useState(null)
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const getTeachersToList = async () => {
    const allStudents = await getTeachers()
    setTeachers(allStudents)
  }

  const deleteOneTeacher = async () => {
    await deleteTeacher(teacherIdToDelete)
    window.location.reload(false)
    handleClose()
  }

  const handleClickOpen = (studentId) => {
    setTeacherIdToDelete(studentId)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setTeacherIdToDelete(null)
  }

  useEffect(() => {
    getTeachersToList()
  }, [])

  return (
    <section>
      <h1>Profesores</h1>
      <div>
        <Button variant='contained' startIcon={<AddIcon />} onClick={() => navigate('/teacher/register')}>
          Agregar profesor
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre completo</TableCell>
              <TableCell align='right'>Profesion</TableCell>
              <TableCell align='right'>Grado academico</TableCell>
              <TableCell align='right'>Numero de telefono</TableCell>
              <TableCell align='right'>Editar</TableCell>
              <TableCell align='right'>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow key={`${row.name}-${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.fullName}
                </TableCell>
                <TableCell align='right'>{row.profession}</TableCell>
                <TableCell align='right'>{row.academicDegree}</TableCell>
                <TableCell align='right'>{row.phoneNumber}</TableCell>
                <TableCell align='right'>
                  <div
                    onClick={() => {
                      navigate(`/teacher/edit/${row._id}`)
                    }}
                  >
                    <EditIcon className='link-option' />
                  </div>
                </TableCell>
                <TableCell align='right'>
                  <div onClick={() => handleClickOpen(row._id)}>
                    <Delete className='link-option' />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Eliminar profeesor'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Esta seguro de eliminar este profesor?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={deleteOneTeacher} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  )
}

export default TeacherList
