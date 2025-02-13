import { ComponentProps } from 'react'

import EmptyStarIconAsset from './empty-star-icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const EmptyStarIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={EmptyStarIconAsset} {...props} />
}
