import { useField } from 'formik'
import React from 'react'

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label>{label}</label>
      <select {...field} {...props} />
    </div>
  )
}

export { Select }
