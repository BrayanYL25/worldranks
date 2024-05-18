import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Country from './pages/Country'
import { Provider } from './context/Countries'
import getCountries from './utils/getCountries'

//  react router docs: https://reactrouter.com/en/main/start/overview

const root = createRoot(document.getElementById('app'))
const routes = createBrowserRouter([
  {
    path: '/worldranks/',
    element: <Provider><Home /></Provider>
  },
  {
    path: '/worldranks/:name',
    element: <Country />,
    loader: async ({ params }) => {
      const countries = await getCountries()
      const { name } = params
      return countries.find(country => country.name === name)
    }
  }
])

root.render(<RouterProvider router={routes} />)
