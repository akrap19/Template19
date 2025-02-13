/* eslint-disable no-undef */
import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

import { InputWrapper } from '../input-wrapper'
import {
	endIconSpacing,
	input,
	inputHasError,
	predifinedTextSpacing,
	startIconSpacing
} from '../input-wrapper/InputWrapper.css'

interface CustomInputProps {
	hasError?: boolean
	startIcon?: ReactNode
	predifinedText?: string
	endIcon?: ReactNode
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomInputProps

export const TextInput = ({ hasError, startIcon, predifinedText, endIcon, ...rest }: Props) => {
	return (
		<InputWrapper startIcon={startIcon} predifinedText={predifinedText} endIcon={endIcon}>
			<input
				{...rest}
				className={clsx(
					input,
					hasError && inputHasError,
					startIcon && startIconSpacing,
					predifinedText && predifinedTextSpacing,
					endIcon && endIconSpacing
				)}
			/>
		</InputWrapper>
	)
}
