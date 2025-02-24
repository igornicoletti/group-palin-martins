import { tv } from 'tailwind-variants'

interface Props {
  href?: string
  action: string
  colorVariant?: 'default' | 'primary' | 'secondary'
}

const buttonVariants = tv({
  base: 'w-full md:w-auto mt-auto cursor-pointer rounded-full text-sm text-center font-semibold transition-colors',
  variants: {
    color: {
      default: 'w-full md:w-full text-muted-foreground hover:text-foreground',
      primary: 'px-5 py-2.5 text-popover bg-palin',
      secondary: 'px-5 py-2.5 border border-border text-muted-foreground hover:text-palin hover:border-palin',
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
