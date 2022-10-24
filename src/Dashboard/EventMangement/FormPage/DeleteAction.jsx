import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'

function DeleteAction(props) {
  const URL_DELETE_EVENT = "/event/deleteEvent"
  const handleDelete = async () => {
    try {
      await axios.post(`${URL_DELETE_EVENT}:${props.event.nameEvent}`, { "nameEvent": props.event.nameEvent })
      props.handleChangeData(true)

    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>


    </>
  )
}

export default DeleteAction