import { ComponentProps } from 'react'
import { BlockIcon } from '../../BlockIcon'

import PauseIconAsset from './pause-icon.svg'

export const PauseIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={PauseIconAsset} {...props} />
}
