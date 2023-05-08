import { createBrowserRouter} from 'react-router-dom'
import Layout from '../layouts/Layout'
import NoutFoud from '../layouts/NoutFoud'
import Register from '../components/Register'
import Inicio from '../components/Inicio';


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        errorElement: <NoutFoud/>,
        children: [
            {
                path:'/',
                index: true,
                element: <Register/>
            },
            {
            path: 'inicio',
            element: <Inicio/>
            }

        ]
    }
]);