import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import Services from './Pages/Services.jsx'
import Contactus from './Pages/Contactus.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import {store} from './app/store.js';
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='services' element={<Services />}/>
      <Route path='contact' element={<Contactus />}/>
      <Route path='product/:id' element={<ProductPage />}/>
      {/* <Route path='login' element={<Login />}/> */}
      
    </Route> 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store} >
     <RouterProvider router={router} ></RouterProvider> 
    </Provider>
    
  
)
