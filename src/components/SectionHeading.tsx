import { tv } from 'tailwind-variants'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
}

const headingVariants = tv({
  slots: {
    wrap: 'flex flex-col gap-2',
    title: 'leading-tight tracking-tight font-medium text-palin',
    subtitle: 'leading-tight tracking-tighter font-semibold text-primary',
    description: 'leading-tight text-muted-foreground',
  },
  variants: {
    size: {
      sm: {
        title: 'text-lg',
        subtitle: 'text-xl md:text-2xl',
        description: 'text-base',
      },
      md: {
        title: 'text-xl',
        subtitle: 'text-3xl md:text-4xl',
        description: 'text-lg',
      },
      lg: {
        title: 'text-2xl',
        subtitle: 'text-4xl md:text-6xl',
        description: 'text-lg',
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
