import React from 'react'

export default function Button({ style, text }) { 
  return (
    <button className={`${style}`}>
      {text}
    </button>
  )
}


