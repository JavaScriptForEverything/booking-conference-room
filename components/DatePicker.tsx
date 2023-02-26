import { useState } from 'react'

import dayjs, { type Dayjs } from 'dayjs'
import type { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

import TextField from '@mui/material/TextField'


const DatePickerComponent = () => {
	const [ dateValue, setDateValue ] = useState<Dayjs | null>(null)

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>

			<StaticDatePicker 
				renderInput={(params) => <TextField {...params} />}
				value={dateValue}
				onChange={(newValue) => setDateValue(newValue)}

				// views={['month']}
				// label='Pick Date By DatePicker'
				// minDate={dayjs('2022-02-22')}
				// maxDate={dayjs('2023-03-22')}

        displayStaticWrapperAs="desktop"
				components={{
					ActionBar: (props: PickersActionBarProps) => <></> 			// Customize bottom component
				}}

				// componentsProps={{
				// 	actionBar: {
				// 		actions: ['today']
				// 	}
				// }}
			/>

		</LocalizationProvider>
	)
}
export default DatePickerComponent

