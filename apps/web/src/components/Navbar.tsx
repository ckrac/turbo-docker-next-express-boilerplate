import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AdbIcon from '@mui/icons-material/Adb'

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
