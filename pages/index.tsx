import { useState } from 'react'

import Layout from '@/layout'
import StaticDatePicker from '@/components/DatePicker'
import TimeCounter from '@/components/timeCounter'
import TimeSlot from '@/components/timeSlot'
import DayTest from '@/components/dayTest'

import Container from '@mui/system/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Stack from '@mui/system/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { timeSlotData } from '@/data/simeSlot'
import dayjs, { type Dayjs } from 'dayjs'


const Home = () => {
	const [ duration, setDuration ] = useState(0)
	const [ dateValue, setDateValue ] = useState<Dayjs | null>(null)

	const handleMeetingDuration = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		// timeSlotData.schedule.forEach(({ start, end }) => {
		// 	const startDate = dayjs(start)
		// 	const endDate = dayjs(end)

		// 	const minuteDifference = dayjs(endDate).diff(startDate, 'minute')

		// 	const slot = minuteDifference / duration

		// 	const timeSlots = []

		// 	for (let index = 1; index <= slot; index++) {
		// 		timeSlots.push( startDate.add(duration * index, 'minute').format('hh:mm:ss A') )
		// 	}

		// 	console.log(timeSlots)
		// })

	}

	return (
		<Layout>
			<Container maxWidth='md'>

			<Paper sx={{ my: 2, p: 2 }}>

				<Stack 
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={1}
					sx={{ mb: 3 }}
				>
					<Typography variant='h6' sx={{ fontWeight: 'bold' }}>Time Now: </Typography>
					<TimeCounter />
				</Stack>

				<Stack 
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={2}
					sx={{ mb: 3 }}
				>
					<Typography>Enter Meeting Duration(min)</Typography>
					<form onSubmit={handleMeetingDuration}>
						<TextField 
							variant='outlined'
							size='small'
							sx={{ width: 60 }}	

							value={duration}
							onChange={(evt) => setDuration(+evt.target.value)}
						/>
					</form>
				</Stack>


				{ !!duration && <Box>
					<Typography variant='caption' sx={{ fontStyle: 'italic' }}>Select Date</Typography>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<Box sx={(theme) => ({
								border: `1px solid ${theme.palette.divider}`,
								borderRadius: '10px',
								p: 1
							})}>
								<StaticDatePicker 
									dateValue={dateValue}
									setDateValue={setDateValue}
								/>
							</Box>
						</Grid>

						<Grid item xs={12} md={6} >
						<Typography variant='caption' component='p' sx={{ 
								mt: 3, mb: 1,
								fontStyle: 'italic' 
							}}>Select Time Slot</Typography>

							<TimeSlot 
								durationInput={+duration}
							/>
						</Grid>
					</Grid>
				</Box>}

				<Grid container sx={{ mt: 4 }}>
					<Grid item xs={12}>
						<form>
							<TextField 
								label='Aditional Details'
								variant='outlined'
								fullWidth

								multiline
								minRows={4}
							/>

							<Box sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								mt: 4
							}}>
								<Button 
									variant='contained' 
									disabled={!dayjs(dateValue).isValid()} 
									sx={{ textTransform: 'capitalize' }}
								>Book Now</Button>
							</Box>
						</form>
					</Grid>
				</Grid>
			</Paper>

			</Container>


			{/* <DayTest /> */}
		</Layout>
	)
}
export default Home
