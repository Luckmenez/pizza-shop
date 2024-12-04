import { createBrowserRouter } from 'react-router'

import { DashBoard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
])
