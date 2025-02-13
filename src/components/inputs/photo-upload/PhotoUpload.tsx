'use client'

import React, { InputHTMLAttributes, useRef } from 'react'

import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

import * as styles from './PhotoUpload.css'
import { PaperClipIcon } from '@/components/icons/block-icon/integrated-icons/paper-clip-icon'

type Props = InputHTMLAttributes<HTMLInputElement>

export const PhotoUpload = ({ ...rest }: Props) => {
	const photoInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (event: any) => {
		console.log('event', event)
	}

	return (
		<Stack gap={2}>
			<Inline gap={6}>
				<input
					id={rest.id}
					name={rest.id}
					type="file"
					accept="image/*"
					multiple
					onChange={handleFileChange}
					className={styles.photoInput}
					ref={photoInputRef}
				/>
				<label htmlFor={rest.id} className={styles.photoUploadLabel}>
					<Stack gap={4} alignItems="center">
						<PaperClipIcon size="medium" color="primary.600" />
						<Text color="neutral.400" lineHeight="large">
							Drag and drop filers here or{' '}
							<Text as="span" color="primary.600" textDecoration="underline" fontWeight="semibold">
								browse files
							</Text>
						</Text>
					</Stack>
				</label>
			</Inline>
			<Inline justifyContent="space-between">
				<Text fontSize="xxsmall" lineHeight="large" color="neutral.400">
					Supported files: .JPG, .JPEG, .PNG
				</Text>
				<Text fontSize="xxsmall" lineHeight="large" color="neutral.400">
					Maximum size: 1MB
				</Text>
			</Inline>
		</Stack>
	)
}
