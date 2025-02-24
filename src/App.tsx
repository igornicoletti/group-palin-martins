import { Outlet } from 'react-router'
import { Footer, Header } from './views'

export const App = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
