import React, { FC } from 'react'
import { Box, Tooltip } from '@mui/material'
import { tileColors } from './types'
import { months } from './consts'

type DayType = {
  day: {
    number: number | undefined
    day: string | undefined
    count: number | undefined
  }
  tooltip?: {
    placement?:
      | 'top'
      | 'bottom-end'
      | 'bottom-start'
      | 'bottom'
      | 'left-end'
      | 'left-start'
      | 'left'
      | 'right-end'
      | 'right-start'
      | 'right'
      | 'top-end'
      | 'top-start'
      | undefined
    description?: string | undefined
    monthDisplay?: 'short' | 'long' | undefined
  }
  tileColors?: tileColors
}

const colors = {
  undefined: '#D3D3D3',
  empty: '#899499',
  lowGoal: '#ccffcc',
  midGoal: '#66ff66',
  highGoal: '#00e500',
}

const getColor = (
  count: number | undefined,
  number: number | undefined,
  midGoal: number,
  highGoal: number,
  tileColors: tileColors,
) => {
  if (number === undefined) {
    return tileColors?.undefined || colors.undefined
  }
  if (count === 0 || count === undefined) {
    return tileColors?.empty || colors.empty
  }
  if (count >= highGoal) {
    return tileColors?.highGoal || colors.highGoal
  }
  if (count >= midGoal) {
    return tileColors?.midGoal || colors.midGoal
  }
  return tileColors?.lowGoal || colors.lowGoal
}

const Day: FC<DayType> = ({
  day,
  tooltip = {
    placement: 'top',
    description: 'Event',
    monthDisplay: 'short',
  },
  tileColors,
}) => {
  const midGoal = 5
  const highGoal = 8

  const color = getColor(day.count, day.number, midGoal, highGoal, tileColors)
  const now = new Date()
  const month = now.getMonth()
  const plural = day?.count === undefined || day?.count !== 1 ? 's' : ''
  const description = `${day.count} ${tooltip?.description}${plural} on ${
    months[tooltip?.monthDisplay || 'short'][month]
  } ${day?.number}`

  if (day?.number === undefined)
    return (
      <Box
        width='32px'
        height='32px'
        bgcolor={color}
        border={`1px solid ${color}`}
        borderRadius='5px'
        margin='2px'
      ></Box>
    )

  return (
    <Tooltip title={description} placement={tooltip?.placement} arrow followCursor>
      <Box
        width='32px'
        height='32px'
        bgcolor={color}
        border={`1px solid ${color}`}
        borderRadius='5px'
        margin='2px'
      ></Box>
    </Tooltip>
  )
}

export default Day
