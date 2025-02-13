import { style, createVar, globalStyle } from '@vanilla-extract/css'

// Variables
const grayRgb = createVar()
const grayAlpha200 = createVar()
const grayAlpha100 = createVar()
const buttonPrimaryHover = createVar()
const buttonSecondaryHover = createVar()

export const page = style({
	vars: {
		[grayRgb]: '0, 0, 0',
		[grayAlpha200]: `rgba(${grayRgb}, 0.08)`,
		[grayAlpha100]: `rgba(${grayRgb}, 0.05)`,
		[buttonPrimaryHover]: '#383838',
		[buttonSecondaryHover]: '#f2f2f2'
	},
	display: 'grid',
	gridTemplateRows: '20px 1fr 20px',
	alignItems: 'center',
	justifyItems: 'center',
	minHeight: '100svh',
	padding: '80px',
	gap: '64px',
	fontFamily: 'var(--font-geist-sans)'
})

// Dark mode styles
globalStyle('@media (prefers-color-scheme: dark)', {
	[`.${page}`]: {
		vars: {
			[grayRgb]: '255, 255, 255',
			[grayAlpha200]: `rgba(${grayRgb}, 0.145)`,
			[grayAlpha100]: `rgba(${grayRgb}, 0.06)`,
			[buttonPrimaryHover]: '#ccc',
			[buttonSecondaryHover]: '#1a1a1a'
		}
	}
})

export const main = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '32px',
	gridRowStart: 2
})
