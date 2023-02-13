import "../models/navigatorProps"
import { NavigatorProps } from "../models/navigatorProps"
export const layoutConfig: NavigatorProps = {
  className: 'navigator-list',
  routes: [
      {label: 'Home', path: '/'},
      {label: 'Customers', path: '/customers'},
      {label: 'Orders', path: '/orders'},
    
  ]
  }
