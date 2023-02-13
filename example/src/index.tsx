import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactDateActivityDisplay } from 'react-date-activity-display'

const today = new Date()
const tenth = new Date().setDate(10)
const fifteenth = new Date().setDate(15)
const twentieth = new Date().setDate(20)

export const test = [
  new Date(today),
  new Date(tenth),
  new Date(tenth),
  new Date(tenth),
  new Date(fifteenth),
  new Date(fifteenth),
  new Date(fifteenth),
  new Date(fifteenth),
  new Date(fifteenth),
  new Date(twentieth),
  new Date(twentieth),
  new Date(twentieth),
  new Date(twentieth),
  new Date(twentieth),
  new Date(twentieth),
  new Date(twentieth),
  new Date(twentieth),
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Date activity display</h2>
      <ReactDateActivityDisplay dateValues={test} />
    </div>
  </React.StrictMode>,
)
