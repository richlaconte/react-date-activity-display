export type DisplayMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type tileColors =
  | {
      undefined?: string | undefined
      empty?: string | undefined
      lowGoal?: string | undefined
      midGoal?: string | undefined
      highGoal?: string | undefined
    }
  | undefined


export type DayType = {
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
 
export const colors = {
  undefined: '#D3D3D3',
  empty: '#899499',
  lowGoal: '#ccffcc',
  midGoal: '#66ff66',
  highGoal: '#00e500',
}  
