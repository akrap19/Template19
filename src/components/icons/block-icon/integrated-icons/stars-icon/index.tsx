import { ComponentProps } from 'react'

import StarsIconAsset from './stars-icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const StarsIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={StarsIconAsset} {...props} />
}
