'use client'

import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { BlockIcon } from '@/components/icons/block-icon'
import { Button } from '@/components/inputs/button'
import { InputWrapper } from '@/components/inputs/input-wrapper'
import { endIconSpacing, input } from '@/components/inputs/input-wrapper/InputWrapper.css'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

import { DropdownPresentationlabel } from './SearchDropdown.css'
import { SearchDropdownDrawer } from './SearchDropdownDrawer'
import CarretDownIcon from '../../../icons/block-icon/assets/carret-down-icon.svg'
import CarretUpIcon from '../../../icons/block-icon/assets/carret-up-icon.svg'
import { OptionBase } from '@/components/models/optionBase'

interface Props {
	options: OptionBase[]
	placeholder: string
	name: string
	hasSuccess?: boolean
	value?: string[]
	alwaysShowSearch?: boolean
	allowAdd?: boolean
	isMulti?: boolean
	isFilter?: boolean
	setValue?: Dispatch<SetStateAction<any>>
}

export const SearchDropdown = ({
	name,
	options,
	placeholder,
	hasSuccess,
	value,
	alwaysShowSearch,
	allowAdd,
	isMulti,
	isFilter,
	setValue
}: Props) => {
	const searchParams = useSearchParams()
	const nameSearchParam = searchParams.get(name)
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const presentationalLabelVariant = isFilter ? 'filterLabel' : value ? 'formLabel' : 'placeholder'

	const handleDropDownOpening = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsOpen(!isOpen)
	}

	const handleValueLabel = (id?: string) => {
		const selectedValue = isFilter ? nameSearchParam : id
		const selectedOption = options?.find(option => option.value === selectedValue)

		return selectedOption?.label ?? selectedValue ?? placeholder
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div ref={ref} style={{ position: 'relative' }}>
			<InputWrapper
				endIcon={
					<BlockIcon
						icon={isOpen ? CarretUpIcon : CarretDownIcon}
						size="xsmall"
						color={!isFilter && hasSuccess ? 'success.500' : 'neutral.900'}
					/>
				}>
				<Stack>
					<Button size="auto" variant="adaptive" onClick={handleDropDownOpening}>
						<Box className={clsx(input, endIconSpacing)}>
							{!Array.isArray(value) ? (
								<Text className={DropdownPresentationlabel({ variant: presentationalLabelVariant })}>
									{handleValueLabel(value)}
								</Text>
							) : value.length === 0 ? (
								<Text className={DropdownPresentationlabel({ variant: presentationalLabelVariant })}>
									{placeholder}
								</Text>
							) : (
								<Inline gap={1}>
									{value?.map((item: string) => (
										<Box
											padding={1}
											border="thin"
											borderColor="primary.300"
											borderRadius="small"
											backgroundColor="primary.100">
											<Text color="primary.600" fontSize="xxsmall" fontWeight="semibold" lineHeight="large">
												{item ? handleValueLabel(item as string) : placeholder}
											</Text>
										</Box>
									))}
								</Inline>
							)}
						</Box>
					</Button>
				</Stack>
			</InputWrapper>
			{isOpen && (
				<SearchDropdownDrawer
					options={options}
					placeholder={placeholder}
					name={name}
					value={value}
					alwaysShowSearch={alwaysShowSearch}
					allowAdd={allowAdd}
					isMulti={isMulti}
					setValue={setValue}
				/>
			)}
		</div>
	)
}
