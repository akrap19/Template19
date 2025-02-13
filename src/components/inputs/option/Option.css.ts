import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { tokens } from '@/style/theme.css'

export const option = recipe({
	base: {
		color: tokens.colors['neutral.500']
	},
	variants: {
		size: {
			large: {
				padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
				lineHeight: tokens.typography.lineHeight.medium,
				border: tokens.borders.border.thin,
				borderColor: tokens.borders.color['neutral.200'],
				borderRadius: tokens.borders.radius.small2
			},
			small: {
				padding: `${tokens.spacing[1]} ${tokens.spacing[2]}`,
				lineHeight: tokens.typography.lineHeight.large,
				borderRadius: tokens.borders.radius.small
			}
		},
		variant: {
			basic: {
				':hover': {
					backgroundColor: tokens.colors['neutral.50']
				}
			},
			selected: {
				color: tokens.colors['primary.600'],
				borderColor: tokens.colors['primary.300'],
				backgroundColor: tokens.borders.color['primary.100']
			},
			add: {},
			or: {
				backgroundColor: tokens.colors['neutral.50'],
				color: tokens.colors['neutral.400']
			}
		}
	}
})

export type OptionVariants = RecipeVariants<typeof option>
