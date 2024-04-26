import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableRowProps = ComponentProps<'tr'>

export const TableRow = ({ className, ...props }: TableRowProps) => {
  return <tr className={twMerge('', className)} {...props} />
}
