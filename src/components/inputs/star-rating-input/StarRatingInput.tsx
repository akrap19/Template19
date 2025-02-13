import { EmptyStarIcon } from '@/components/icons/block-icon/integrated-icons/empty-star-icon'
import { StarIcon } from '@/components/icons/block-icon/integrated-icons/star-icon'
import React, { useState } from 'react'

import { Button } from '../button'

interface StarRatingInputProps {
	totalStars?: number
}

export const StarRatingInput: React.FC<StarRatingInputProps> = ({ totalStars = 5 }) => {
	const [hoveredStar, setHoveredStar] = useState<number | null>(null)
	const [selectedStar, setSelectedStar] = useState<number | null>(null)

	return (
		<div>
			{Array.from({ length: totalStars }, (_, index) => {
				const starIndex = index + 1

				const isFilled = hoveredStar ? starIndex <= hoveredStar : starIndex <= (selectedStar ?? 0)

				return (
					<Button
						size="auto"
						variant="adaptive"
						key={starIndex}
						onMouseEnter={() => setHoveredStar(starIndex)}
						onMouseLeave={() => setHoveredStar(null)}
						onClick={() => setSelectedStar(starIndex)}>
						{isFilled ? <StarIcon color="primary.500" /> : <EmptyStarIcon color="primary.500" />}
					</Button>
				)
			})}
		</div>
	)
}
