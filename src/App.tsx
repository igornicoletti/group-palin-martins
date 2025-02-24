import { Contact, Footer } from './views'

export const App = () => {

  return (
    <>
      <div className='w-full min-h-screen bg-background text-foreground'>
        <Contact />
        <Footer />
      </div>
    </>
  )
}
