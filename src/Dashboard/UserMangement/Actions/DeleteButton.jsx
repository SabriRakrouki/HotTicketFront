import { Button } from '@mui/material'
import React from 'react'
import axios from '../../../api/axios'

function DeleteButton(props) {
    const URL_DELETE = '/user/delete'
    const handleDelete = async () => {
        try {
            await axios.post(`${URL_DELETE}:${props.user.email}`, { 'email': props.user.email })

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <Button onClick={handleDelete} variant='contained' color='error'> Delete</Button>
        </>
    )
}

export default DeleteButton