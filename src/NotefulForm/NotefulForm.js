import React from 'react'
import './Clipt itForm.css'

export default function Clip itForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Clip it-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
