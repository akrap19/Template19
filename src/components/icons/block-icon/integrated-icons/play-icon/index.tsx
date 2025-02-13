import { ComponentProps } from 'react'
import { BlockIcon } from '../../BlockIcon'

import PlayIconAsset from './play-icon.svg'

export const PlayIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={PlayIconAsset} {...props} />
}
