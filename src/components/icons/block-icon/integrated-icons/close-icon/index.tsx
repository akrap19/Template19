import { ComponentProps } from 'react'

import CloseIconAsset from './close-Icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const CloseIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={CloseIconAsset} {...props} />
}
