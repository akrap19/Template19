'use client'

import WavesurferPlayer from '@wavesurfer/react'
import { useState } from 'react'

import { Button } from '@/components/inputs/button/Button'
import { Stack } from '@/components/layout/stack/Stack'
import { Inline } from '@/components/layout/inline/Inline'
import { Box } from '@/components/layout/box/Box'
import { Text } from '@/components/typography/text'
import { PlayIcon } from '@/components/icons/block-icon/integrated-icons/play-icon'
import { PauseIcon } from '@/components/icons/block-icon/integrated-icons/pause-icon'

interface Props {
	title: string
}

export const WaveAudioPlayer = ({ title }: Props) => {
	const [wavesurfer, setWavesurfer] = useState(null)
	const [isPlaying, setIsPlaying] = useState(false)

	console.log('wavesurfer', wavesurfer)
	const onReady = (ws: any) => {
		setWavesurfer(ws)
		setIsPlaying(false)
	}

	// const onPlayPause = () => {
	// 	wavesurfer && wavesurfer.playPause()
	// }

	return (
		<Stack gap={6}>
			<Inline gap={4} alignItems="center">
				{/* <Button variant="adaptive" size="auto" onClick={onPlayPause}> */}
				<Button variant="adaptive" size="auto">
					<Box
						display="flex"
						backgroundColor="primary.600"
						borderRadius="full"
						justify="center"
						alignItems="center"
						style={{ height: '40px', width: '40px' }}>
						{isPlaying ? <PauseIcon color="shades.00" size="small" /> : <PlayIcon color="shades.00" size="small" />}
					</Box>
				</Button>
				<Text fontSize="xlarge" fontWeight="semibold" lineHeight="xxlarge">
					{title}
				</Text>
			</Inline>
			<Stack gap={1}>
				<WavesurferPlayer
					height={40}
					waveColor="#888888"
					progressColor="#8C60FF"
					barGap={1}
					barWidth={1}
					url="/audio/FS Green - Reckless Riddim.mp3"
					onReady={onReady}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
				/>
				<Inline justifyContent="space-between">
					<Text color="neutral.400" fontSize="xxsmall" lineHeight="large">
						00:00
					</Text>
					<Text color="neutral.400" fontSize="xxsmall" lineHeight="large">
						00:00
					</Text>
				</Inline>
			</Stack>
		</Stack>
	)
}
