import React from 'react'
import './CliptitForm.css'

export default function ClipitForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Clipit-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
