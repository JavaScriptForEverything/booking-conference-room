import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header'

type Props = {
	children: React.ReactNode
}
const Layout = ({ children }: Props) => {

	return (
		<>
			<CssBaseline />
			<Header />
			{children}
		</>
	)
}
export default Layout
