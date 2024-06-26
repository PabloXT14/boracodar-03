import { ComponentProps } from 'react'

type CursorMoveProps = ComponentProps<'svg'>

export const CursorMove = ({ ...props }: CursorMoveProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0005 4.987H11.0005V5.987H10.0005V4.987ZM11.0005 10.987H10.0005V9.987H11.0005V10.987ZM6.0005 5.987H5.0005V4.987H6.0005V5.987ZM6.0005 10.987H5.0005V9.987H6.0005V10.987ZM8.0005 0L0.0155029 7.988L5.2375 13.209L8.0005 15.972L15.9845 7.987L8.0005 0Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.567 7.98417L12.01 5.17517V7.00417H8.00096H3.99996V5.17517L1.42896 7.98417L4.00095 10.7922L3.99996 8.98417H8.00096H12.01L12.009 10.7922L14.567 7.98417Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.98791 7.98702H9.00091V3.98602L10.8079 3.98702L8.00091 1.41602L5.19191 3.98602H7.00091V7.98702H7.00891V11.989L5.18091 11.988L7.98791 14.565L10.7929 11.989H8.98791V7.98702Z"
        fill="black"
      />
    </svg>
  )
}
