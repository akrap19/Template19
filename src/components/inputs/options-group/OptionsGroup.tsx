import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'
import { OptionBase } from '@/components/models/optionBase'

import { AddOption } from './AddOption'
import { Option } from '../option/Option'

interface Props {
	label: string
	name?: string
	data: OptionBase[]
	max?: number
	value?: string[]
}

export const OptionsGroup = ({ max, data, label, name, value }: Props) => {
	const formContext = useFormContext()
	const [optionsData, setOptionsData] = useState<OptionBase[]>(data)

	const handleAddOption = (option: string) => {
		setOptionsData([...optionsData, { value: option, label: option }])
	}

	const handleOption = (e: React.MouseEvent<HTMLButtonElement>, optionValue: string) => {
		e.preventDefault()

		if (name) {
			const currentValue = value ?? []

			if (currentValue?.includes(optionValue)) {
				const trimmedValue: string[] = currentValue.filter((v: string) => v !== optionValue)
				formContext.setValue(name, trimmedValue)
			} else {
				formContext.setValue(name, [...currentValue, optionValue])
			}
		}
	}

	return (
		<Box paddingTop={1}>
			<Stack gap={2}>
				{max && <Text color="neutral.400" fontSize="xxsmall">{`Choose a maximum of ${max} options`}</Text>}
				<Inline gap={2}>
					{optionsData?.map(item => (
						<Option
							label={item?.label}
							variant={value?.includes(item?.value) ? 'selected' : 'basic'}
							handleOption={e => handleOption(e, item.value)}
						/>
					))}
				</Inline>
				<AddOption label={label} handleAddOption={handleAddOption} />
			</Stack>
		</Box>
	)
}
