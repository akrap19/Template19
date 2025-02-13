import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Template 19',
	description: 'Easy to use template for next.js'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
