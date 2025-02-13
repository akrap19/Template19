'use client'

import { ComponentProps, ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { getChildByType, overridePropsDeep } from 'react-nanny'

import { Stack } from 'components/layout/stack'
import { Text } from 'components/typography/text'

import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../checkbox-group'
import { DatePicker } from '../date-picker'
import { Label } from '../label'
import { NumericInput } from '../numeric-input'
import { OptionsGroup } from '../options-group'
import { OptionsOr } from '../options-or'
import { PasswordInput } from '../password-input'
import { PatternInput } from '../pattern-input'
import { Select } from '../select'
import { StarRatingInput } from '../star-rating-input'
import { Textarea } from '../text-area'
import { TextInput } from '../text-input'
import { ProfilePhotoUpload } from '../profile-photo-upload'
import { SearchDropdown } from '../search-dropdown'

type Props = { name: string; children: ReactNode }

export const FormControl = ({ name, children }: Props) => {
	const {
		control,
		formState: { errors }
	} = useFormContext()
	const label = getChildByType(children, [FormControl.Label])
	const message = getChildByType(children, [FormControl.Message])
	const input = getChildByType(children, [
		TextInput,
		Select,
		NumericInput,
		PasswordInput,
		PatternInput,
		ProfilePhotoUpload,
		CheckboxGroup,
		OptionsGroup,
		OptionsOr,
		Textarea,
		StarRatingInput,
		Checkbox,
		SearchDropdown,
		DatePicker
	])

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const errorMessage = errors[field.name]?.message?.toString()
				const overriddenInput = overridePropsDeep(input, () => ({
					hasError: errors[field.name] !== undefined,
					value: field.value,
					id: name,
					name: field.name,
					onChange: field.onChange,
					onBlur: field.onBlur
				}))

				return (
					<Stack gap={0.5}>
						<Stack gap={0.5}>
							{overridePropsDeep(label, props => ({ props, htmlFor: name }))}
							{overriddenInput}
						</Stack>
						{overridePropsDeep(message, () => ({ children: errorMessage }))}
					</Stack>
				)
			}}
		/>
	)
}

FormControl.Label = ({ children, htmlFor }: ComponentProps<typeof Label>) => <Label htmlFor={htmlFor}>{children}</Label>

FormControl.Message = ({ children }: { children?: string }) => {
	if (children) {
		return (
			<Text color="destructive.500" lineHeight="large" fontSize="xxsmall">
				{children}
			</Text>
		)
	}

	return null
}
