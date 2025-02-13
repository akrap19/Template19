'use client'

import { Button } from '@/components/inputs/button'
import { ButtonVariants } from '@/components/inputs/button/Button.css'
import { Inline } from '@/components/layout/inline'
import { Text } from '@/components/typography/text'
import { useTableStore } from '@/store/table'
import { PencilIcon } from '@/components/icons/block-icon/integrated-icons/pencil-icon'
import { StarsIcon } from '@/components/icons/block-icon/integrated-icons/stars-icon'
import { TrashIcon } from '@/components/icons/block-icon/integrated-icons/trash-icon'

type DataTableActionsProps = {
	disableDelete?: boolean
	onEdit?: () => void
	onMakeItDefault?: () => void
	onDelete: () => void
}

type Props = DataTableActionsProps & ButtonVariants

export const DataTableActions = ({ size = 'large', disableDelete, onEdit, onMakeItDefault, onDelete }: Props) => {
	const { checkedItemsLength, clearCheckedItems } = useTableStore()

	return (
		<Inline justifyContent="space-between">
			<Inline gap={2} alignItems="flex-end">
				<Text color="neutral.400" fontSize="small">
					{checkedItemsLength + 'items selected'}
				</Text>
				<Button variant="adaptive" size="auto" onClick={() => clearCheckedItems()}>
					<Text color="primary.500" fontSize="small">
						Clear selection
					</Text>
				</Button>
			</Inline>
			<Inline gap={4} alignItems="center">
				{onEdit && checkedItemsLength === 1 && (
					<Button size={size} variant="secondary" onClick={() => onEdit()}>
						<PencilIcon size="medium" color="neutral.700" />
						Edit
					</Button>
				)}
				{checkedItemsLength === 1 && onMakeItDefault && (
					<Button size={size} variant="secondary" onClick={() => onMakeItDefault()}>
						<StarsIcon size="medium" color="warning.500" />
						<Text color="warning.500" fontWeight="semibold">
							Make it default
						</Text>
					</Button>
				)}
				<Button disabled={disableDelete} size={size} variant="secondary" onClick={() => onDelete()}>
					<TrashIcon size="medium" color="destructive.500" />
					<Text color="destructive.500" fontWeight="semibold">
						Delete
					</Text>
				</Button>
			</Inline>
		</Inline>
	)
}
