import { style, styleVariants } from '@vanilla-extract/css'

const base = style({
	margin: '0 auto',
	width: '100%',
	background: 'gray'
})

export const container = styleVariants({
	small: [base, { maxWidth: '768px' }],
	medium: [base, { maxWidth: '1024px' }],
	large: [base, { maxWidth: '1144px' }]
})
