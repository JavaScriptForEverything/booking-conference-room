import { useState } from 'react'

import Box from '@mui/system/Box'
import Chip from '@mui/material/Chip'

const TimeSlot = () => {
	const [ checked, setChecked ] = useState(0)

	const handleClick = (id: number) => () => {
		setChecked(id)
	}

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
