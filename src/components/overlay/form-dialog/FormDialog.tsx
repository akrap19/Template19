import { ReactNode } from 'react'
import { getChildByType } from 'react-nanny'

import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Dialog } from '@/components/overlay/dialog'
import { Text } from '@/components/typography/text'
import { CloseIcon } from '@/components/icons/block-icon/integrated-icons/close-icon'
import { useMounted } from '@/hooks/use-mounted'

interface Props {
	opened: boolean
	children: ReactNode
	onClose: () => void
}

export const FormDialog = ({ opened, children, onClose }: Props) => {
	const mounted = useMounted()

	if (!mounted) return null

	const title = getChildByType(children, [FormDialog.Title])
	const body = getChildByType(children, [FormDialog.Body])

	return (
		<Dialog opened={opened} onClose={onClose}>
			{title}
			{body}
		</Dialog>
	)
}

FormDialog.Title = ({ children }: { children: ReactNode }) => (
	<Box padding={6} paddingBottom={2}>
		<Inline justifyContent="space-between">
			<Text fontSize="xxbig" fontWeight="semibold" lineHeight="large">
				{children}
			</Text>
			<Button size="auto" variant="adaptive">
				<CloseIcon size="medium" color="shades.100" />
			</Button>
		</Inline>
	</Box>
)

FormDialog.Body = ({ children }: { children: ReactNode }) => <Box>{children}</Box>
