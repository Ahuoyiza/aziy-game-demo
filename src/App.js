import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Welcome from './components/Welcome';
import StartScreen from './components/screens/StartScreen';
import WorldScreen from './components/screens/WorldScreen';
import Profile from './components/screens/Profile';
import LoungeCityScreen from './components/screens/LoungeCityScreen';
import Error from './components/Error';
import './App.css';


const router  = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />
    },
    {
      path: '/start',
      element: <StartScreen />
    },
    {
      path: '/map',
      element: <WorldScreen />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/lounge',
      element: <LoungeCityScreen />
    },
    {
    path: '/*',
    element: <Error />
    },
  
  ])


const App = () => {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <h1 className='mobile-warning '>Oops, this app can only be viewd on desktop or screens larger than 768px</h1>
    </>
  )
}

export default App
