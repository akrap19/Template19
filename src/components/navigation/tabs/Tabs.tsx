'use client'

import clsx from 'clsx'
import { CSSProperties, FC, ReactNode, useEffect } from 'react'
import { getChildrenByType } from 'react-nanny'

import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'

import * as styles from './Tabs.css'
import { TabsProvider, useTabsProvider } from './TabsProvider'

interface Props {
	children: ReactNode
	style?: CSSProperties
}

interface Tab {
	value: string
	defaultTab?: boolean
	children: ReactNode
}

interface Panel {
	value: string
	children: ReactNode
}

interface TabsComposition {
	Tab: FC<Tab>
	Panel: FC<Panel>
}

export const Tabs: FC<Props> & TabsComposition = ({ children, style }: Props) => {
	const tabs = getChildrenByType(children, [Tabs.Tab])
	const panel = getChildrenByType(children, [Tabs.Panel])

	return (
		<TabsProvider>
			<div className={styles.tabsWrapper} style={style}>
				{tabs}
			</div>
			<div>{panel}</div>
		</TabsProvider>
	)
}

Tabs.Tab = ({ value, defaultTab, children }: Tab) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { activeTab, onActiveTabChange } = useTabsProvider()

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (defaultTab) {
			onActiveTabChange(value)
		}
	}, [])

	return (
		<button
			type="button"
			onClick={() => onActiveTabChange(value)}
			className={clsx(styles.tab, activeTab === value && styles.activeTab)}>
			<Inline gap={4} alignItems="center" justifyContent="center">
				{activeTab === value && (
					<Box backgroundColor="primary.500" borderRadius="full" style={{ height: '8px', width: '8px' }} />
				)}
				{children}
			</Inline>
		</button>
	)
}

Tabs.Panel = ({ value, children }: Panel) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { activeTab } = useTabsProvider()
	return activeTab === value ? <div>{children}</div> : null
}
