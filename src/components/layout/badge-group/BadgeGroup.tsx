import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Box } from 'components/layout/box'
import { Text } from 'components/typography/text'
import { Badge } from '../badge/Badge'

interface Props {
	title: string
	variants?: string[]
}

export const BadgeGroup = ({ title, variants }: Props) => {
	return (
		<Box padding={6} border="thin" borderColor="neutral.100" borderRadius="medium">
			<Stack gap={2} alignItems="flex-start">
				<Text fontSize="big" fontWeight="semibold" lineHeight="xxlarge">
					{title}
				</Text>
				<Inline gap={2}>
					{variants && variants?.length > 0 ? (
						variants?.map(variant => <Badge variant={variant} size="large" />)
					) : (
						<Text color="neutral.400" lineHeight="large">
							No {title} to be shown
						</Text>
					)}
				</Inline>
			</Stack>
		</Box>
	)
}
