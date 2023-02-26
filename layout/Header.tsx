import Stack from '@mui/system/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import HomeIcon from '@mui/icons-material/Home'

const navItems = [
	{ label: 'Home', path: '/' },
	{ label: 'Developments', path: '/developments' },
	{ label: 'Conference', path: '/conference' },
	{ label: 'Blog', path: '/blog' },
	{ label: 'EN', path: '/en' },
]

const Header = () => {

	return (
		<Stack direction='row'>
			<IconButton>
				<HomeIcon color='primary' />
			</IconButton>
			<Button sx={{ marginRight: 'auto' }}>Saarte Investeering</Button>			

			{navItems.map(({ label, path }) => (
				<Button 
					key={label} 
					sx={{ textTransform: 'none', display: { xs: 'none', sm: 'block' } }} 
				>{label}</Button>			
			))}
		</Stack>
	)
}
export default Header
