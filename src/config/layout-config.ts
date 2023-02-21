import { NavigatorProps } from "../model/NavigatorProps"

export const layoutConfig: NavigatorProps = {
    
    routes: [
        { label: 'Login', path: '/login', flAdmin: false, flAuth: false},
        { label: 'Employees', path: '/', flAdmin: true, flAuth: true },
        { label: 'Add Employees', path: '/add', flAdmin: false, flAuth: true },
        { label: 'Age Statistics', path: '/statistics/age', flAdmin: true, flAuth: true },
        { label: 'Salary Statistics', path: '/statistics/salary', flAdmin: true, flAuth: true },
        { label: 'Logout', path: '/logout', flAdmin: true, flAuth: true}

    ]
}


