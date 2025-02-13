/* eslint-disable no-undef */
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { ElementType, HTMLAttributes, JSX } from 'react'

import { Atoms, atoms } from 'style/atoms.css'
import { filterAtomsFromNativeAttributes } from 'style/utils/filterAtomsFromNativeAttributes'

import { TextAtomsProps } from '../types'

type Variant = 'bodytext' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type Common<E extends ElementType> = HTMLAttributes<E> & { as?: E; variant?: Variant } & TextAtomsProps

type Props<E extends ElementType> = E extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[E] & Common<E>
	: Common<E>

const defaultStylesMap: Record<Variant, Atoms> = {
	bodytext: {
		fontWeight: 'regular',
		fontSize: 'small',
		lineHeight: 'medium'
	},
	h1: {
		fontWeight: 'heavybold',
		fontSize: { mobile: 'large', tablet: 'xlarge' },
		lineHeight: 'medium'
	},
	h2: {
		fontWeight: 'bold',
		fontSize: { mobile: 'xxbig', tablet: 'large' },
		lineHeight: 'medium'
	},
	h3: {
		fontWeight: 'bold',
		fontSize: { mobile: 'xbig', tablet: 'xxbig' },
		lineHeight: 'medium'
	},
	h4: {
		fontWeight: 'bold',
		fontSize: { mobile: 'big' },
		lineHeight: 'medium'
	},
	h5: {
		fontWeight: 'bold',
		fontSize: 'small',
		lineHeight: 'medium'
	}
}

const inter = Inter({
	weight: ['400', '500', '700', '800'],
	subsets: ['latin'],
	variable: '--inter-font'
})

export const Text = <E extends ElementType = 'p'>({ as, variant = 'bodytext', className, ...rest }: Props<E>) => {
	const Element = as || 'p'
	const defaultStyles = defaultStylesMap[variant]

	const { atomsProps, elementNativeProps } = filterAtomsFromNativeAttributes(rest)

	const joinedAtoms = {
		...defaultStyles,
		...atomsProps
	}

	return <Element className={clsx(atoms(joinedAtoms), inter.className, className)} {...elementNativeProps} />
}
