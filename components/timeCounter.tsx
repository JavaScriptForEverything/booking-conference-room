import { useEffect, useState } from 'react'

import Typography from '@mui/material/Typography'


const TimeCounter = () => {
	const [ time, setTime ] = useState('')

	const currentTime = new Date(Date.now()).toLocaleTimeString()

	useEffect(() => {
		setTimeout(() => {
			setTime(currentTime)
		}, 1000);
	}, [currentTime])


	return (
		<>
			<Typography variant='h5' sx={{ fontWeight: 'bold' }}>{time}</Typography>
		</>
	)
}
export default TimeCounter
