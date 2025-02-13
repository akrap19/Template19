import { ComponentProps } from 'react'
import { BlockIcon } from '../../BlockIcon'

import CheckmarkIconAsset from './checkmark-icon.svg'

export const CheckmarkIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={CheckmarkIconAsset} {...props} />
}
