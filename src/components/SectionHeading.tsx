import { tv } from 'tailwind-variants'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  size?: 'xs' | 'sm' | 'md'
}

const headingVariants = tv({
  slots: {
    wrap: 'flex flex-col gap-2',
    title: 'tracking-tight font-medium text-palin',
    subtitle: 'leading-tight tracking-tighter text-primary',
    description: ' tracking-normal font-light text-foreground',
  },
  variants: {
    size: {
      xs: {
        title: 'text-base md:text-lg',
        subtitle: 'text-lg md:text-xl font-medium',
        description: 'text-base',
      },
      sm: {
        title: 'text-lg md:text-xl',
        subtitle: 'text-xl md:text-2xl font-semibold',
        description: 'text-lg',
      },
      md: {
        title: 'text-xl md:text-2xl',
        subtitle: 'text-2xl md:text-4xl font-bold',
        description: 'text-xl',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  compoundVariants: [],
})

export const SectionHeading = ({ title, subtitle, description, size }: Props) => {
  const hV = headingVariants({ size })

  return (
    <div className={hV.wrap()}>
      {title && <h1 className={hV.title()}>{title}</h1>}
      {subtitle && <h2 className={hV.subtitle()}>{subtitle}</h2>}
      {description && <p className={hV.description()}>{description}</p>}
    </div>
  )
}
