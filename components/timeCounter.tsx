import { useEffect, useState } from 'react'

import Typography from '@mui/material/Typography'


const TimeCounter = () => {
	const [ time, setTime ] = useState('00:00:00')

	const currentTime = new Date(Date.now()).toLocaleTimeString()

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(currentTime)
		}, 1000);

		return () => clearInterval(interval)
	}, [currentTime])


	return (
		<>
			<Typography variant='h5' sx={{ fontWeight: 'bold' }}>{time}</Typography>
		</>
	)
}
export default TimeCounter
