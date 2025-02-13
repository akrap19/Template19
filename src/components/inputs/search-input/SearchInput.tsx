'use client'

/* eslint-disable no-undef */
import { InputHTMLAttributes, useRef } from 'react'

import { BlockIcon } from '@/components/icons/block-icon'
import SearchIcon from '@/components/icons/block-icon/assets/search-icon.svg'
import { Button } from '@/components/inputs/button'

import { AddIconSlot, searchIconSlot, searchInput, searchInputWrapper } from './SearchInput.css'
import { PlusIcon } from '@/components/icons/block-icon/integrated-icons/plus-icon'

type Props = InputHTMLAttributes<HTMLInputElement> & {
	handleOption?: (value: any) => void
}

export const SearchInput = ({ handleOption, ...rest }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div className={searchInputWrapper}>
			<div className={searchIconSlot}>
				<BlockIcon icon={SearchIcon} size="medium" color="primary.500" />
			</div>
			<input ref={inputRef} {...rest} className={searchInput} />
			<div className={AddIconSlot}>
				{handleOption && (
					<Button
						type="button"
						size="auto"
						variant="adaptive"
						disabled={!inputRef.current?.value}
						onClick={() => handleOption(inputRef.current?.value)}>
						<PlusIcon size="medium" color="primary.500" />
					</Button>
				)}
			</div>
		</div>
	)
}
