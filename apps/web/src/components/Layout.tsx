import React, { FC, ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
	children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

export default Layout
