import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div>
        <Backdrop open={true}>
            <CircularProgress />
        </Backdrop>
    </div>
  )
}

export default Loading