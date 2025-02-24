import { tv } from 'tailwind-variants'
import { ButtonAction, SectionHeading, SectionWrapper } from '../components'
import { contactCardData, contactInfoData, contactSubitleData, contactTitleData } from '../data'

const contactVariants = tv({
  slots: {
    backgroundImage: '-z-10 absolute inset-0 w-full h-full object-cover opacity-25',
    contentWrapper: 'max-w-2xl mx-auto text-center mt-16',
    cardContainer: 'max-w-lg lg:max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 mt-24',
    card: 'group flex flex-col items-start gap-6 p-8 rounded-2xl shadow-2xl transition-shadow',
    cardIcon: '-mb-2 text-3xl',
    subtitleWrapper: 'max-w-2xl mx-auto text-center mt-24',
    infoContainer: 'max-w-lg lg:max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-12 mb-24 xl:mb-32 text-center',
    infoCard: 'flex flex-col items-center gap-4 p-6 rounded-xl shadow-xl',
  }
})

export const Contact = () => {
  const cV = contactVariants()

  return (
    <SectionWrapper id={'contact'}>
      <img src='/images/contact-bg.png' className={cV.backgroundImage()} />
      {/* contactTitleData */}
      <div className={cV.contentWrapper()}>
        <SectionHeading {...contactTitleData} />
      </div>
      {/* contactCardData */}
      <div className={cV.cardContainer()}>
        {contactCardData.map(({ button, icon: Icon, ...data }) => (
          <div key={data.id} className={cV.card()}>
            <Icon className={cV.cardIcon()} weight='duotone' />
            <SectionHeading {...data} />
            <ButtonAction {...button} />
          </div>
        ))}
      </div>
      {/* contactSubitleData */}
      <div className={cV.subtitleWrapper()}>
        <SectionHeading {...contactSubitleData} />
      </div>
      {/* contactInfoData */}
      <div className={cV.infoContainer()}>
        {contactInfoData.map(({ button, ...data }) => (
          <div key={data.id} id={data.id} className={cV.infoCard()}>
            <SectionHeading {...data} />
            <ButtonAction {...button} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
