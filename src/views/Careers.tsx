import { useState } from 'react'
import { tv } from 'tailwind-variants'
import { ButtonAction, SectionHeading, SectionWrapper } from '../components'
import { careersPositionsData, careersTitleData } from '../data'

const careerstVariants = tv({
  slots: {
    backgroundImage: '-z-10 absolute inset-0 w-full h-full object-cover opacity-25',
    contentWrapper: 'max-w-2xl mx-auto text-center mt-16',
    cardContainer: 'max-w-lg lg:max-w-5xl mx-auto grid lg:grid-cols-1 gap-10 mt-24 mb-24 xl:mb-32',
    card: 'group flex flex-col items-start gap-6 p-8 rounded-2xl shadow-2xl border border-zinc-100 shadow-zinc-100 hover:shadow-zinc-200 bg-white transition-shadow',
    cardIcon: 'text-3xl text-palin/50',
    subtitleWrapper: 'max-w-2xl mx-auto text-center mt-24',
    infoContainer: 'max-w-lg lg:max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-12 mb-24 xl:mb-32 text-center',
    infoCard: 'flex flex-col items-center gap-4 p-6 rounded-xl shadow-xl border border-zinc-100 shadow-zinc-50 bg-white',
    infoTitle: 'ext-lg leading-tight text-muted-foreground font-medium',
  }
})

const filters = ["Todas", "Tecnologia", "Marketing"]

export const Careers = () => {
  const cV = careerstVariants()
  const [selectedFilter, setSelectedFilter] = useState("Todas")

  const filteredPositions =
    selectedFilter === "Todas"
      ? careersPositionsData
      : careersPositionsData.filter((p) => p.category === selectedFilter)

  return (
    <SectionWrapper id={'contact'}>
      <div className={cV.contentWrapper()}>
        <SectionHeading {...careersTitleData} />
      </div>


      <div className={cV.cardContainer()}>
        <div className="flex items-center justify-center space-x-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 cursor-pointer rounded-full text-sm text-center ${selectedFilter === filter
                ? "text-palin font-semibold uppercase"
                : "text-muted-foreground uppercase font-normal"}`}>
              {filter}
            </button>
          ))}
        </div>

        {filteredPositions.map((category) => (
          <div key={category.category} className="space-y-2">
            <h2 className="text-lg font-semibold">{category.category}</h2>
            <div className='divide-y divide-y-border'>
              {category.jobs.map((job) => (
                <div key={job.title} className="flex justify-between items-center  pb-4 py-4">
                  <div className='space-y-2'>
                    <h3 className="text-palin text-base font-medium">{job.title}</h3>
                    <p className="text-muted-foreground text-sm">{job.location}</p>
                  </div>
                  <ButtonAction {...job.button} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
