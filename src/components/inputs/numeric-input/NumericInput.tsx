import { ComponentProps, ReactNode } from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

import { InputWrapper } from '../input-wrapper'
import { TextInput } from '../text-input'

// Omit properties that NumericFormat and TextInput are not sharing
type OmittedTextInputProps = Omit<ComponentProps<typeof TextInput>, 'defaultValue' | 'type'>

interface Props extends NumericFormatProps, OmittedTextInputProps {
	value?: string
	// eslint-disable-next-line no-undef
	startIcon?: ReactNode
	predifinedText?: string
	// eslint-disable-next-line no-undef
	endIcon?: ReactNode
}

export const NumericInput = ({ value, startIcon, predifinedText, endIcon, ...rest }: Props) => {
	return (
		<InputWrapper startIcon={startIcon} predifinedText={predifinedText} endIcon={endIcon}>
			<NumericFormat type="text" customInput={TextInput} value={value} {...rest} />
		</InputWrapper>
	)
}
