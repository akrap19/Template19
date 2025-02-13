import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

export const fileInput = style({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	opacity: 0,
	cursor: 'pointer'
})

export const imageWrapper = style({
	position: 'relative',
	width: '120px',
	height: '120px',
	borderRadius: tokens.borders.radius.full,
	overflow: 'hidden',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: '2px'
})

export const profileImage = style({
	borderRadius: tokens.borders.radius.full,
	objectFit: 'cover'
})
