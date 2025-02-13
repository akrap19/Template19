import { ReactNode } from 'react'

import { Box } from 'components/layout/box'

import { BadgeVariants, badge } from './Badge.css'

type Props = BadgeVariants & Record<string, unknown>

const variantTextMap: Record<string, string> = {}

const variantIconMap: Record<string, ReactNode> = {}

export const Badge = ({ variant = 'draft', size = 'small' }: Props) => {
	const text = variantTextMap[variant] ?? variant
	const icon = variantIconMap[variant]

	return (
		<Box className={badge({ variant: variant, size })}>
			{icon}
			{text}
		</Box>
	)
}
