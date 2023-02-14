# React Date Activity Display

## Usage
Install:
`npm i react-date-activity-display`

Use:
```
import { ReactDateActivityDisplay } from 'react-date-activity-display'

const today = new Date()
const tenth = new Date().setDate(10)
const fifteenth = new Date().setDate(15)
const twentieth = new Date().setDate(20)

export const test = [
  new Date(today),
  new Date(tenth),
  new Date(fifteenth),
  new Date(twentieth)
]

const MyComponent = () => {
  return (
    <ReactDateAcvitityDisplay dateValues={test} />
  ) 
}
```

## Contributing
### View the example app:
- `git clone https://github.com/richlaconte/react-date-activity-display.git`
- `cd react-date-activity-display`
- `cd example`
- `npm i`
- `npm start`

### Changes should be made to the files in `/src/components`
