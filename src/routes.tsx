import { createBrowserRouter } from 'react-router'
import { App } from './App'
import { Careers, Contact } from './views'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "contato", element: <Contact /> },
      { path: "carreiras", element: <Careers /> },
    ],
  },
])
