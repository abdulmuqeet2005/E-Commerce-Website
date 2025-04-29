import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import SinglePro from './pages/Singlepro.jsx'
import Contact from './pages/Contact.jsx'
import Card from './pages/Card.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Home/> 
      },
      {
        path: 'About',
        element: <About/>
      },
      {
        path: 'Products',
        element: <Products/>
      },
      {
        path: 'Products/:id',
        element: <SinglePro/>
      },
      {
        path: 'Contact',
        element: <Contact/>
      },
      {
        path: 'Card',
        element: <Card/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
