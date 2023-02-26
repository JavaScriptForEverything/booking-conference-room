import dayjs from 'dayjs'

const DayTest = () => {

	// let now = dayjs().add(7, 'day')
	// let now = dayjs().get('hours')
	// let now = dayjs().startOf('year').format()

		const start = dayjs('2023-02-26T02:00:00.020Z')
		const end = dayjs('2023-02-26T13:00:00.020Z')

		const minuteDifference = dayjs(end).diff(start, 'minute')

		const slot = minuteDifference / 60

		const timeSlots = []

		for (let index = 1; index <= slot; index++) {
			timeSlots.push( start.add(60 * index, 'minute').format('hh:mm:ss A') )
		}

		// console.log(slot)
		// console.log(start.add(60 * 2, 'minute').format('hh:mm:ss A'))
		console.log(timeSlots)




	return (
		<>
			<h2>Dayjs Test</h2>

			<p>
				{/* {dayjs().format()} */}
			</p>

			<p>
				{minuteDifference.toString()}
			</p>

			<div style={{ marginBottom: '4em' }}></div>
		</>
	)
}
export default DayTest
