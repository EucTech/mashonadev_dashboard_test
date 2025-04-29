import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div>
      <ClipLoader
        size={80}
        color="#E89578"
        loading={true}
      />
    </div>
  )
}

export default Spinner
