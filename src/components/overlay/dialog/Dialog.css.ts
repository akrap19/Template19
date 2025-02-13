import { keyframes, style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { tokens } from '../../../style/theme.css'

const overlayShow = keyframes({
	from: {
		opacity: 0
	},
	to: {
		opacity: 1
	}
})

const contentShow = keyframes({
	from: {
		opacity: 0,
		transform: 'translate(-50%, -48%) scale(0.96)'
	},
	to: {
		opacity: 1,
		transform: 'translate(-50%, -50%) scale(1)'
	}
})

export const overlay = style({
	backgroundColor: 'rgba(0, 0, 0, 0.20)',
	position: 'fixed',
	inset: 0,
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	zIndex: tokens.indices.over
})

export const content = recipe({
	base: {
		backgroundColor: tokens.colors['shades.00'],
		borderRadius: tokens.borders.radius.small,
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '90vw',
		maxWidth: '528px',
		maxHeight: '85vh',
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
		zIndex: tokens.indices.over
	},
	variants: {
		size: {
			small: {
				maxWidth: '668px',
				maxHeight: '85vh'
			},
			large: {
				height: '78vh',
				maxWidth: '1212px',
				maxHeight: '800px',
				padding: tokens.spacing[20]
			}
		}
	}
})

export type DialogVariants = RecipeVariants<typeof content>
