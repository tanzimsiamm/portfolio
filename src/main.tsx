import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { store } from './redux/store'
import Root from './Root/Root'
import Home from './pages/Home'
import NotFound from './components/NotFound'

// import Login from './pages/Login'
// import Dashboard from './dashboard/Dashboard'
// import ManageProjects from './dashboard/ManageProjects'
// import ManageSkills from './dashboard/ManageSkills'
// import ManageBlogs from './dashboard/ManageBlogs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      // {
      //   path: 'login',
      //   element: <Login/>
      // },
      
      // {
      //   path: 'dashboard',
      //   element: <Dashboard/>,
      //   children : [
      //     {
      //       path :'blogs',
      //       element : <ManageBlogs/>
      //     },
      //     {
      //       path :'projects',
      //       element : <ManageProjects/>
      //     },
      //     {
      //       path :'skills',
      //       element : <ManageSkills/>
      //     },
      //   ]
      // },
      {
        path: '*',              // ✅ any unmatched route
        element: <NotFound />   // ✅ show NotFound page
      }
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
