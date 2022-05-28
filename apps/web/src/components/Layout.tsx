import React, { FC } from 'react'
import Navbar from './Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#5e35b1',
		},
		secondary: {
			main: '#f50057',
		},
	},
})

interface Props {
	children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Navbar />
			<main>{children}</main>
		</ThemeProvider>
	)
}

export default Layout
