import { Atoms } from '@/style/atoms.css'

import { divider } from './Divider.css'
import { Box } from '../box'

interface Props {
	backgroundColor?: Atoms['color']
}

export const Divider = ({ backgroundColor = 'neutral.200' }: Props) => {
	return <Box className={divider} backgroundColor={backgroundColor} />
}
