import { ReactNode } from 'react'

import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Text } from '@/components/typography/text'

import { OptionVariants, option } from './Option.css'
import { Button } from '../button'

interface OptionProps {
	label: string
	icon?: ReactNode
	handleOption: (e: any) => void
}

type Props = OptionVariants & OptionProps

export const Option = ({ icon, label, size = 'large', variant, handleOption }: Props) => {
	return (
		<Button type="button" size="auto" variant="adaptive" onClick={handleOption}>
			<Box className={option({ variant, size })}>
				<Inline gap={2} alignItems="center">
					{icon}
					<Text fontWeight="semibold">{label}</Text>
				</Inline>
			</Box>
		</Button>
	)
}
