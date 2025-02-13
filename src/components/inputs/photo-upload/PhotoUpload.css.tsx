import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

export const photoInput = style({
	display: 'none'
})

export const photoUploadLabel = style({
	height: '140px',
	width: '100%',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
	border: tokens.borders.border.thinDashed,
	borderColor: tokens.borders.color['neutral.200'],
	borderRadius: tokens.borders.radius.small,
	userSelect: 'none'
})
