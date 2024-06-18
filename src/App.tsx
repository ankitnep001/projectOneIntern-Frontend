import AuthTemplate from "@ui/common/templates/AuthTemplate"
import LandingPage from "@ui/landingPage/pages/LandingPage"
import LandingPageTemplate from "@ui/landingPage/templates/LandingPageTemplate"
import Login from "@ui/user/pages/auth/Login"
import SignUp from "@ui/user/pages/auth/SignUp"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([

  // Landing page
  {
    path: '/',
    element: <LandingPageTemplate />,
    children: [
      { index: true, element: <LandingPage /> }
    ]
  },

  // UserAuth
  {
    path: '/auth',
    element: <AuthTemplate />,
    children: [
      { path: '/auth', element: <Login /> },
      { path: '/auth/user', element: <Login /> },
      { path: '/auth/user/sign-up', element: <SignUp /> }
    ]
  }
])
function App() {

  return (

    <RouterProvider router={router} />

  )
}

export default App
