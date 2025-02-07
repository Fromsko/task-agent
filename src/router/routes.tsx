// routes.ts
import React from 'react'

const MainContent = React.lazy(() => import('../components/ui/MainContent'))
const Demo = React.lazy(() => import('../layouts/demo'))

const Default = React.lazy(() => import('../layouts/default'))
const Pricing = React.lazy(() => import('../layouts/pricing'))
const Download = React.lazy(() => import('../layouts/download'))
const Dashboard = React.lazy(() => import('../layouts/dashboard'))

interface RouteType {
  path: string
  element: React.ReactNode
  children?: RouteType[]
}

const routes: RouteType[] = [
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '',
        element: <MainContent />
      },
      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/pricing',
        element: <Pricing />
      }
    ]
  },
  {
    path:'/demo',
    element: <Demo />
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />
  }
]

export default routes
