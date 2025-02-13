'use client'

import { Table } from '@tanstack/react-table'

import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Text } from '@/components/typography/text'

import { dataTablePaginationContainer } from './DataTable.css'
import { Pagination } from '@/components/models/pagination'

type DataTablePaginationProps = {
	table: Table<any>
	pagination: Pagination
}

export const DataTablePagination = ({ table, pagination }: DataTablePaginationProps) => {
	const currentPage = table.getState().pagination.pageIndex
	const totalPages = table.getPageCount()
	// eslint-disable-next-line
	// const firstRowIndex = currentPage * pagination?.limit + 1
	// eslint-disable-next-line
	// const lastRowIndex = Math.min((currentPage + 1) * pagination?.limit, pagination?.count)

	return (
		<Box className={dataTablePaginationContainer}>
			<Inline gap={4} alignItems="center">
				{/* <Text fontSize="small">{paginationLabel}</Text> */}
				{totalPages > 0 ? (
					<>
						<Button
							size="auto"
							variant="adaptive"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}>
							<Text color="neutral.200">Previous</Text>
						</Button>
						<Inline gap={2} alignItems="center">
							{Array.from({ length: totalPages }).map((_, index) => (
								<Button size="auto" variant="adaptive">
									<Text
										color={currentPage === index ? 'neutral.500' : 'neutral.400'}
										onClick={() => table.setPageIndex(index)}>
										{index + 1}
									</Text>
								</Button>
							))}
						</Inline>
						<Button size="auto" variant="adaptive" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
							<Text color="neutral.200">Next</Text>
						</Button>
					</>
				) : null}
			</Inline>
		</Box>
	)
}
