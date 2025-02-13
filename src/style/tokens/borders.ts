import { colors } from './colors'

export const borders = {
	radius: {
		none: '0',
		small: '0.5rem',
		small2: '0.75rem',
		medium: '1rem',
		large: '1.5rem',
		xlarge: '2rem',
		xxlarge: '2.5rem',
		full: '100%'
	},
	border: {
		xthin: '0.5px solid currentcolor',
		thin: '1px solid currentcolor',
		thinDashed: '1px dashed currentcolor',
		medium: '1.5px solid currentcolor',
		thick: '2px solid currentcolor',
		xthick: '4px solid currentcolor'
	},
	// Use only specific colors for borders so we don't include all of the available colors to the build
	color: {
		'shades.00': colors['shades.00'],
		'shades.100': colors['shades.100'],
		'neutral.50': colors['neutral.50'],
		'neutral.100': colors['neutral.100'],
		'neutral.200': colors['neutral.200'],
		'neutral.400': colors['neutral.400'],
		'primary.100': colors['primary.100'],
		'primary.200': colors['primary.200'],
		'primary.300': colors['primary.300']
	}
}
