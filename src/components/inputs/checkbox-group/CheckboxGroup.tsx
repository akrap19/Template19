import { ChangeEvent } from 'react'

import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Text } from '@/components/typography/text'
import { Stack } from 'components/layout/stack'

import { Checkbox } from '../checkbox'

interface Props {
	name: string
	value: Array<string>
	onChange: (values: Array<string>) => void
	options: any[]
}

export const CheckboxGroup = ({ name, value, onChange, options }: Props) => {
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const checkboxValue = event.target.value

		if (value.includes(checkboxValue)) {
			onChange(value.filter(item => item !== checkboxValue))
			return
		}

		onChange([...value, checkboxValue])
	}

	return (
		<Box paddingTop={2}>
			<Stack gap={2}>
				{options?.map(option => (
					<Box padding={2}>
						<Inline gap={2} alignItems="center">
							<Checkbox
								key={option.value}
								name={name}
								value={option.value}
								checked={option.value ? value?.includes(option.value) : false}
								onChange={handleOnChange}
							/>
							<Text color="neutral.900">{option.label}</Text>
						</Inline>
					</Box>
				))}
			</Stack>
		</Box>
	)
}
