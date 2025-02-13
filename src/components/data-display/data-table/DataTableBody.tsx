'use client'

import { Cell, ColumnDef, Table, flexRender } from '@tanstack/react-table'
import { usePathname } from 'next/navigation'

import { Checkbox } from '@/components/inputs/checkbox'

import { TableBody, TableCell, TableCellWithLink, TableRow } from '../table'

interface Props<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	table: Table<TData>
	contentSection?: string
	data: any
}

export const DataTableBody = <TData, TValue>({ columns, table, contentSection, data }: Props<TData, TValue>) => {
	const pathname = usePathname()

	return (
		<TableBody>
			{table.getRowModel().rows.map((row: any) => (
				<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
					<TableCell>
						<Checkbox
							checked={row.getIsSelected()}
							indeterminate={row.getIsSomeSelected()}
							onChange={row.getToggleSelectedHandler()}
						/>
					</TableCell>
					{row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
						<TableCellWithLink
							key={cell.id}
							// eslint-disable-next-line sonarjs/no-nested-template-literals
							href={`${pathname}/${contentSection ? `${contentSection}/` : ''}${row.original?.id}`}>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</TableCellWithLink>
					))}
				</TableRow>
			))}
		</TableBody>
	)
}
