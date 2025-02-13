import { style } from '@vanilla-extract/css'

import { tokens } from '../../../style/theme.css'

export const tabsWrapper = style({
	width: '100%',
	display: 'flex', // Use Flexbox for layout
	justifyContent: 'space-between', // Distribute tabs evenly
	alignItems: 'center'
})

export const tab = style({
	flex: '1',
	paddingLeft: tokens.spacing[4],
	paddingRight: tokens.spacing[4],
	paddingBottom: tokens.spacing[4],
	fontWeight: tokens.typography.weight.regular,
	fontSize: tokens.typography.size.medium,
	lineHeight: tokens.typography.lineHeight.large,
	color: tokens.colors['neutral.500'],
	border: 'none',
	background: 'transparent',
	cursor: 'pointer',
	position: 'relative'
})

export const activeTab = style({
	color: tokens.colors['shades.100'],
	fontWeight: tokens.typography.weight.semibold,

	'::after': {
		content: ' ',
		display: 'block',
		width: '100%',
		height: '3px',
		background: tokens.colors['primary.500'],
		position: 'absolute',
		left: 0,
		bottom: '-1px'
	}
})
