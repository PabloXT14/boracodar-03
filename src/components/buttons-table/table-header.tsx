import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableHeaderProps = ComponentProps<'th'>

export const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  return (
    <th
      className={twMerge(
        'bg-violet-900 p-6 text-center text-xs font-normal uppercase',
        className,
      )}
      {...props}
    />
  )
}
