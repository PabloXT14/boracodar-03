import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'inline-flex items-center gap-2 border-2 border-transparent px-6 py-3 text-sm font-medium uppercase leading-6 transition-colors',
  variants: {
    variant: {
      primary: [
        'rounded-full bg-violet-500 text-white',
        'hover:bg-violet-400',
        'focus:border-zinc-300',
        'disabled:cursor-not-allowed disabled:opacity-[0.56]',
      ],
      secondary: '',
      tertiary: '',
    },
    state: {
      default: '',
      hover: '',
      focus: 'border-zinc-300',
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
      {children}
    </button>
  )
}
