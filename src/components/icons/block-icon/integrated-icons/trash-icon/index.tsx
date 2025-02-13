import { ComponentProps } from 'react'

import TrashIconAsset from './trash-icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const TrashIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={TrashIconAsset} {...props} />
}
