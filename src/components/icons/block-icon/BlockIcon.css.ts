import { styleVariants } from '@vanilla-extract/css'

export const sizes = styleVariants({
	xxxsmall: { width: '0.75rem', height: '0.75rem' },
	xxsmall: { width: '0.938rem', height: '0.938rem' },
	xsmall: { width: '1rem', height: '1rem' },
	small: { width: '1.25rem', height: '1.25rem' },
	medium: { width: '1.5rem', height: '1.5rem' },
	large: { width: '2rem', height: '2rem' }
})
