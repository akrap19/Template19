import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { tokens } from 'style/theme.css'

export const badge = recipe({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: tokens.spacing[1],
		fontWeight: tokens.typography.weight.semibold,
		lineHeight: tokens.typography.lineHeight.large
	},
	variants: {
		size: {
			small: {
				padding: `${tokens.spacing[1]} ${tokens.spacing[2]}`,
				fontSize: tokens.typography.size.xxsmall,
				borderRadius: tokens.borders.radius.small
			},
			large: {
				padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
				fontSize: tokens.typography.size.small,
				borderRadius: tokens.borders.radius.small2
			}
		},
		variant: {
			draft: {
				color: tokens.colors['neutral.500'],
				background: tokens.colors['shades.00'],
				border: tokens.borders.border.thin,
				borderColor: tokens.borders.color['neutral.100']
			}
		}
	},
	defaultVariants: {
		variant: 'draft',
		size: 'small'
	}
})

export type BadgeVariants = RecipeVariants<typeof badge> | any
