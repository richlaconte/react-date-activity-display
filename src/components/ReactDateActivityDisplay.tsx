import React, { FC } from 'react'
import { Box } from '@mui/material'
import { days } from './consts'
import { DisplayMonth } from './types'

import Week from './Week'

type AppTypes = {
  dateValues?: Date[] | undefined
  displayYear?: number | undefined
  displayMonth?: DisplayMonth | undefined
}

type Day = {
  number: number | undefined
  day: string | undefined
  count: number | undefined
}

type Week = Day[]

const createWeeks = (
  weeksInMonth: number,
  daysOffset: number,
  daysInMonth: number,
  dateValues?: Date[] | undefined,
) => {
  const weeks: Week[] = []
  for (let i = 0; i < weeksInMonth; i++) {
    const week: Week = []
    for (let x = 0; x < 7; x++) {
      const dayNumber = x + 1 + i * 7 - daysOffset
      if (dayNumber <= 0 || dayNumber > daysInMonth) {
        week.push({
          number: undefined,
          day: undefined,
          count: undefined,
        })
      } else {
        week.push({
          number: dayNumber,
          day: days[x],
          count: dateValues?.filter((dateValue) => {
            const newDateValue = new Date(dateValue)
            const day = newDateValue.getDate()
            return day === dayNumber
          }).length,
        })
      }
    }
    weeks.push(week)
  }
  return weeks
}

const DateStatusDisplay: FC<AppTypes> = ({
  dateValues,
  displayYear = new Date().getFullYear(),
  displayMonth = new Date().getMonth(),
}) => {
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate()
  const dayOffset = new Date(displayYear, displayMonth, 1).getDay()
  const weeksInMonth = Math.ceil((daysInMonth + dayOffset) / 7)

  const weeks: Week[] = createWeeks(weeksInMonth, dayOffset, daysInMonth, dateValues)

  return (
    <Box className='DateStatusDisplay'>
      {weeks.map((week, i) => (
        <Week key={i} week={week} />
      ))}
    </Box>
  )
}

export default DateStatusDisplay
