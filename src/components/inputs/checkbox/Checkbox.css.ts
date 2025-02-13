import { style } from '@vanilla-extract/css'

import { tokens } from 'style/theme.css'

export const checkboxWrapper = style({
	display: 'inline-flex',
	alignItems: 'center',
	cursor: 'pointer',
	gap: tokens.spacing[2]
})

export const hiddenCheckbox = style({
	border: 0,
	height: '1px',
	left: 0,
	opacity: 0,
	position: 'absolute',
	top: 0,
	width: '1px'
})

export const checkboxField = style({
	position: 'relative',
	cursor: 'pointer'
})

export const checkboxDecorator = style({
	borderColor: tokens.colors['neutral.200'],
	borderWidth: '1px',
	borderRadius: '2px',
	borderStyle: 'solid',
	width: '1rem',
	height: '1rem',
	backgroundColor: 'currentcolor',

	// When Radio selected by "Tab" key
	selectors: {
		[`${hiddenCheckbox}:focus-visible + &`]: {
			outline: `1px solid ${tokens.colors['primary.600']}`
		}
	}
})

export const checked = style({
	position: 'absolute',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
})
