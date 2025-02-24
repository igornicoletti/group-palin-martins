import { createBrowserRouter } from 'react-router'
import { App } from './App'
import { Careers, Contact } from './views'

export const router = createBrowserRouter([
  {
    path: "https://group-palin-martins.vercel.app/",
    element: <App />,
    children: [
      { path: "https://group-palin-martins.vercel.app/contato", element: <Contact /> },
      { path: "https://group-palin-martins.vercel.app/carreiras", element: <Careers /> },
    ],
  },
])
