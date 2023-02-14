import "../models/navigatorProps"
import { NavigatorProps } from "../models/navigatorProps"
export const layoutConfig: NavigatorProps = {
  className: 'navigator-list',
  routes: [
      {label: 'Employees', path: '/'},
      {label: 'Add Employee', path: '/addEmployee'},
      {label: 'Age Statictics', path: '/ageStatistics'},
      {label: 'Salary Statictics', path: '/salaryStatistics'},
    
  ]
  }
