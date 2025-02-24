import { SectionHeading, SectionWrapper } from '../components'
import { careersData } from '../data'

export const Careers = () => {

  return (
    <>
      <SectionWrapper id={'carrers'}>
        <div className='max-w-2xl mr-auto text-left'>
          <SectionHeading {...careersData} />
        </div>
      </SectionWrapper>
    </>
  )
}
