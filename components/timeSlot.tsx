import { useState } from 'react'
import { timeSlotData } from '@/data/simeSlot'

import Box from '@mui/system/Box'
import Chip from '@mui/material/Chip'
import dayjs from 'dayjs'


type Props = {
	durationInput: number
}

const TimeSlot = ({ durationInput }: Props ) => {
	const [ checked, setChecked ] = useState(0)

	const handleClick = (id: number) => () => {
		setChecked(id)
	}

	// const slotItems = timeSlotData.schedule.map(({ start, end }) => {
	// 	const hourDifference = dayjs(end).diff(start, 'hour')

	// 	const slicer = hourDifference / durationInput 	// => 10

	// 	// const timeSlots = []

	// 	// for(let index=1; index <= slicer; index++) {
	// 	// 	const nextValue = dayjs(start).add(slicer * durationInput, 'minute')
	// 	// 	timeSlots.push(nextValue)
	// 	// }

	// 	// return timeSlots

	// 	return slicer
	// })

	// console.log(slotItems)

	return (
		<Box sx={{
			display: 'flex',
			flexWrap: 'wrap',
			gap: 1
		}} >
			{[1,2,3, 4, 5, 6, 7, 8, 9].map(item => (
				<Chip key={item}
					label='10:10 PM' 
					variant={ item === checked ? 'filled' : 'outlined' }
					color={ item === checked ? 'primary' : 'default' }
					clickable
					onClick={handleClick(item)}

					disabled={item === 4}
				/>
			))}

		</Box>
	)
}
export default TimeSlot
