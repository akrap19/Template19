import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { InputHTMLAttributes, ReactNode } from 'react'

import { tokens } from '@/style/theme.css'

import {
	endIconSpacing,
	iconSlot,
	input,
	inputHasError,
	inputWrapper,
	predifinedTextSpacing
} from '../input-wrapper/InputWrapper.css'

const inter = Inter({
	weight: ['400', '500', '700', '800'],
	subsets: ['latin'],
	variable: '--inter-font'
})

interface CustomInputProps {
	hasError?: boolean
	startIcon?: Element
	predifinedText?: string
	endIcon?: ReactNode
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomInputProps

export const DatePicker = ({ hasError, predifinedText, endIcon, ...rest }: Props) => {
	return (
		<div className={inputWrapper}>
			<input
				type="date"
				{...rest}
				className={clsx(
					input,
					inter.className,
					hasError && inputHasError,
					predifinedText && predifinedTextSpacing,
					endIcon && endIconSpacing
				)}
			/>
			{endIcon && (
				<div className={iconSlot} style={{ right: tokens.spacing[3] }}>
					{endIcon}
				</div>
			)}
		</div>
	)
}
