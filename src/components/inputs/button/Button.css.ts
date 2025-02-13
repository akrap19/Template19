import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { tokens } from 'style/theme.css'

export const button = recipe({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		border: 'none',
		borderRadius: tokens.borders.radius.xlarge,
		textDecoration: 'none',
		gap: tokens.spacing[2],

		':disabled': {
			cursor: 'default',
			opacity: '0.3'
		}
	},
	variants: {
		size: {
			auto: {
				height: 'auto',
				width: 'auto'
			},
			small: {
				height: '2.125rem',
				paddingLeft: tokens.spacing[6],
				paddingRight: tokens.spacing[6],
				fontSize: tokens.typography.size.small
			},
			large: {
				height: '3.5rem',
				padding: tokens.spacing[4],
				fontSize: tokens.typography.size.small,
				fontWeight: tokens.typography.weight.semibold
			}
		},
		variant: {
			primary: {
				backgroundColor: tokens.colors['primary.600'],
				color: '#FFFFFF',
				border: tokens.borders.border.thin,
				borderColor: tokens.borders.color['primary.100'],
				':hover': { opacity: '0.8' },
				':disabled': { opacity: '0.3' }
			},
			secondary: {
				backgroundColor: tokens.borders.color['primary.100'],
				color: tokens.colors['primary.600'],
				border: tokens.borders.border.thin,
				borderColor: tokens.borders.color['primary.100'],
				':hover': { opacity: '0.8' },
				':disabled': { opacity: '0.3' }
			},
			tertiair: {
				backgroundColor: tokens.colors['shades.00'],
				color: tokens.colors['neutral.900'],
				border: tokens.borders.border.thin,
				borderColor: tokens.borders.color['primary.100'],
				':hover': { opacity: '0.8' },
				':disabled': { opacity: '0.3' }
			},
			ghost: {
				backgroundColor: '#FFFFFF',
				color: '#5135FF',
				':hover': { opacity: '0.8' },
				':disabled': { opacity: '0.3' }
			},
			link: {
				backgroundColor: '#FFFFFF',
				padding: 'unset',
				textDecoration: 'underline',
				color: tokens.colors['primary.600'],
				':hover': { opacity: '0.8' },
				':disabled': { opacity: '0.3' }
			},
			adaptive: {
				backgroundColor: 'transparent',
				padding: 'unset'
			},
			destructive: {
				backgroundColor: '#FE5F55',
				color: '#FCFCFC',
				':hover': { backgroundColor: '#FF8B84' }
			},
			success: {
				backgroundColor: '#198754',
				color: '#FCFCFC',
				':hover': { backgroundColor: '#20AC6B' }
			}
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'large'
	}
})

export type ButtonVariants = RecipeVariants<typeof button>
