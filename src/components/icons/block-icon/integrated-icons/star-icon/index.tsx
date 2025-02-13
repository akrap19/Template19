import { ComponentProps } from 'react'

import StarIconAsset from './star-icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const StarIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={StarIconAsset} {...props} />
}
