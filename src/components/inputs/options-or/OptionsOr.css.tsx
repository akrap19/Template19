import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

const activeBorder = { borderColor: tokens.colors['primary.300'] }
// const placeholder = { paddingLeft: '2px', color: tokens.colors['neutral.300'], textTransform: 'capitalize' }
const disabled = { borderColor: tokens.colors['neutral.300'], color: tokens.colors['neutral.500'], opacity: '0.75' }

export const addOptionInput = style({
	width: '100%',
	maxWidth: '120px',
	display: 'flex',
	alignItems: 'center',
	outline: 'none',
	border: `1px solid ${tokens.colors['neutral.200']}`,
	fontSize: tokens.typography.size.small,
	lineHeight: tokens.typography.lineHeight.medium,
	borderRadius: tokens.borders.radius.small2,
	padding: `${tokens.spacing[2]} ${tokens.spacing[3]} ${tokens.spacing[2]} ${tokens.spacing[8]}`,
	backgroundColor: tokens.colors['shades.00'],
	color: tokens.colors['neutral.500'],

	':focus': activeBorder,
	':hover': activeBorder,
	':active': activeBorder,
	// '::placeholder': placeholder,
	// ':-ms-input-placeholder': placeholder,
	// '::-webkit-input-placeholder': placeholder,
	':disabled': disabled
})
