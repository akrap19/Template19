'use client'

import Image from 'next/image'
import React, { InputHTMLAttributes, useRef, useState } from 'react'

import { Box } from '@/components/layout/box'

import * as styles from './ProfilePhotoUpload.css'

type Props = InputHTMLAttributes<HTMLInputElement>

export const ProfilePhotoUpload = ({ ...rest }: Props) => {
	const [photo, setPhoto] = useState<string>('/images/profile-picture-upload-background.svg')
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target

		if (files && files[0]) {
			const reader = new FileReader()
			reader.onload = e => {
				setPhoto(e.target?.result as string)
			}
			reader.readAsDataURL(files[0])
		}
	}

	return (
		<Box>
			<div className={styles.imageWrapper}>
				<Image src={photo} alt="Profile Photo" width={120} height={120} className={styles.profileImage} />
				<input
					id={rest.id}
					name={rest.id}
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className={styles.fileInput}
					ref={fileInputRef}
					{...rest}
				/>
			</div>
		</Box>
	)
}
