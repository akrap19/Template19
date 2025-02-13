import clsx from 'clsx'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode } from 'react'

import { ButtonVariants, button } from './Button.css'

// Updated Props type to include additional event handlers and the key prop
type RequiredProps = {
	children: ReactNode
	openInNewTab?: boolean
	style?: CSSProperties
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	key?: number
}

type AnchorProps = { onClick?: never; href: string } & Pick<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'target' | 'rel' | 'className' | 'onMouseEnter' | 'onMouseLeave'
>

type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	href?: never
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className' | 'disabled' | 'onMouseEnter' | 'onMouseLeave'>

type Props = (AnchorProps | ButtonProps) & ButtonVariants & RequiredProps

const inter = Inter({
	weight: ['400', '500', '700', '800'],
	subsets: ['latin'],
	variable: '--inter-font'
})

export const Button = ({
	variant = 'primary',
	size = 'large',
	href,
	openInNewTab,
	className,
	style,
	...rest
}: Props) => {
	if (href) {
		return (
			<Link
				{...(openInNewTab ? { target: '_blank' } : {})}
				{...(openInNewTab ? { rel: 'noopener noreferrer' } : {})}
				href={href}
				className={clsx(button({ variant, size }), inter.className, className)}
				style={style} // Pass the style prop to the Link
				{...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
			/>
		)
	}

	return (
		// eslint-disable-next-line
		<button
			className={clsx(button({ variant, size }), inter.className, className)}
			style={style} // Pass the style prop to the button
			{...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
		/>
	)
}
