import { ReactNode } from 'react'

import { Text } from 'components/typography/text'

interface Props {
	children: ReactNode
}

export const RequiredLabel = ({ children }: Props) => (
	<>
		{children}
		<Text as="span" color="primary.600" fontSize="small" lineHeight="large">
			*
		</Text>
	</>
)
