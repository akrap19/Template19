import { ComponentProps } from 'react'

import PaperClipIconAsset from './paper-clip-icon.svg'
import { BlockIcon } from '../../BlockIcon'

export const PaperClipIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={PaperClipIconAsset} {...props} />
}
