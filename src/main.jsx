import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './Home/App.jsx'
import Men from './Component/MEN.jsx'
import Women from './Component/WOMEN.jsx'
import Home from './Component/HOME.jsx'
import Kids from './Component/KIDS.jsx'
import Beaut from './Component/BEAUT.jsx'
import Frame from './Component/final_frame.jsx'
import DataProvider from './Component/Store/All_data.jsx'
import WishList from './Component/wishList.jsx'
import Cart from './Component/cart.jsx'
const route = createBrowserRouter([
  {
    path : "/" , element : <App /> , children : [
      
      {
        path : "/" , element : <Men />
      },
      {
        path : "/Women" , element : <Women />
      },
      {
        path : "/Men" , element : <Men />
      },
      {
        path : "/Home" , element : <Home />
      },
      {
        path : "/Kids" , element : <Kids />
      },
      {
        path : "/Beaut" , element : <Beaut />
      },
      {
        path : "/Frame" , element : <Frame />
      },
      {
        path : "/WishList" , element : <WishList />
      },
      {
        path : "/cart" , element : <Cart />
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router = {route} />
  </StrictMode>
)
