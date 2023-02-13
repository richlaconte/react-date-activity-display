import React, { FC } from 'react'
import { Box } from '@mui/material'
import Day from './Day'

type WeekTypes = {
  week: {
    number: number | undefined
    day: string | undefined
    count: number | undefined
  }[]
}

const Week: FC<WeekTypes> = ({ week }) => {
  console.log('week')
  console.log(week)

  return (
    <Box display='flex'>
      {week?.map((day, i) => (
        <Day key={i} day={day} />
      ))}
    </Box>
  )
}

export default Week
