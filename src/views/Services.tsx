import { SectionHeading, SectionWrapper } from '@/components'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { serviceData, servicesTitleData } from '@/data'
import { tv } from 'tailwind-variants'


const servicesVariants = tv({
  slots: {
    contentWrapper: 'max-w-xl mr-auto text-left mt-16',
    cardContainer: 'max-w-7xl mx-auto grid lg:grid-cols-1 gap-10 mt-12 mb-24 xl:mb-32',
    card: 'group flex flex-col items-start gap-6 p-8 rounded-2xl shadow-lg border border-zinc-100 shadow-zinc-50 bg-white transition-shadow',
    cardIcon: 'text-3xl text-palin/50',
    subtitleWrapper: 'max-w-2xl mx-auto text-center mt-24',
    infoContainer: 'max-w-lg lg:max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-12 mb-24 xl:mb-32 text-center',
    infoCard: ' flex flex-col items-center text-center gap-4 px-6 py-8 rounded-xl border border-zinc-100',
    infoTitle: 'leading-tight text-muted-foreground font-medium',
  }
})

export const Services = () => {
  const sV = servicesVariants()

  return (
    <SectionWrapper id={'contact'}>
      <div className={sV.contentWrapper()}>
        <SectionHeading {...servicesTitleData} />
      </div>

      <div >
        <Carousel className={sV.cardContainer()}>
          <CarouselContent className='-ml-4'>
            {serviceData.map(({ ...data }) => (
              <CarouselItem key={data.id} className={'md:basis-1/2 xl:basis-1/3'}>
                <div className={sV.infoCard()}>
                  <data.icon className={sV.cardIcon()} weight='duotone' />
                  <SectionHeading {...data} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </SectionWrapper>
  )
}


/*


    <section id='solutions' className='bg-background'>
      <div className='scroll-m-20 mx-auto w-full max-w-7xl'>
        <div className='px-6 py-12 md:px-8 md:py-16 lg:py-24 xl:py-32'>

          <div className='grid lg:grid-cols-1 lg:items-end gap-6 md:gap-12'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-gold font-semibold uppercase'>Nossas especialidades</h2>
              <h1 className='mt-2 mb-4 text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase'>Nossas xpertise Tributária</h1>
              <p className='text-muted-foreground'>Cada segmento tem desafios e necessidades específicas. Por isso, oferecemos consultoria especializada e soluções tributárias personalizadas para otimizar sua gestão fiscal e impulsionar o crescimento do seu negócio.</p>
            </div>
            <div className='space-y-2'>
              <Carousel className='w-full'>
                <CarouselContent className='-ml-1'>
                  {serviceData.map((expertise, i) => (
                    <CarouselItem key={i} className='pl-1 md:basis-1/2 xl:basis-1/3'>
                      <div className='p-1'>
                        <div>
                          <div className='items-center text-center'>
                            <expertise.icon size={32} strokeWidth={1} className='mx-auto mb-6 text-gold' />
                            <p className='text-lg'>{expertise.title}</p>
                          </div>
                          <div>
                            <div className='space-y-2'>
                              {expertise.contents.map((content, i) => (
                                <p key={i}>{content}</p>
                              ))}
                            </div>
                          </div>
                          <div className='w-full'>{expertise.footer}</div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

        </div>
      </div>
    </section>*/
