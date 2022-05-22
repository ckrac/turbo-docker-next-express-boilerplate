import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Layout from '../components/Layout'

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

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
