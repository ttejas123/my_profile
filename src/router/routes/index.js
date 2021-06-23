import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/Rfq7/rfqN'

// ** Merge Routes
const Routes = [
  {
    path: '/Rfq7/rfqN',
    component: lazy(() => import('../../views/Rfq7/rfqN'))
  },
  {
    path: '/topbar',
    component: lazy(() => import('../../views/Rfq7/topbar'))
  },
  {
    path: '/serach-grid',
    component: lazy(() => import('../../views/Rfq7/searchGrid.js'))
  },
  {
    path: '/create-cart',
    component: lazy(() => import('../../views/Rfq7/createCart.js'))
  },
  {
    path: '/product/productDetails',
    component: lazy(() => import('../../views/product/productDetail'))
  },
  {
    path: '/search/searchPage',
    component: lazy(() => import('../../views/search'))
  },
  // {
  //   path: '/login',
  //   component: lazy(() => import('../../views/Login')),
  //   layout: 'BlankLayout',
  //   meta: {
  //     authRoute: true
  //   }
  // },
  {
    path: '/register',
    component: lazy(() => import('../../views/register/RegisterV1')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/log1',
    component: lazy(() => import('../../views/register/LoginV1')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/home/dashBoard',
    component: lazy(() => import('../../views/Ddashboard'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/register/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/dash',
    component: lazy(() => import('../../views/register/dash'))
  },
  {
    path: '/home1',
    component: lazy(() => import('../../views/Home/home_info_card'))
  }

  
]

export { DefaultRoute, TemplateTitle, Routes }
