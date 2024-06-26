import { ComponentProps } from 'react'

type CursorDefaultProps = ComponentProps<'svg'>

export const CursorDefault = ({ ...props }: CursorDefaultProps) => {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.204468 16.015V0L11.7955 11.619H5.01447L4.60347 11.743L0.204468 16.015Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.28895 16.6893L5.68395 18.2243L1.00195 7.13528L4.68795 5.58228L9.28895 16.6893Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95547 16.0086L6.11147 16.7826L3.01147 9.40861L4.85248 8.63361L7.95547 16.0086Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20447 2.4071V13.5951L4.17347 10.7291L4.60147 10.5901H9.36947L1.20447 2.4071Z"
        fill="black"
      />
    </svg>
  )
}
