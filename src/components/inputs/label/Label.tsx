import { ReactNode } from 'react'

import { Text } from 'components/typography/text'

interface Props {
	children: ReactNode
	htmlFor?: string
}

export const Label = ({ children, htmlFor }: Props) => (
	<Text as="label" lineHeight="large" fontWeight="semibold" htmlFor={htmlFor}>
		{children}
	</Text>
)
