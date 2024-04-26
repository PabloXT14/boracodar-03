import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableCellProps = ComponentProps<'td'>

export const TableCell = ({ className, ...props }: TableCellProps) => {
  return <td className={twMerge('text-center', className)} {...props} />
}
