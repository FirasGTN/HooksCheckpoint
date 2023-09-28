import React from 'react'
import Alert from 'react-bootstrap/Alert';

function AlertSec() {
  return (
    <div>
        {['success'].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  )
}

export default AlertSec