import React from 'react'
import './ClipitForm.css'

export default function ClipitForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Clipitform', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
