import "./navigatorProps"
import { NavigatorProps } from "./navigatorProps"
export const layoutCongig: NavigatorProps = {
    classNameList: "navigator-list-layout",
    navigatorConfig:  [{navigatorTo: '/', navigatorName: 'Home'},
    {navigatorTo: '/customers', navigatorName: 'Customers'},
    {navigatorTo: '/orders', navigatorName: 'Orders'},
    {navigatorTo: '/products', navigatorName: 'Products'}]
  }
