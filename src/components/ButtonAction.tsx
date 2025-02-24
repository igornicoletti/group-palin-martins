import { tv } from 'tailwind-variants'

interface Props {
  href?: string
  action: string
  colorVariant?: 'default' | 'primary' | 'secondary'
}

const buttonVariants = tv({
  base: 'mt-auto cursor-pointer rounded-full text-base text-center font-medium transition-colors',
  variants: {
    color: {
      default: 'w-full text-foreground hover:text-palin ',
      primary: 'px-5 py-3 text-popover bg-palin',
      secondary: 'px-5 py-3 text-palin border border-border',
    },
  },
  defaultVariants: {
    color: 'primary',
  }
})

export const ButtonAction = ({ href, action, colorVariant = 'primary' }: Props) => {

  return (
    <a className={buttonVariants({ color: colorVariant })} href={href} target='_blank' rel='noopener noreferrer'>
      {action}
    </a>
  )
}
