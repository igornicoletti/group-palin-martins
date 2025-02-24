import { tv } from 'tailwind-variants'
import { SectionWrapper } from '../components'
import { footerData } from '../data'

const footerVariants = tv({
  slots: {
    base: 'bg-primary-foreground',
    wrapp: 'w-full max-w-7xl mx-auto pt-24 xl:pt-32',
    gridContainer: 'grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8',
    logoContainer: 'col-span-1',
    logo: 'h-16 w-auto flex-shrink-0',
    linksContainer: 'col-span-3 grid md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8 lg:gap-x-6',
    column: 'space-y-4',
    columnTitle: 'text-muted-foreground font-medium text-sm',
    linkList: 'space-y-1',
    link: 'text-muted-foreground font-normal transition-colors text-sm',
    copyright: 'pt-16 pb-8 text-muted-foreground text-sm',
  }
})

export const Footer = () => {
  const fV = footerVariants()

  return (
    <footer className={fV.base()}>
      <SectionWrapper id='footer'>
        <div className={fV.wrapp()}>
          <div className={fV.gridContainer()}>
            <div className={fV.logoContainer()}>
              <img src={footerData.logo.src} alt={footerData.logo.alt} className={fV.logo()} />
            </div>
            <div className={fV.linksContainer()}>
              {footerData.columns.map((column) => (
                <div key={column.title} className={fV.column()}>
                  <h3 className={fV.columnTitle()}>{column.title}</h3>
                  <ul role='list' className={fV.linkList()}>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a className={fV.link()} href={link.href} target='_blank' rel='noopener noreferrer'>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className={fV.copyright()}>&copy; 2025 Palin&Martins.</p>
        </div>
      </SectionWrapper>
    </footer>
  )
}
