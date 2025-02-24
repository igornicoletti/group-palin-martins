import { Careers, Contact, Footer, Header, Services } from '@/views'

export const App = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* <Outlet /> */}
          <Services />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
