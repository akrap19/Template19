'use client'

/* eslint-disable no-undef */
import { ComponentProps, MouseEvent, useState } from 'react'

import { BlockIcon } from '@/components/icons/block-icon'
import CrossedEyeIcon from '@/components/icons/block-icon/assets/crossed-eye-icon.svg'
import EyeIcon from '@/components/icons/block-icon/assets/eye-icon.svg'

import { Button } from '../button'
import { TextInput } from '../text-input'

type Props = ComponentProps<typeof TextInput>

export const PasswordInput = ({ hasError, ...rest }: Props) => {
	const [passwordVisible, setPasswordVisible] = useState(false)

	const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setPasswordVisible(!passwordVisible)
	}

	return (
		<TextInput
			{...rest}
			type={passwordVisible ? 'text' : 'password'}
			hasError={hasError}
			endIcon={
				<Button size="small" variant="adaptive" onClick={togglePasswordVisibility}>
					<BlockIcon size="small" color="neutral.400" icon={passwordVisible ? CrossedEyeIcon : EyeIcon} />
				</Button>
			}
		/>
	)
}
