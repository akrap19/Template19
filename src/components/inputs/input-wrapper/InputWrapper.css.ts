/* eslint-disable sonarjs/no-duplicate-string */
import { style } from '@vanilla-extract/css'

import { tokens } from 'style/theme.css'

const activeBorder = { borderColor: tokens.colors['primary.600'] }
const placeholder = { color: tokens.colors['neutral.300'] }
const disabled = { borderColor: tokens.colors['neutral.300'], color: tokens.colors['neutral.500'], opacity: '0.75' }
const hasError = { borderColor: tokens.colors['destructive.500'], color: tokens.colors['destructive.500'] }

export const inputWrapper = style({
	position: 'relative',
	color: tokens.colors['shades.100']
})

export const input = style({
	minHeight: '2.5rem',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	outline: 'none',
	border: `1px solid ${tokens.colors['neutral.200']}`,
	fontSize: tokens.typography.size.small,
	lineHeight: tokens.typography.lineHeight.medium,
	borderRadius: tokens.borders.radius.small,
	padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
	paddingRight: tokens.spacing[3],
	backgroundColor: tokens.colors['shades.00'],
	color: 'inherit',

	':focus': activeBorder,
	':hover': activeBorder,
	':active': activeBorder,
	'::placeholder': placeholder,
	':-ms-input-placeholder': placeholder,
	'::-webkit-input-placeholder': placeholder,
	':disabled': disabled,

	selectors: {
		'&[type="date"]::-webkit-calendar-picker-indicator': {
			display: 'none',
			WebkitAppearance: 'none'
		}
	}
})

export const inputHasError = style({
	...hasError,
	':hover': hasError,
	':focus': hasError,
	':active': hasError
})

export const iconSlot = style({
	position: 'absolute',
	top: 0,
	bottom: 0,
	margin: 'auto 0',
	display: 'flex',
	alignItems: 'center'
})

export const startIconSpacing = style({ paddingLeft: tokens.spacing[12] })
export const predifinedTextSpacing = style({ paddingLeft: tokens.spacing[24] })
export const endIconSpacing = style({ paddingRight: tokens.spacing[9] })
