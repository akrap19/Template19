import { ComponentProps } from 'react'

import MinusIconAsset from './minus-icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const MinusIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={MinusIconAsset} {...props} />
}
