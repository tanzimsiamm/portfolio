import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { store } from './redux/store'
import Root from './Root/Root'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path: '',
        element: <Home/>
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
