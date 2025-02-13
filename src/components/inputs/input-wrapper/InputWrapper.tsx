/* eslint-disable no-undef */
import { ReactNode } from 'react'

import { Text } from 'components/typography/text'
import { tokens } from 'style/theme.css'

import { iconSlot, inputWrapper } from './InputWrapper.css'

interface Props {
	startIcon?: ReactNode
	predifinedText?: string
	endIcon?: ReactNode
	children: ReactNode
}

export const InputWrapper = ({ startIcon, predifinedText, endIcon, children }: Props) => {
	return (
		<div className={inputWrapper}>
			{startIcon && (
				<div className={iconSlot} style={{ left: tokens.spacing[3] }}>
					{startIcon}
				</div>
			)}
			{predifinedText && (
				<div className={iconSlot} style={{ left: tokens.spacing[3] }}>
					<Text color="neutral.900" lineHeight="large">
						{predifinedText}
					</Text>
				</div>
			)}
			{children}
			{endIcon && (
				<div className={iconSlot} style={{ right: tokens.spacing[3] }}>
					{endIcon}
				</div>
			)}
		</div>
	)
}
