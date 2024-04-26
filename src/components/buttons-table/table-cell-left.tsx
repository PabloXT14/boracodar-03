import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableCellLeftProps = ComponentProps<'td'>

export const TableCellLeft = ({ className, ...props }: TableCellLeftProps) => {
  return (
    <td
      className={twMerge(
        'bg-violet-900 px-2.5 py-9 text-center text-xs font-normal uppercase',
        className,
      )}
      {...props}
    />
  )
}
