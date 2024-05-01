import { ComponentProps } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMenu } from 'react-icons/io5'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center gap-2 border-2 border-transparent px-6 py-3 text-sm font-medium uppercase leading-6 transition-colors disabled:cursor-not-allowed disabled:opacity-[0.56]',
  variants: {
    variant: {
      primary: [
        'rounded-full bg-violet-500 text-white',
        'hover:enabled:bg-violet-400',
        'focus:border-zinc-300',
      ],
      secondary: [
        'rounded-full bg-zinc-700 text-white',
        'hover:enabled:bg-zinc-600',
        'focus:border-zinc-300',
      ],
      tertiary: [
        'rounded-full bg-transparent text-white',
        'focus:border-zinc-300',
      ],
    },
    state: {
      default: '',
      hover: '',
      focus: '',
      disabled: '',
      loading: '[&>svg]:animate-spin [&>svg]:text-white',
      movable: 'cursor-move [&>svg]:text-white',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      state: 'hover',
      class: 'bg-violet-400',
    },
    {
      variant: 'primary',
      state: 'focus',
      class: 'border-zinc-300',
    },
    {
      variant: 'secondary',
      state: 'hover',
      class: 'bg-zinc-600',
    },
    {
      variant: 'secondary',
      state: 'focus',
      class: 'border-zinc-300',
    },
    {
      variant: 'tertiary',
      state: 'focus',
      class: 'border-zinc-300',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    state: 'default',
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

type ButtonProps = ButtonVariants & ComponentProps<'button'>

export const Button = ({
  children,
  variant,
  state,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonStyles({ variant, state, className })} {...props}>
      {state === 'loading' && <AiOutlineLoading3Quarters size={16} />}

      {state === 'movable' && <IoMenu size={24} />}
      {children}
    </button>
  )
}
