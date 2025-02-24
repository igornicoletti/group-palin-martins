import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface Props {
  id: string
  children: ReactNode
}

const WrapperStyles = tv({
  slots: {
    wrap: 'relative overflow-x-hidden',
    offset: 'scroll-m-16',
    paddingX: 'px-6 md:px-8',
    maxX: 'w-full max-w-7xl mx-auto',
  }
})

export const SectionWrapper = ({ id, children }: Props) => {
  const wV = WrapperStyles()

  return (
    <div className={wV.wrap()}>
      <div id={id} className={wV.offset()}></div>
      <div className={wV.paddingX()}>
        <div className={wV.maxX()}>
          {children}
        </div>
      </div>
    </div>
  )
}
