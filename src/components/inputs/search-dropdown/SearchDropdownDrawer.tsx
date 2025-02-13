'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDebounce } from 'rooks'

import { Button } from '@/components/inputs/button'
import { Checkbox } from '@/components/inputs/checkbox'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

import { dropdownListContainer, dropdownListItem, dropdownListItemsContainer } from './SearchDropdown.css'
import { SearchInput } from '../../inputs/search-input'
import { OptionBase } from '@/components/models/optionBase'

interface Props {
	options: OptionBase[]
	placeholder: string
	value?: string[]
	name?: string
	alwaysShowSearch?: boolean
	allowAdd?: boolean
	isMulti?: boolean
	setValue?: Dispatch<SetStateAction<OptionBase>>
}

export const SearchDropdownDrawer = ({
	value,
	name,
	options,
	placeholder,
	alwaysShowSearch,
	allowAdd,
	isMulti,
	setValue
}: Props) => {
	const searchParams = useSearchParams()
	const formContext = useFormContext()
	const { replace } = useRouter()
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const currentSearchParamas = qs.parse(searchParams.toString())

	const handleFilterChange = (filter: string, value: string) => {
		const query = { ...currentSearchParamas, [filter]: value }
		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query
			},
			{ skipEmptyString: true }
		)

		replace(url)
	}

	const debouncedFilterChange = useDebounce(handleFilterChange, 300)

	const handleDropdownOption = (e: React.MouseEvent<HTMLButtonElement>, option: OptionBase) => {
		e.preventDefault()

		if (name) {
			if (formContext) {
				if (isMulti) {
					const currentValue = value ?? []
					if (currentValue?.includes(option.value)) {
						const trimedValue: string[] = currentValue?.filter((v: string) => v !== option.value)
						formContext.setValue(name, trimedValue)
					} else {
						formContext.setValue(name, [...currentValue, option.value])
					}
				} else {
					formContext.setValue(name, option.value)
				}
				formContext.trigger(name)
				setIsOpen(!isOpen)
			} else if (setValue) {
				setValue(option)
			}
		}
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	const handleOption = (optionValue: string) => {
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

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<Box className={dropdownListContainer}>
			<Stack gap={2}>
				{(alwaysShowSearch || options?.length > 5) && (
					<Box width="100%" paddingX={1}>
						<SearchInput
							name={name}
							defaultValue={searchParams.get(name ?? '') || ''}
							placeholder={placeholder}
							handleOption={allowAdd ? optionValue => handleOption(optionValue) : undefined}
							onChange={({ target: { name, value } }) => debouncedFilterChange(name, value)}
						/>
					</Box>
				)}
				<Box className={dropdownListItemsContainer}>
					<Stack gap={1}>
						{options && options?.length > 0 ? (
							options?.map(option => (
								<Button size="auto" variant="adaptive" onClick={e => handleDropdownOption(e, option)}>
									<Box className={dropdownListItem}>
										<Inline gap={2} alignItems="center">
											{isMulti && <Checkbox checked={value?.includes(option.value)} />}
											<Text color="neutral.900" fontSize="small">
												{option.label}
											</Text>
										</Inline>
									</Box>
								</Button>
							))
						) : (
							<Text>No result...</Text>
						)}
					</Stack>
				</Box>
			</Stack>
		</Box>
	)
}
