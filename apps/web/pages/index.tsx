import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'

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

export default function Docs() {
	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<h1>Docs</h1>
				<Button variant='contained'>Hello World!</Button>
			</div>
		</ThemeProvider>
	)
}
