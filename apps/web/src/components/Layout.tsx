import React, { FC } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

interface Props {
	children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<ThemeProvider theme={createTheme()}>
			<main>{children}</main>
		</ThemeProvider>
	)
}

export default Layout
