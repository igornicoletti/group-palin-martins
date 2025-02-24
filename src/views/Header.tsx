import { NavigationHeader } from '../components'

export const Header = () => {

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <a href="/">
          <span className="sr-only">Grupo Palin&Martins</span>
          <img alt="Grupo Palin&Martins" src="/images/logo-black.png" className="h-14 w-auto flex-shrink-0" />
        </a>
        <NavigationHeader />
      </nav>
    </header>
  )
}
