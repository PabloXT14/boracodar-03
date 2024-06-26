import { ComponentProps } from 'react'

type CursorLoadingProps = ComponentProps<'svg'>

export const CursorLoading = ({ ...props }: CursorLoadingProps) => {
  return (
    <svg
      width="20"
      height="32"
      viewBox="0 0 20 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 16V0L12.1 11.6H5.1L4.9 11.7L0.5 16Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 2.40002V13.6L4.5 10.7L4.6 10.6H9.6L1.5 2.40002Z"
        fill="black"
      />
      <mask
        id="mask0_102_635"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="1"
        y="13"
        width="19"
        height="19"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 22.6C1.5 24.9869 2.44821 27.2761 4.13604 28.9639C5.82387 30.6518 8.11305 31.6 10.5 31.6C12.8869 31.6 15.1761 30.6518 16.864 28.9639C18.5518 27.2761 19.5 24.9869 19.5 22.6C19.5 20.213 18.5518 17.9238 16.864 16.236C15.1761 14.5482 12.8869 13.6 10.5 13.6C8.11305 13.6 5.82387 14.5482 4.13604 16.236C2.44821 17.9238 1.5 20.213 1.5 22.6Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_102_635)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 13.6H10.5V22.6H1.5V13.6Z"
          fill="url(#paint0_linear_102_635)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 22.6H19.5V31.6H10.5V22.6Z"
          fill="url(#paint1_linear_102_635)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 13.6H19.5V22.6H10.5V13.6Z"
          fill="url(#paint2_linear_102_635)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 22.6H10.5V31.6H1.5V22.6Z"
          fill="url(#paint3_linear_102_635)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_102_635"
          x1="6"
          y1="13.6"
          x2="6"
          y2="22.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AB4EF" />
          <stop offset="1" stopColor="#3582E5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_102_635"
          x1="15"
          y1="22.6"
          x2="15"
          y2="31.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3481E4" />
          <stop offset="1" stopColor="#2051DB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_102_635"
          x1="15"
          y1="13.6"
          x2="15"
          y2="22.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6BDCFC" />
          <stop offset="1" stopColor="#4DC6FA" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_102_635"
          x1="6"
          y1="22.6"
          x2="6"
          y2="31.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4BC5F9" />
          <stop offset="1" stopColor="#2FB0F8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
